import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event) {
    event.preventDefault();
    
    const postId = new URLSearchParams(window.location.search).get('id');
    const form = new FormData(event.target);

    const postData = {
        title: form.get('title'),
        body: form.get('body'),
        tags: form.get('tags').split(',').map(tag => tag.trim()), // Convert tags to array
        media: {
            url: form.get('mediaUrl'),
            alt: form.get('mediaAlt') || "Post media",
        }
    };
    
    console.log("Updating post with ID:", postId);
    console.log("Post Data being sent:", postData);
    
    try {
        await updatePost(postId, postData);
        alert("Post updated successfully!");
        window.location.href = `/post/?id=${postId}`; // Redirect
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post.");
    }
}

// Attach event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost);
});
