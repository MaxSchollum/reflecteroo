/* global google */
import { gapi } from 'gapi-script';

const CLIENT_ID ='828157689171-18macojlq7c3luip5k80em2us46f4u0b.apps.googleusercontent.com';
const API_KEY = 'AIzaSyCruhehXVtt1c_T_0tTXl_7ZvHyprWf1Q8';

const SCOPES = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.metadata',
  'https://www.googleapis.com/auth/documents',
  'https://www.googleapis.com/auth/spreadsheets'
].join(' ');

// Initializes the gapi client and retrieves an access token using the new GIS token client.
export const initGoogleAPI = () => {
  return new Promise((resolve, reject) => {
    function start() {
      gapi.client
        .init({
          apiKey: API_KEY,
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
            'https://sheets.googleapis.com/$discovery/rest?version=v4',
            'https://docs.googleapis.com/$discovery/rest?version=v1'
          ]
        })
        .then(async () => {
          try {
            // Retrieve an access token using the GIS token client.
            const accessToken = await getAccessToken();
            // Set the retrieved access token for subsequent API calls.
            gapi.client.setToken({ access_token: accessToken });
            console.log('✅ Google API initialized with access token');
            resolve();
          } catch (err) {
            console.error('❌ Failed to get access token', err);
            reject(err);
          }
        })
        .catch((err) => {
          console.error('❌ Failed to initialize Google API', err);
          reject(err);
        });
    }
    // Load the gapi client module.
    gapi.load('client', start);
  });
};

// Retrieves an access token using the new Google Identity Services (GIS) token client.
export const getAccessToken = () => {
  return new Promise((resolve, reject) => {
    // Ensure that you've added the following script to your public/index.html:
    // <script src="https://accounts.google.com/gsi/client" async defer></script>
    const tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: (response) => {
        if (response.error) {
          reject(response);
        } else {
          resolve(response.access_token);
        }
      }
    });
    // Force consent to ensure that Drive permissions are requested.
    tokenClient.requestAccessToken({ prompt: 'consent' });
  });
};

// Gets or creates a folder by name (optionally inside a parent folder).
export const getOrCreateFolder = async (folderName, parentId = null) => {
  const q = [
    `name = '${folderName}'`,
    `mimeType = 'application/vnd.google-apps.folder'`,
    `trashed = false`,
    parentId ? `'${parentId}' in parents` : `'root' in parents`
  ].join(' and ');

  try {
    const res = await gapi.client.drive.files.list({
      q,
      fields: 'files(id, name)',
      spaces: 'drive'
    });
    if (res.result.files && res.result.files.length > 0) {
      console.log(`📁 Found folder "${folderName}"`);
      return res.result.files[0].id;
    }
  } catch (err) {
    console.error(`❌ Error querying folder "${folderName}"`, err);
  }

  try {
    const fileMetadata = {
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
      ...(parentId && { parents: [parentId] })
    };

    const createRes = await gapi.client.drive.files.create({
      resource: fileMetadata,
      fields: 'id'
    });
    console.log(`🆕 Created folder "${folderName}"`);
    return createRes.result.id;
  } catch (err) {
    console.error(`❌ Error creating folder "${folderName}"`, err);
    throw err;
  }
};
