import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function updatePost(postId, postData) {
    const accessToken = localStorage.getItem("accessToken");
    
    // Manually set the headers
    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        "X-Noroff-API-Key": "your-master-api-key-here",  // Replace with your actual key
        "Content-Type": "application/json",
    };

    try {
        const response = await fetch(`https://v2.api.noroff.dev/social/posts/${postId}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(postData),
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