import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";

toggleLogoutButton();



import { getPostById } from './api/post/getPostById'; // Import your function to get a post by ID

// Function to get query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: params.get('id')
    };
}

// Function to load and display the single post
async function loadSinglePost() {
    const { id } = getQueryParams(); // Get the post ID from the URL

    if (!id) {
        alert("No post ID found.");
        return;
    }

    try {
        // Fetch the post by ID
        const post = await getPostById(id);

        if (post) {
            // Render the post data (you can adjust the HTML structure as needed)
            document.getElementById('postTitle').textContent = post.title;
            document.getElementById('postAuthor').textContent = `Author: ${post.author.name}`;
            document.getElementById('postBody').textContent = post.body;

            // If media exists, display it
            if (post.media && post.media.url) {
                const postImage = document.getElementById('postMedia');
                postImage.src = post.media.url;
                postImage.alt = post.media.alt || "Post image";
                postImage.style.display = 'block'; // Ensure the image is shown
            }
        } else {
            alert("Post not found.");
        }
    } catch (error) {
        console.error("Error loading post:", error);
        document.getElementById('postBody').textContent = "Failed to load post.";
    }
}

// Call the function to load the single post when the page loads
document.addEventListener('DOMContentLoaded', loadSinglePost);

