import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { getPostId } from "./post";


toggleLogoutButton();
authGuard();


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
      document.getElementById("tags").value = post.tags.join(", "); // Join tags with commas
      document.getElementById("mediaUrl").value = post.media.url;
      document.getElementById("mediaAlt").value = post.media.alt;
  
      // Set the post ID as a data attribute for form submission
      document.getElementById("editPostForm").setAttribute("data-post-id", postId);
    } catch (error) {
      console.error("Error loading post:", error);
      alert("Failed to load post data.");
    }
  }
  
  // Attach event listeners when the DOM is ready
  document.addEventListener("DOMContentLoaded", () => {
    loadPostForEditing(); // Load the post data into the form
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); // Attach the form submission handler
  });