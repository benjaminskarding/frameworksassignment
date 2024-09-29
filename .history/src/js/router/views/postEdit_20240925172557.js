import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { getPostId } from "./post";
import { onUpdatePost } from "../../ui/post/update";
import { readPost } from "../../api/post/read";


toggleLogoutButton();
authGuard();


async function loadPostForEditing() {
    const postId = getPostId();
  
    if (!postId) {
        alert("No post ID found.");
        return;
    }
  
    try {
        const post = await readPost(postId); 

        const titleEl = document.getElementById("title");
        const bodyEl = document.getElementById("body");
        const tagsEl = document.getElementById("tags");
        const mediaUrlEl = document.getElementById("mediaUrl");
        const mediaAltEl = document.getElementById("mediaAlt");


        if (titleEl) {
            titleEl.value = post.title || "";
        }
        
        if (bodyEl) {
            bodyEl.value = post.body || "";
        }
        
        if (tagsEl) {
            tagsEl.value = post.tags?.join(", ") || "";
        }
        
        if (mediaUrlEl) {
            mediaUrlEl.value = post.media?.url || "";
        }
        
        if (mediaAltEl) {
            mediaAltEl.value = post.media?.alt || "";
        }
  
        const formEl = document.getElementById("editPostForm");
        if (formEl) {
            formEl.setAttribute("data-post-id", postId);
        }
    } catch (error) {
        console.error("Error loading post:", error);
        alert("Failed to load post data.");
    }
}


loadPostForEditing(); 
document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
