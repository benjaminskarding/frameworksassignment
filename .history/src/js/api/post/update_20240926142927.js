import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function updatePost({ title, body, tags, media }) {
    const id = new URLSearchParams(window.location.search).get('id'); // Get the post ID from the URL

    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        throw new Error("No access token found, please log in");
    }

    const updatedPost = { title, body, tags };

    if (media?.url) {
        updatedPost.media = media;
    }

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "PUT",
            headers: headers(accessToken, "application/json"),
            body: JSON.stringify(updatedPost),
        });

        if (!response.ok) {
            throw new Error("Failed to update the post");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating post:", error);
        throw new Error(error.message || "An error occurred while updating the post");
    }
}