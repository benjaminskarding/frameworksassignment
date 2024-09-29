import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { readPost } from "../../api/post/read";

toggleLogoutButton();


export async function loadPost(postId) {
    if (!postId) {
        alert("No post ID provided.");
        return;
    }

    try {
        // Fetch the post by ID using `readPost`
        const post = await readPost(postId);

        if (post) {
            // Display post data on the page
            document.getElementById('postTitle').textContent = post.title;
            document.getElementById('postAuthor').textContent = `Author: ${post.author?.name || 'Unknown'}`;
            document.getElementById('postBody').textContent = post.body;

            // If there's a media file, display it
            if (post.media && post.media.url) {
                const media = document.getElementById('postMedia');
                media.src = post.media.url;
                media.alt = post.media.alt || 'Post media';
                media.style.display = 'block'; // Ensure it's visible
            }
        } else {
            alert("Post not found.");
        }
    } catch (error) {
        console.error("Error loading post:", error);
        document.getElementById('postBody').textContent = "Failed to load post.";
    }
}