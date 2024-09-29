import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault();

    const postId = new URLSearchParams(window.location.search).get('id');  // Get post ID from URL

    try {
        // Call the simplified updatePost function
        await updatePost(postId);
        alert("Post updated successfully!");
        window.location.href = `/post/?id=${postId}`;  // Redirect after updating the post
    } catch (error) {
        console.error("Error updating post:", error.message);
        alert("Failed to update post.");
    }
}


    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost);
