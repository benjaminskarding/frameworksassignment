import { API_SOCIAL_POSTS } from "../constants";
import { authHeaders } from "../headers";

export async function updatePost(id, { title, body }) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: "PUT",
      headers: authHeaders(),
      body: JSON.stringify({ title, body }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error response data:", errorData);
      throw new Error("Failed to update the post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in updatePost:", error);
    throw error;
  }
}
