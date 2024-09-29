import { API_SOCIAL_PROFILES } from '../constants'; 
import { headers } from '../headers';


export async function readProfile(username) {
    const url = `${API_SOCIAL_PROFILES}/${username}`;
  const options = {
    method: 'GET',
    headers: headers(localStorage.getItem('authToken')), // assuming accessToken is stored in localStorage
  };
  
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error fetching profile: ${response.statusText}`);
    }
    const profileData = await response.json();
    return profileData.data; // return only the data object
  } catch (error) {
    console.error('Failed to load profile:', error);
  }
}

export async function readProfiles(limit, page) {}
