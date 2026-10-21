
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user, getAccessTokenSilently } =
    useAuth0();

  const getToken = async () => {
    console.log('Access Token:', await getAccessTokenSilently());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Auth0 Login</h1>
      {isAuthenticated ? (
        <>
          <h2>Welcome {user.name}</h2>
          <p>Email: {user.email}</p>
          <button onClick={getToken}>Get Token</button>
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Login with Auth0</button>
      )}
    </div>
  );
}

export default App;
