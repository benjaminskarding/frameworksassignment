import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body, tags, media }) {
    id = new URLSearchParams(window.location.search).get('id');

    try {
        const response = await fetch (`${API_SOCIAL_POSTS}/${id}`, {
            method: 'PUT',
            headers: headers(),
            body: JSON.stringify({title, body, tags, media})
        });
         console.log(response);
        if (!response.ok) {
            alert('bad times')
        }

        if (response.ok) {
            alert('Post successfully updated')
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to update the post:', error);
    }
}