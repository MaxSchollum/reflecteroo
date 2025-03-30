import React from 'react';
import './Landing.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { initGoogleAPI, getOrCreateFolder } from '../googleAPI';

function Landing({ setUser }) {
  const handleLogin = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      setUser(decoded);

      // ✅ Initialize Google API with the token
      await initGoogleAPI(credentialResponse.credential);

      const rootFolderId = await getOrCreateFolder('Reflecteroo');
      const currentYear = new Date().getFullYear().toString();
      const yearFolderId = await getOrCreateFolder(currentYear, rootFolderId);

      console.log(`✅ Year folder ready: ${yearFolderId}`);
    } catch (err) {
      console.error('❌ Failed to initialize Google API', err);
      alert('There was a problem connecting to Google Drive.');
    }
  };

  return (
    <div
      className="Landing"
      style={{ backgroundImage: `url("/background.jpg")` }}
    >
      <div className="overlay">
        <h1>Don't let life happen to you</h1>

        <GoogleLogin
          onSuccess={handleLogin}
          onError={() => {
            alert('Login failed');
          }}
        />

        <p>Your online diary on steroids</p>
      </div>
    </div>
  );
}

export default Landing;
