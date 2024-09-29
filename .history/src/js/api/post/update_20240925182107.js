import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function updatePost(id, { title, body, tags, media }) {
    const accessToken = localStorage.getItem("accessToken");

    console.log("Access Token:", accessToken);
    if (!accessToken) {
        throw new Error("No access token found, please log in");
    }

    // Prepare the request body
    const updatedPost = { title, body, tags };
    console.log("Initial updated post:", updatedPost);

    // Only include media if it has a URL
    if (media?.url) {
        updatedPost.media = media;
    }

    console.log("Final updated post (before sending):", updatedPost);

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "PUT",
            headers: headers(accessToken, "application/json"),
            body: JSON.stringify(updatedPost),  // sending only fields that are necessary
        });

        console.log("Response Status:", response.status);
        const data = await response.json();
        console.log("Response Data:", data);

        if (!response.ok) {
            console.error("Failed to update the post. Response:", data);
            throw new Error("Failed to update the post");
        }

        return data.data;
    } catch (error) {
        console.error("Error updating post:", error);
        throw new Error(error.message || "An error occurred while updating the post");
    }
}