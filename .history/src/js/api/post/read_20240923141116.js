import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

// Fetch a single post by its ID
export async function readPost(id) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        console.error("No access token found.");
        throw new Error("No access token found. Please log in.");
    }

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "GET",
            headers: headers(accessToken, "application/json"),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || "Failed to fetch the post");
        }

        const data = await response.json();
        return data.data; // Assuming 'data' contains the post information in the 'data' field
    } catch (error) {
        console.error("Error fetching post:", error);
        throw new Error(error.message || "An error occurred while fetching the post");
    }
}

export async function readPosts(limit = 12, page = 1, tag) {}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
