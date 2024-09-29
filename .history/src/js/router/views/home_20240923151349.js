import { authGuard } from "../../utilities/authGuard";
import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";


setLogoutListener();


const isAuthenticated = authGuard();


toggleVisibilityOfElements(isAuthenticated);


function renderPost(post) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");
    postContainer.setAttribute("data-post-id", post.id); 


    postContainer.addEventListener('click', function() {
        window.location.href = `/post?id=${post.id}`;
    });

    // Title
    const title = document.createElement("h2");
    title.textContent = post.title;
    postContainer.appendChild(title);

    // Author
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
        postContainer.appendChild(media);
    }

    // Append the post container to the post feed
    document.getElementById("postFeed").appendChild(postContainer);
}



async function loadPosts() {

    if (!isAuthenticated) {
        return; 
    }

    try {
        const posts = await readPosts();


        posts.forEach(post => renderPost(post));
    } catch (error) {
        console.error("Error loading posts:", error);
        document.getElementById("postFeed").textContent = "Failed to load posts.";
    }
}


loadPosts();
