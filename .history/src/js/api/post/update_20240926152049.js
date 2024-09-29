import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function updatePost(id, { title, body, tags, media }) {
    const accessToken = localStorage.getItem("accessToken");

    // Manually setting the headers as per your request
    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        "X-Noroff-API-Key": "your-master-api-key-here",  // Replace this with the actual key
        "Content-Type": "application/json"
    };

    // Construct the updated post object following API structure
    const updatedPost = {
        title,
        body,
        tags,
        media
    };

    try {
        const response = await fetch(`https://v2.api.noroff.dev/social/posts/${id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(updatedPost),  // Send the correct structure
        });

        if (!response.ok) {
            throw new Error("Failed to update post");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
}