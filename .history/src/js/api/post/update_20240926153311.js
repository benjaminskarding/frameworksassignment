import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"


export async function updatePost(id, { title, body, tags, media }) {
    const accessToken = localStorage.getItem("accessToken");

    // Construct the updated post object
    const updatedPost = { title, body, tags, media };

    // Debugging: Log headers and updatedPost
    console.log("Headers being sent as object:", headers);
    console.log("Final updated post:", updatedPost);

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "PUT",
            headers: 
            "Authorization": `Bearer ${accessToken}`,
            "X-Noroff-API-Key": "fbef4eb2-3a30-48ba-a6fd-da318f12c807",  
             "Content-Type": "application/json",
            body: JSON.stringify(updatedPost),  // Send the post data as JSON
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error response from server:", errorData);
            throw new Error("Failed to update post");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating post:", error.message);
        throw error;
    }
}