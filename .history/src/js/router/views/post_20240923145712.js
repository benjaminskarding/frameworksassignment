import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { getPostById } from './api/post/getPostById'; 

toggleLogoutButton();




// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id') // Get the post ID from the query string
    };
}

// Function to load and display the post
async function loadSinglePost() {
    const { id } = getQueryParams(); // Extract the post ID

    if (!id) {
        alert("No post ID provided.");
        return;
    }

    try {
        // Fetch the post by ID from the API
        const post = await getPostById(id);

        if (post) {
            // Display post data on the page
            document.getElementById('postTitle').textContent = post.title;
            document.getElementById('postAuthor').textContent = `Author: ${post.author.name}`;
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

// Load the post when the page is ready
document.addEventListener('DOMContentLoaded', loadSinglePost);