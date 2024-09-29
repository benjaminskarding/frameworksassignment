import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function readProfile(username, accessToken) {
  try {
    const response = await fetch(`${API_SOCIAL_PROFILES}/${username}`, {
      headers: headers(accessToken),
    });

    if (!response.ok) {
      throw new Error(`Failed to load profile for ${username}`);
    }

    const profileData = await response.json();
    return profileData.data;
  } catch (error) {
    console.error("Error loading profile:", error);
    throw error;
  }
}
