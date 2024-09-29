import updatePost from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault();

    const postId = new URLSearchParams(window.location.search).get('id');

    // Get form data
    const form = new FormData(event.target);
    const postData = {
        title: form.get("title"),
        body: form.get("body"),
        tags: form.get("tags") ? form.get("tags").split(",").map(tag => tag.trim()) : [],  // Ensure tags are sent as an array
        media: {
            url: form.get("mediaUrl"),
            alt: form.get("mediaAlt") || "Post media"  // Optional alt text for media
        }
    };

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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost);
});
