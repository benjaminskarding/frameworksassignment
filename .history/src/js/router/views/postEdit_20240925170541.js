import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { getPostId } from "./post";
import { onUpdatePost } from "../../ui/post/update";


toggleLogoutButton();
authGuard();


async function loadPostForEditing() {
    const postId = getPostId();  // Get the post ID from the URL
  
    if (!postId) {
        alert("No post ID found.");
        return;
    }

    try {
        const post = await readPost(postId);  // Fetch the post data

        // Populate form fields with post data
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
  

  document.addEventListener("DOMContentLoaded", () => {
    loadPostForEditing(); 
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
  });