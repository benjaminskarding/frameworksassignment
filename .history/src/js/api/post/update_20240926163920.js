import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body, tags, media }) {
    // Fetch the post ID from the URL
    id = new URLSearchParams(window.location.search).get('id');

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: 'PUT',
            headers: headers(),
            body: JSON.stringify({ title, body, tags, media })
        });

        console.log('Response object:', response); // Log the entire response

        if (!response.ok) {
            console.error('Failed to update post: Response status', response.status);
            alert('Failed to update post');
            return;
        }

        // If response is OK, log success and return the JSON data
        console.log('Post updated successfully');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to update the post:', error);
    }
}