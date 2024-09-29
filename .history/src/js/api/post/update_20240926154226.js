import { API_SOCIAL_POSTS } from "../constants";
import { API_KEY } from "../constants";

export async function updatePost(id, { title, body, tags, media }) {
    // Remove headers to test CORS behavior
    const headers = {
        // "Authorization": `Bearer ${accessToken}`,
        // "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json",
    };

    // Log headers and URL
    console.log("Headers:", headers);
    console.log("Request URL:", `${API_SOCIAL_POSTS}/${id}`);

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify({ title, body, tags, media }),
        });

        console.log("Response Status:", response.status);

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error response from server:", errorData);
            throw new Error(`Failed to update post: ${errorData.message}`);
        }

        const data = await response.json();
        console.log("Success response from server:", data);
        return data;
    } catch (error) {
        console.error("Error in fetch:", error);
        throw error;
    }
}
