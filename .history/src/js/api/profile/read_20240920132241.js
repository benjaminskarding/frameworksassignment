import { API_SOCIAL_PROFILES } from "../constants";
import { headers } from "../headers";

export async function readProfile(username, accessToken) {
    try {
        const response = await fetch(`$API_SOCIAL_PROFILES/${username}`, {
            method: "GET",
            headers: headers(accessToken),
        });

        if (!response.ok) {
            throw new Error ("Failed to fetch profile data");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching profile data:", error);
        throw error;
    }
}

export async function readProfiles(limit, page) {}
