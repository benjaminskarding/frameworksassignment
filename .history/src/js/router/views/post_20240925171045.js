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

    if (post) {
      document.getElementById('postTitle').textContent = post.title;
      document.getElementById('postAuthor').textContent = `Author: ${post.author?.name || 'Unknown'}`;
      document.getElementById('postBody').textContent = post.body;

      if (post.tags && post.tags.length > 0) {
        const tags = post.tags.join(", "); 
        document.getElementById('postTags').textContent = `Tags: ${tags}`;
      }

      if (post.media && post.media.url) {
        const media = document.getElementById('postMedia');
        media.src = post.media.url;
        media.alt = post.media.alt || 'Post media';
        media.style.display = 'block';
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
  