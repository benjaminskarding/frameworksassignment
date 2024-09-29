import { API_AUTH_LOGIN } from "../constants";
import { headers } from "./headers";

export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: headers(), // No access token needed for login
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}
