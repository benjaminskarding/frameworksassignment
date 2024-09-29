import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { readPost } from "../../api/post/read";
import { getLoggedInUserName } from "../../utilities/authGuard";
import { onDeletePost } from "../../ui/post/delete";


export function getPostId() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
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
          const postTitleElement = document.getElementById('postTitle');
          if (postTitleElement) {
              postTitleElement.textContent = post.title || 'Untitled';
          } 


          const postAuthorElement = document.getElementById('postAuthor');
          if (postAuthorElement) {
              postAuthorElement.textContent = `Author: ${post.author?.name || 'Unknown'}`;
          }


          const postBodyElement = document.getElementById('postBody');
          if (postBodyElement) {
              postBodyElement.textContent = post.body || 'No content available';
          }


          const postTagsElement = document.getElementById('postTags');
          if (postTagsElement && post.tags && post.tags.length > 0) {
              const tags = post.tags.join(", ");
              postTagsElement.textContent = `Tags: ${tags}`;
          }


          const postMediaElement = document.getElementById('postMedia');
          if (postMediaElement) {
              if (post.media && post.media.url) {
                  postMediaElement.src = post.media.url;
                  postMediaElement.alt = post.media.alt || 'Post media';
                  postMediaElement.style.display = 'block';
              } else {
                  postMediaElement.style.display = 'none'; 
              }
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
      const postBodyElement = document.getElementById('postBody');
      if (postBodyElement) {
          postBodyElement.textContent = "Failed to load post.";
      }
  }
}


loadPost();

document.getElementById("deletePostButton").addEventListener("click", async () => {
  await onDeletePost();
});

