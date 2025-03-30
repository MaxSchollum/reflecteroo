import { useState } from 'react';
import Landing from './Components/Landing';
import MainApp from './MainApp';

function App() {
  const [user, setUser] = useState(null);

  return user ? (
    <MainApp user={user} />
  ) : (
    <Landing setUser={setUser} />
  );
}

export default App;
