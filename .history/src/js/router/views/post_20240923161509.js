import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { readPost } from "../../api/post/read";
import { deletePost } from "../../api/post/delete";

toggleLogoutButton();

function getLoggedInUserName() {
    return localStorage.getItem("name"); 
  }

function getPostId() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');  
    return postId;
  }
  

  async function loadPost() {
    const postId = getPostId(); 
  
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

        if (post.author?.id === loggedInUserId) {
            document.getElementById('deletePostButton').style.display = 'block'; 
          } else {
            document.getElementById('deletePostButton').style.display = 'none'; 
          }

      } else {
        alert("Post not found.");
      }
    } catch (error) {
      console.error("Error loading post:", error); 
      document.getElementById('postBody').textContent = "Failed to load post.";
    }
  }

async function handleDelete() {
    const postId = getPostId();

    if(confirm("Are you sure you want to delete this post?")) {
        try {
            await deletePost(postId);
            alert("Post deleted");
            window.location.href = "/";
        } catch (error) {
            console.error("Error deleting post")
            alert("Failed to delete post");
        }
    }
}

document.getElementById('deletePostButton').addEventListener('click', handleDelete);

loadPost();
  
