<<<<<<< HEAD
# Auth0 Login Demo

A small React application that uses Auth0 for login, displays the authenticated
user's name and email, and retrieves an access token.

## Requirements

- Node.js 18 or newer
- An Auth0 application configured for a Single Page Application

## Run locally

From this project directory, install dependencies and start the Vite development
server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

To create and locally preview a production build, run:

```sh
npm run build
npm run preview
```

## Auth0 configuration

The Auth0 tenant domain and client ID are configured in `main.jsx`. Replace
those values with the domain and client ID from your Auth0 SPA if needed. A
client ID is intended to be used in browser applications; never put an Auth0
client secret in this project.

In the Auth0 dashboard, add the Vite URL (typically `http://localhost:5173`) to
the application's:

- **Allowed Callback URLs**
- **Allowed Logout URLs**
- **Allowed Web Origins**

The app redirects back to its current origin after login and logout.

After signing in, use **Get Token** to retrieve an access token. The token is
printed to the browser developer console; treat it as a credential and do not
share it.
=======
# Oauth
>>>>>>> 2083338455a8cbbced3443b13328c5006230e062
