import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault(); 
  
    const formData = new FormData(event.target);
    const postId = event.target.getAttribute("data-post-id");
  
    const updatedPost = {
      title: formData.get("title"),
      body: formData.get("body"),
      tags: formData.get("tags").split(",").map(tag => tag.trim()), 
      media: {
        url: formData.get("mediaUrl"),
        alt: formData.get("mediaAlt") || "Post media",
      }
    };
  
    try {
      await updatePost(postId, updatedPost); 
      alert("Post updated successfully!");
      window.location.href = `/post/?id=${postId}`; 
    } catch (error) {
      console.error("Error updating post:", error);
      alert("Failed to update post.");
    }
  }
  
  

  document.addEventListener("DOMContentLoaded", () => {
    loadPostForEditing(); 
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
  });