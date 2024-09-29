import { API_SOCIAL_PROFILES } from '../constants'; 
import { headers } from '../headers';


export async function readProfile() {
    const authToken = localStorage.getItem('authToken');
    console.log("Retrieved authToken:", authToken); 
  
    if (!authToken) {
      console.error("No auth token found! Cannot fetch profile.");
      return;
    }
  
    const url = `${API_SOCIAL_PROFILES}`; // Fetch the profile of the authenticated user
    const options = {
      method: 'GET',
      headers: headers(authToken), // Pass the authToken and API_KEY in the headers
    };
  
    console.log("Fetching profile from URL:", url);
    console.log("Options:", options);
  
    try {
      const response = await fetch(url, options);
      console.log("Response status:", response.status);
  
      if (!response.ok) {
        throw new Error(`Error fetching profile: ${response.statusText}`);
      }
  
      const profileData = await response.json();
      console.log("Profile Data:", profileData);
      return profileData.data; // Returning the profile data
  
    } catch (error) {
      console.error('Failed to load profile:', error);
    }
  }

export async function readProfiles(limit, page) {}
