import { updatePost } from "../../api/post/update";

// Get post ID from the URL
function getPostId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  }
  
  // Load the current post data and pre-fill the form
  async function loadPostForEditing() {
    const postId = getPostId();
  
    if (!postId) {
      alert("No post ID found.");
      return;
    }
  
    try {
      const post = await readPost(postId); // Fetch the post data
  
      // Pre-fill form fields with current post data
      document.getElementById("title").value = post.title;
      document.getElementById("body").value = post.body;
      document.getElementById("tags").value = post.tags.join(", ");
      document.getElementById("mediaUrl").value = post.media.url;
      document.getElementById("mediaAlt").value = post.media.alt;
  
      // Set the post ID as a data attribute for form submission
      document.getElementById("editPostForm").setAttribute("data-post-id", postId);
    } catch (error) {
      console.error("Error loading post:", error);
      alert("Failed to load post data.");
    }
  }


export async function onUpdatePost(event) {
    event.preventDefault();

    const postId = event.target.getAttribute("data-post-id");
    const formData = new FormData(event.target);

    const updatedPost = {
        title: formData.get("title"),
        body: formData.get("body"),
        tags: formData.get("tags") ? formData.get("tags").split(",") : [],
        media: {
            url: formData.get("mediaUrl"),
            alt: formData.get("mediaAlt"),
        }
    };

    try {
        const updatedData = await updatePost(postId, updatedPost);
        alert("Post updated successfully");
        window.location.href = `/post/id${postId}`;
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post");
    }
}
