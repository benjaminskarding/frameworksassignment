import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault();

    const postId = new URLSearchParams(window.location.search).get('id');

    // Get form data
    const form = new FormData(event.target);
    const postData = {
        title: form.get("title"),
        body: form.get("body"),
        tags: form.get("tags") ? form.get("tags").split(",").map(tag => tag.trim()) : [],
        media: {
            url: form.get("mediaUrl"),
            alt: form.get("mediaAlt") || "Post media"
        }
    };

    // Debugging: Log post data before sending
    console.log("Post data being sent:", postData);

    try {
        // Pass the postId and postData to updatePost
        await updatePost(postId, postData);
        alert("Post updated successfully!");
        window.location.href = `/post/?id=${postId}`;  // Redirect after updating the post
    } catch (error) {
        console.error("Error updating post:", error.message);
        alert("Failed to update post.");
    }
}

// Add event listener when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost);
});