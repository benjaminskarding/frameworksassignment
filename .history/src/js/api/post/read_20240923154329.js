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
      const response = await fetch(`${API_SOCIAL_POSTS}/${id}?_author=true`, {
        method: "GET",
        headers: headers(accessToken, "application/json"),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch the post");
      }
  
      return data.data; 
    } catch (error) {
      console.error("Error fetching post:", error); 
      throw new Error(error.message || "An error occurred while fetching the post");
    }
  }

export async function readPosts(limit = 12, page = 1, tag) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        console.error("No access token found.");
        throw new Error("No access token found. Please log in.");
    }

    try {
        const params = new URLSearchParams({ limit, page, _author: true });
        if (tag) {
            params.append("tag", tag);
        }

        const response = await fetch(`${API_SOCIAL_POSTS}?${params.toString()}`, {
            method: "GET",
            headers: headers(accessToken, "application/json"),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || "Failed to fetch posts");
        }

        const data = await response.json();
        return data.data; 
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error(error.message || "An error occurred while fetching posts");
    }
}

export async function readPostsByUser(username, limit = 12, page = 1, tag) {}
