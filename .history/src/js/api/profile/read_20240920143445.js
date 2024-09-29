import { API_SOCIAL_PROFILES } from '../constants'; 
import { headers } from '../headers';


export async function readProfile() {
    const authToken = localStorage.getItem('authToken'); 
    const name = localStorage.getItem('name'); 
  
    // Log these values to make sure they exist
    console.log("Retrieved authToken:", authToken);
    console.log("Retrieved name:", name);
  
    if (!authToken || !name) {
      console.error("No auth token or user name found! Cannot fetch profile.");
      return;
    }
  

    const url = `${API_SOCIAL_PROFILES}/${name}`; 
    
    const options = {
      method: 'GET',
      headers: headers(authToken), 
    };
  
    console.log("Fetching profile from URL:", url); // Log the API URL
  
    try {
      const response = await fetch(url, options);
      console.log("Response status:", response.status); // Log the response status
  
      if (!response.ok) {
        throw new Error(`Error fetching profile: ${response.statusText}`);
      }
  
      const profileData = await response.json();
      console.log("Profile Data:", profileData); // Log the profile data
      return profileData.data; // Return the actual user profile data
  
    } catch (error) {
      console.error('Failed to load profile:', error);
    }
  }


export async function readProfiles(limit, page) {}
