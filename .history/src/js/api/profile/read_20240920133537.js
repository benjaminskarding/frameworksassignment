import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function readProfile(name, accessToken) {
    try {
      const response = await fetch(`${API_SOCIAL_PROFILES}/${name}`, {
        method: "GET",
        headers: headers(accessToken), 
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch profile data.");
      }
  
      const profileData = await response.json();
      return profileData.data;
    } catch (error) {
      console.error("Error reading profile:", error);
      throw error;
    }
  }
  
