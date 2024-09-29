import { API_SOCIAL_PROFILES } from '../constants'; 
import { headers } from '../headers';


export async function readProfile() {
    const authToken = localStorage.getItem('authToken');
    const userEmail = localStorage.getItem('userEmail'); // Get the logged-in user's email
  
    console.log("Retrieved authToken:", authToken);
    console.log("Retrieved userEmail:", userEmail);
  
    if (!authToken || !userEmail) {
      console.error("No auth token or user email found! Cannot fetch profile.");
      return;
    }
  
    // Use the userEmail to fetch the profile data for the logged-in user
    const url = `${API_SOCIAL_PROFILES}/${userEmail}`; // Using email in the API URL
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
      return profileData.data; // Return the profile data
  
    } catch (error) {
      console.error('Failed to load profile:', error);
    }
  }



export async function readProfiles(limit, page) {}
