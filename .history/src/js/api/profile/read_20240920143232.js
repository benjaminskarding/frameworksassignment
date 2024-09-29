import { API_SOCIAL_PROFILES } from '../constants'; 
import { headers } from '../headers';


export async function readProfile() {
  const authToken = localStorage.getItem('authToken'); // Retrieve authToken from localStorage
  const name = localStorage.getItem('name'); // Retrieve user's "name" from localStorage

  // Log these values to make sure they exist
  console.log("Retrieved authToken:", authToken);
  console.log("Retrieved name:", name);

  if (!authToken || !name) {
    console.error("No auth token or user name found! Cannot fetch profile.");
    return;
  }

  // API endpoint for fetching the profile by name
  const url = `${API_SOCIAL_PROFILES}/${name}`; // Example: /social/profiles/{name}
  
  // Include both the access token and API key in the request headers
  const options = {
    method: 'GET',
    headers: headers(authToken), // Use the headers function to include both authToken and API_KEY
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
