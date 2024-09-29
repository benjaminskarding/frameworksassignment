import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { readPost } from "../../api/post/read";
import { getLoggedInUserName } from "../../utilities/authGuard";

export function getPostId() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    console.log("Post ID from URL:", postId);
    return postId;
}

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

    // Check if elements exist before trying to update them
    const postTitleElement = document.getElementById('postTitle');
    const postAuthorElement = document.getElementById('postAuthor');
    const postBodyElement = document.getElementById('postBody');
    const postTagsElement = document.getElementById('postTags');
    const postMediaElement = document.getElementById('postMedia');

    console.log("Checking elements existence...");
    console.log({ postTitleElement, postAuthorElement, postBodyElement, postTagsElement, postMediaElement });

    // If any element is missing, log it for further investigation
    if (!postTitleElement || !postAuthorElement || !postBodyElement || !postTagsElement || !postMediaElement) {
      console.error("One or more elements are missing from the DOM. Check IDs.");
      return;
    }

    if (post) {
      postTitleElement.textContent = post.title;
      postAuthorElement.textContent = `Author: ${post.author?.name || 'Unknown'}`;
      postBodyElement.textContent = post.body;

      if (post.tags && post.tags.length > 0) {
        const tags = post.tags.join(", ");
        postTagsElement.textContent = `Tags: ${tags}`;
      }

      if (post.media && post.media.url) {
        postMediaElement.src = post.media.url;
        postMediaElement.alt = post.media.alt || 'Post media';
        postMediaElement.style.display = 'block';
      }

      const isPostAuthor = post.author?.name === loggedInUserName;
      toggleVisibilityOfElements(isAuthenticated, isPostAuthor);

      document.getElementById("updatePostButton").addEventListener("click", function() {
        window.location.href = `/post/edit/?id=${postId}`;
      });
    } else {
      alert("Post not found.");
    }
  } catch (error) {
    console.error("Error loading post:", error);
    document.getElementById('postBody').textContent = "Failed to load post.";
  }
}

loadPost();
