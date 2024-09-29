import { API_KEY } from "./constants";

export function headers(accessToken = null) {
  const headers = new Headers();

  // Include API Key if needed
  if (API_KEY && !accessToken) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  // Include Authorization token if present
  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }


  return headers;
}
