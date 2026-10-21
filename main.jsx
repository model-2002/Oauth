
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './app.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-kz6x5dv1zj78gsfx.us.auth0.com"
    clientId="pVcD5sMp3qMrb99UM7qlb9U7OBj8gcYt"
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);
