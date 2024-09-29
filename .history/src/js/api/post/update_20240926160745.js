import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body, tags, media }) {
    const accessToken = localStorage.getItem("accessToken");


    if (!accessToken) {
        console.error("No access token found. User not logged in.");
        return;
    }

    const updatedPost = { title, body, tags, media };
    console.log("Sending data to update post:", updatedPost);

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "PUT",
            headers: headers(accessToken, "application/json"), 
            body: JSON.stringify(updatedPost),
        });


        if (!response.ok) {
            throw new Error("Failed to update post");
        }
        const data = await response.json();
        console.log("Updated Post Response:", data);
        return data;
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
}