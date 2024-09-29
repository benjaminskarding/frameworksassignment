import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault(); // Prevent default form submission

    console.log("Form submission triggered");

    const formData = new FormData(event.target);
    const postId = event.target.getAttribute("data-post-id");

    console.log("Post ID from form: ", postId);
    
    const updatedPost = {
        title: formData.get("title"),
        body: formData.get("body"),
        tags: formData.get("tags").split(",").map(tag => tag.trim()), // Split tags into an array
    };

    console.log("Updated post before media check: ", updatedPost);

    const mediaUrl = formData.get("mediaUrl");
    const mediaAlt = formData.get("mediaAlt");

    // Only include media if URL is provided
    if (mediaUrl) {
        updatedPost.media = {
            url: mediaUrl,
            alt: mediaAlt || "Post media"
        };
    }

    console.log("Final updated post (with media): ", updatedPost);

    try {
        await updatePost(postId, updatedPost); // Call the updatePost function
        alert("Post updated successfully!");
        window.location.href = `/post/?id=${postId}`; // Redirect to the post page
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post.");
    }
}
  
  

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
  });

