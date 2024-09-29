import { authGuard } from "../../utilities/authGuard";
import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { getPostId } from "./post";
import { onUpdatePost } from "../../ui/post/update";
import { readPost } from "../../api/post/read";

toggleVisibilityOfElements();
authGuard();


async function loadPostForEditing() {
    const postId = getPostId();
  
    if (!postId) {
        alert("No post ID found.");
        return;
    }
  
    try {
        const post = await readPost(postId); 

        const title = document.getElementById("title");
        const body = document.getElementById("body");
        const tags = document.getElementById("tags");
        const mediaUrl = document.getElementById("mediaUrl");
        const mediaAlt = document.getElementById("mediaAlt");


        if (title) {
            title.value = post.title || "";
        }
        
        if (body) {
            body.value = post.body || "";
        }
        
        if (tags) {
            tags.value = post.tags?.join(", ") || "";
        }
        
        if (mediaUrl) {
            mediaUrl.value = post.media?.url || "";
        }
        
        if (mediaAlt) {
            mediaAlt.value = post.media?.alt || "";
        }
  
        const form = document.getElementById("editPostForm");
        if (form) {
            form.setAttribute("data-post-id", postId);
        }
    } catch (error) {
        console.error("Error loading post:", error);
        alert("Failed to load post data.");
    }
}

loadPostForEditing();

const form = document.forms.editPost;
form.addEventListener("submit", onUpdatePost);