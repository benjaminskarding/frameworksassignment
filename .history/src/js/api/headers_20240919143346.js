import { API_KEY } from "./constants";

export function headers(accessToken = null) {
  const headers = new Headers();

  // Add the API_KEY if required for certain endpoints (e.g., registration)
  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  // Add Authorization header if an accessToken is passed (for user-specific requests)
  if (accessToken) {
    headers.append("Authorization", `Bearer ${accessToken}`);
  }

  return headers;
}
