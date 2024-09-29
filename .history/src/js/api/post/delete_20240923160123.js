import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function deletePost(id) {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        console.error("No access token found");
        throw new Error("No access token found. Please log in");
    }

    try {
        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: "DELETE",
            headers: headers(accessToken, "application/json"),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || "Failed to delete post");
        }

        console.log("Post successfully deleted");
        return true;
    } catch (error) {
        console.error("Error deleting post", error);
        throw new Error(error.message || "An error occurred while deleting the post");
    }
}
