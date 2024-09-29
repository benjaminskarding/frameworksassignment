import { API_SOCIAL_POSTS } from "../constants";
import { API_KEY } from "../constants";



export async function updatePost(id) {
    const postId = id;  // The post ID passed in the function
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
        throw new Error("No access token found");
    }

    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        "X-Noroff-API-Key": "fbef4eb2-3a30-48ba-a6fd-da318f12c807",  // Replace with your actual key
        "Content-Type": "application/json"
    };

    // Test sending only title and body
    const postData = {
        title: "Test title",
        body: "Test body content"
    };

    try {
        const response = await fetch(`https://v2.api.noroff.dev/social/posts/${postId}`, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.errors[0].message);
        }

        const data = await response.json();
        console.log("Post updated:", data);
    } catch (error) {
        console.error("Error updating post:", error);
    }
}
