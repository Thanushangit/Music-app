const authEndpoint = import.meta.env.VITE_REACT_APP_AUTH_ENDPOINT;
const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const redirecturl = import.meta.env.VITE_REACT_APP_REDIRECT_URL;
const scopes = import.meta.env.VITE_REACT_APP_SCOPES.split(" ");

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirecturl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
