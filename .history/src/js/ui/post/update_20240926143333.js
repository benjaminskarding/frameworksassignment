import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault(); 

    // Get the post ID from the URL
    const postId = new URLSearchParams(window.location.search).get('id');
    console.log("Post ID from URL:", postId);  // Debugging

    const form = new FormData(event.target);

    const editedData = {
        title: form.get("title"),
        body: form.get("body"),
        tags: form.get("tags") ? form.get("tags").split(",").map(tag => tag.trim()) : [],
        media: {
            url: form.get("mediaUrl"),
            alt: form.get("mediaAlt") || "Post media"
        }
    };

    console.log("Edited Data:", editedData);  // Debugging

    try {
        // Pass the post ID along with the post data to updatePost
        await updatePost(postId, editedData); 
        alert("Post updated successfully!");
        window.location.href = `/post/?id=${postId}`; // Redirect to view post
    } catch (error) {
        console.error("Error updating post:", error.message);
        alert("Failed to update post.");
    }
}

  
  

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
  });

