import { API_KEY } from "./constants";

export function headers(accessToken = null, contentType = null) {
  const headers = new Headers();

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  if (contentType) {
    headers.append("Content-Type", contentType);
  }

  


  return headers;
}
