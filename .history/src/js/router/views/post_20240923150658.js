import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { readPost } from "../../api/post/read";

toggleLogoutButton();

function getPostId() {
    const pathname = window.location.pathname;
    const parts = pathname.split("/");
    return parts[2]; // The post ID will be the third part of the URL
  }

  async function loadPost() {
    const postId = getPostId();
  
    if (!postId) {
      alert("No post ID found.");
      return;
    }
  
    try {
      // Fetch the post using the post ID
      const post = await readPost(postId);
  
      if (post) {
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