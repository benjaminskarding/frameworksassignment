import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body }) {
    try {
      const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
        method: 'PUT',
        headers: headers(),
        body: JSON.stringify({ title, body, tags, media }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response data:', errorData);
        throw new Error('Failed to update the post');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in updatePost:', error);
      throw error;
    }
  }