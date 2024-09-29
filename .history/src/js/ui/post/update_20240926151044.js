import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault();

    const postId = new URLSearchParams(window.location.search).get('id');
    
    // Get the form data
    const form = new FormData(event.target);
    const postData = {
        title: form.get("title"),
        body: form.get("body"),
        tags: form.get("tags").split(",").map(tag => tag.trim()), // Convert tags to an array
        media: {
            url: form.get("mediaUrl"),
            alt: form.get("mediaAlt") || "Post media",
        },
    };

    try {
        await updatePost(postId, postData);
        alert("Post updated successfully!");
        window.location.href = `/post/?id=${postId}`;  // Redirect to the post page after update
    } catch (error) {
        alert("Failed to update post.");
    }
}

  
  

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
  });

