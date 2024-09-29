import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { getPostId } from "./post";
import { onUpdatePost } from "../../ui/post/update";


toggleLogoutButton();
authGuard();


async function loadPostForEditing() {
    const postId = getPostId();
  
    if (!postId) {
        alert("No post ID found.");
        return;
    }
  
    try {
        const post = await readPost(postId);  // Fetch the post data
        console.log("Post data fetched for editing:", post);  // Log the post data
        
        // Log and check if form elements exist
        const titleEl = document.getElementById("title");
        const bodyEl = document.getElementById("body");
        const tagsEl = document.getElementById("tags");
        const mediaUrlEl = document.getElementById("mediaUrl");
        const mediaAltEl = document.getElementById("mediaAlt");
        
        console.log("Title Element:", titleEl);  // Check if elements exist
        console.log("Body Element:", bodyEl);
        console.log("Tags Element:", tagsEl);
        console.log("Media URL Element:", mediaUrlEl);
        console.log("Media Alt Element:", mediaAltEl);
  
        // Populate form fields with post data
        if (titleEl) {
            titleEl.value = post.title || "";
            console.log("Populated Title:", post.title);
        }
        
        if (bodyEl) {
            bodyEl.value = post.body || "";
            console.log("Populated Body:", post.body);
        }
        
        if (tagsEl) {
            tagsEl.value = post.tags?.join(", ") || "";
            console.log("Populated Tags:", post.tags?.join(", "));
        }
        
        if (mediaUrlEl) {
            mediaUrlEl.value = post.media?.url || "";
            console.log("Populated Media URL:", post.media?.url);
        }
        
        if (mediaAltEl) {
            mediaAltEl.value = post.media?.alt || "";
            console.log("Populated Media Alt:", post.media?.alt);
        }
  
        // Log if form element is being set correctly with post ID
        const formEl = document.getElementById("editPostForm");
        if (formEl) {
            formEl.setAttribute("data-post-id", postId);
            console.log("Set form data-post-id:", postId);
        }
    } catch (error) {
        console.error("Error loading post:", error);
        alert("Failed to load post data.");
    }
}

  


    loadPostForEditing(); 
    document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
