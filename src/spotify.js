const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "b8ce6957508c4ce089d50230e6748d1a";
const redirecturl = "http://localhost:5173";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirecturl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
