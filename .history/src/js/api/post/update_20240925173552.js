import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function updatePost(id, { title, body, tags, media }) {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        throw new Error("No access token found, please log in");
    }

    try {
        // Add post ID to the URL
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {  // Make sure id is included here
            method: "PUT",
            headers: headers(accessToken, "application/json"),
            body: JSON.stringify({ title, body, tags, media }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error("Failed to update the post");
        }

        return data.data;
    } catch (error) {
        console.error("Error updating post:", error);
        throw new Error(error.message || "An error occurred while updating the post");
    }
}
