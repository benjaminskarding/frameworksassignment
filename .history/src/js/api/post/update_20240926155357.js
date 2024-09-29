import { API_SOCIAL_POSTS } from "../constants";
import { API_KEY } from "../constants";



export async function updatePost(id, { title, body, tags, media }) {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        throw new Error("No access token found, please log in");
    }

    // Manually setting the headers as they were in Postman
    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        "X-Noroff-API-Key": "fbef4eb2-3a30-48ba-a6fd-da318f12c807",  // This key worked in Postman
        "Content-Type": "application/json"
    };

    // Construct the updated post object
    const updatedPost = {
        title,
        body,
        tags,
        media
    };

    try {
        console.log("Headers being sent as object:", headers);
        console.log("PUT URL being used:", `https://v2.api.noroff.dev/social/posts/${id}`);
        console.log("Final updated post:", updatedPost);

        const response = await fetch(`https://v2.api.noroff.dev/social/posts/${id}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(updatedPost),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(errorResponse.errors?.[0]?.message || "Failed to update post");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
}
