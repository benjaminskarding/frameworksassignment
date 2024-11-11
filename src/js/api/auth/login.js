import { API_AUTH_LOGIN } from "../constants";
import { publicHeaders } from "../headers";

export async function login({ email, password }) {
  try {
    const response = await fetch(API_AUTH_LOGIN, {
      method: "POST",
      headers: publicHeaders(),
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log("Login response data:", data);

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}
