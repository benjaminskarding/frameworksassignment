import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { readPost } from "../../api/post/read";
import { getLoggedInUserName } from "../../utilities/authGuard";

// Function to get the post ID from the URL
export function getPostId() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    return postId;
}

// Function to load the post
async function loadPost() {
    const postId = getPostId();
    const loggedInUserName = getLoggedInUserName();
    const isAuthenticated = !!loggedInUserName;

    if (!postId) {
        alert("No post ID found.");
        return;
    }

    try {
      const post = await readPost(postId);

      if (post) {
          // Handle title (required)
          const postTitleElement = document.getElementById('title');
          if (postTitleElement) {
              postTitleElement.textContent = post.title || 'Untitled';
          } else {
              console.error("Post title element is missing from the DOM.");
              return;
          }

          // Handle author (optional)
          const postAuthorElement = document.getElementById('author');
          if (postAuthorElement) {
              postAuthorElement.textContent = `Author: ${post.author?.name || 'Unknown'}`;
          }

          // Handle body (optional)
          const postBodyElement = document.getElementById('body');
          if (postBodyElement) {
              postBodyElement.textContent = post.body || 'No content available';
          }

          // Handle tags (optional)
          const postTagsElement = document.getElementById('tags');
          if (postTagsElement && post.tags && post.tags.length > 0) {
              const tags = post.tags.join(", ");
              postTagsElement.textContent = `Tags: ${tags}`;
          }

          // Handle media (optional)
          const postMediaElement = document.getElementById('media');
          if (postMediaElement) {
              if (post.media && post.media.url) {
                  postMediaElement.src = post.media.url;
                  postMediaElement.alt = post.media.alt || 'Post media';
                  postMediaElement.style.display = 'block';
              } else {
                  postMediaElement.style.display = 'none'; // Hide media if not available
              }
          }

          // Toggle visibility based on post author and authentication
          const isPostAuthor = post.author?.name === loggedInUserName;
          toggleVisibilityOfElements(isAuthenticated, isPostAuthor);

          // Event listener for update button
          document.getElementById("updatePostButton").addEventListener("click", function() {
              window.location.href = `/post/edit/?id=${postId}`;
          });

      } else {
          alert("Post not found.");
      }
  } catch (error) {
      console.error("Error loading post:", error);
      const postBodyElement = document.getElementById('postBody');
      if (postBodyElement) {
          postBodyElement.textContent = "Failed to load post.";
      }
  }
}


loadPost();

