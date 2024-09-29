import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "./api/post/readPosts";

authGuard();
setLogoutListener();
toggleLogoutButton();

function renderPost(post) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    // Title
    const title = document.createElement("h2");
    title.textContent = post.title;
    postContainer.appendChild(title);

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
}

// Function to load all posts and render them
async function loadPosts() {
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