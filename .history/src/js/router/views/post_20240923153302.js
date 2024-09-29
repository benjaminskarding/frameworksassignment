console.log("post.js loaded successfully!");
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { readPost } from "../../api/post/read";

toggleLogoutButton();

// Function to get the post ID from the URL query string
function getPostId() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');  // Get the 'id' query parameter from the URL
    console.log("Post ID from URL parameters:", postId);  // Log the post ID to verify
    return postId;
  }
  
  // Function to load and display the post by ID
  async function loadPost() {
    const postId = getPostId(); // Extract post ID from query parameter
  
    if (!postId) {
      alert("No post ID found.");
      return;
    }
  
    try {
      // Fetch the post using the post ID
      const post = await readPost(postId);
  
      if (post) {
        console.log("Post data fetched:", post);  // Log the fetched post data
        document.getElementById('postTitle').textContent = post.title;
        document.getElementById('postAuthor').textContent = `Author: ${post.author?.name || 'Unknown'}`;
        document.getElementById('postBody').textContent = post.body;
  
        // Show media if available
        if (post.media && post.media.url) {
          const media = document.getElementById('postMedia');
          media.src = post.media.url;
          media.alt = post.media.alt || 'Post media';
          media.style.display = 'block';
        }
      } else {
        alert("Post not found.");
      }
    } catch (error) {
      console.error("Error loading post:", error);
      document.getElementById('postBody').textContent = "Failed to load post.";
    }
  }
  
  // Load the post when the DOM is ready
  document.addEventListener('DOMContentLoaded', loadPost);