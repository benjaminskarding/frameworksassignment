import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function createPost({ title, body, tags, media }) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error("No access token found. Please log in.");
    }

    const options = {
        method: 'POST',
        headers: headers(accessToken),
        body: JSON.stringify(title, body, tags, media),
    };

    try {
        const response = await fetch(API_SOCIAL_POSTS, options);
        if(!response.ok) {
            throw new Error("Failed to create post: " + response.statusText);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }

}