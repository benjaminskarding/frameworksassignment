import { authGuard } from "../../utilities/authGuard";
import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";

// Set the logout listener
setLogoutListener();

// Check if the user is authenticated only once and reuse the result
const isAuthenticated = authGuard();

// Toggle visibility of the logout button and create post button based on authentication
toggleVisibilityOfElements(isAuthenticated);

// Function to render each post to the DOM
function renderPost(post) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    // Add post ID as a data attribute
    postContainer.setAttribute("data-post-id", post.id);

    // Title
    const title = document.createElement("h2");
    title.textContent = post.title;
    postContainer.appendChild(title);

    // Author (check if author data is available)
    if (post.author && post.author.name) {
        const author = document.createElement("p");
        author.textContent = `Author: ${post.author.name}`;
        postContainer.appendChild(author);
    }

    // Body
    const body = document.createElement("p");
    body.textContent = post.body;
    postContainer.appendChild(body);

    // Tags (if available)
    if (post.tags && post.tags.length > 0) {
        const tags = document.createElement("p");
        tags.textContent = "Tags: " + post.tags.join(", ");
        postContainer.appendChild(tags);
    }

    // Media (if available)
    if (post.media && post.media.url) {
        const media = document.createElement("img");
        media.src = post.media.url;
        media.alt = post.media.alt || "Post media";
        media.style.maxWidth = "100%";
        postContainer.appendChild(media);
    }

    // Append the post container to the post feed
    document.getElementById("postFeed").appendChild(postContainer);

    console.log(`Post rendered with ID: ${post.id}`); // Log the post ID
}

// Function to load all posts and render them
async function loadPosts() {
    // Check if the user is authenticated, and only load posts if they are
    if (!isAuthenticated) {
        return; 
    }

    try {
        // Fetch the posts (you can adjust pagination as needed)
        const posts = await readPosts();

        // Loop through posts and render each one
        posts.forEach(post => renderPost(post));
    } catch (error) {
        console.error("Error loading posts:", error);
        document.getElementById("postFeed").textContent = "Failed to load posts.";
    }
}

// Call the function to load posts when the page loads
loadPosts();
