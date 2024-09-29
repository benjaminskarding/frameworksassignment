import { API_KEY } from "./constants";

export function headers(accessToken = null) {
  const headers = new Headers();
  
  // For requests that need the API Key
  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  // For requests that need the user's access token
  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  headers.append("Content-Type", "application/json"); // Common content type
  return headers;
}
