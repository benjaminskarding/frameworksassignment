import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function updatePost(id, { title, body, tags, media }) {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        throw new Error("No access token found, please log in");
    }

    // Prepare the request body
    const updatedPost = { title, body, tags };

    // Only include media if it has a URL
    if (media?.url) {
        updatedPost.media = media;
    }

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "PUT",
            headers: headers(accessToken, "application/json"),
            body: JSON.stringify(updatedPost),  // sending only fields that are necessary
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