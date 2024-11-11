import { API_SOCIAL_POSTS } from "../constants";
import { authHeaders } from "../headers";

export async function readPost(id) {
  try {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}?_author=true`, {
      method: "GET",
      headers: authHeaders(),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to fetch the post");
    }

    return data.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    throw new Error(
      error.message || "An error occurred while fetching the post"
    );
  }
}

export async function readPosts(limit = 12, page = 1, tag) {
  try {
    const params = new URLSearchParams({ limit, page, _author: true });
    if (tag) {
      params.append("tag", tag);
    }

    const response = await fetch(`${API_SOCIAL_POSTS}?${params.toString()}`, {
      method: "GET",
      headers: authHeaders(),
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
