import { API_SOCIAL_PROFILES } from '../constants'; 
import { headers } from '../headers';


export async function readProfile() {
    const authToken = localStorage.getItem('authToken');
    const userEmail = localStorage.getItem('userEmail'); // Assuming email is stored in localStorage during login
    console.log("Retrieved authToken:", authToken); 
    console.log("Retrieved userEmail:", userEmail); 
  
    if (!userEmail) {
      console.error("User email not found in localStorage");
      return;
    }
  
    const url = `${API_SOCIAL_PROFILES}/${userEmail}`; // Assuming the API supports fetching by email
    const options = {
      method: 'GET',
      headers: headers(authToken),
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
      return profileData.data;
  
    } catch (error) {
      console.error('Failed to load profile:', error);
    }
  }

export async function readProfiles(limit, page) {}
