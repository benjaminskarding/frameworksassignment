import { API_AUTH_REGISTER } from "../constants";
import { headers } from "./headers";

export async function registerUser(userData) {
  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(), // No accessToken needed for registration
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }

    return data;
  } catch (error) {
    console.error("Registration Error:", error);
    throw error;
  }
}
