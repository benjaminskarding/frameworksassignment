import { API_SOCIAL_PROFILES } from "../constants";
import { authHeaders } from "../headers";

export async function readProfile() {
  const accessToken = localStorage.getItem("accessToken");
  const name = localStorage.getItem("name");

  if (!accessToken || !name) {
    console.error("No access token or user name found! Cannot fetch profile.");
    return;
  }

  const url = `${API_SOCIAL_PROFILES}/${name}`;

  const options = {
    method: "GET",
    headers: authHeaders(accessToken),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error fetching profile: ${response.statusText}`);
    }

    const profileData = await response.json();
    return profileData.data;
  } catch (error) {
    console.error("Failed to load profile:", error);
  }
}

export async function readProfiles(limit, page) {}
