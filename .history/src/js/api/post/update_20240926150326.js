import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function updatePost(id, { title, body, tags, media }) {
    const accessToken = localStorage.getItem("accessToken");

    console.log("Access Token:", accessToken);
    if (!accessToken) {
        throw new Error("No access token found, please log in");
    }

    // Prepare the updated post data
    const updatedPost = { title, body, tags };
    console.log("Initial updated post:", updatedPost);

    if (media?.url) {
        updatedPost.media = media;
    }

    console.log("Final post data being sent:", updatedPost);

    // Log the URL and headers
    console.log("PUT URL being used:", `${API_SOCIAL_POSTS}/${id}`);
    console.log("Headers being sent as object:", headers(accessToken, "application/json"));

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "PUT",
            headers: headers(accessToken, "application/json"),
            body: JSON.stringify(updatedPost),
        });

        // Log the full response
        console.log("Full response received:", response);

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