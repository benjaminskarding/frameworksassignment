import { API_SOCIAL_PROFILES } from '../constants'; 
import { headers } from '../headers';


export async function readProfile(username) {
    const authToken = localStorage.getItem('authToken');
    console.log("Retrieved authToken:", authToken); // Logging authToken to check
    
    const url = `${API_SOCIAL_PROFILES}/${username}`;
    const options = {
      method: 'GET',
      headers: headers(authToken), // Passing the correct token in the headers
    };
    
    console.log("Fetching profile from URL:", url); // Log the API URL
    console.log("Options:", options); // Log the request options
  
    try {
      const response = await fetch(url, options);
      console.log("Response status:", response.status); // Log response status
  
      if (!response.ok) {
        throw new Error(`Error fetching profile: ${response.statusText}`);
      }
  
      const profileData = await response.json();
      console.log("Profile Data:", profileData); // Log the profile data response
      return profileData.data; // return only the data object
  
    } catch (error) {
      console.error('Failed to load profile:', error);
    }
  }

export async function readProfiles(limit, page) {}
