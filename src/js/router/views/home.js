import { authGuard } from "../../utilities/authGuard";
import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { setLogoutListener } from "../../ui/global/logout";
import { readPosts } from "../../api/post/read";

setLogoutListener();

const isAuthenticated = authGuard();

toggleVisibilityOfElements(isAuthenticated);

function renderPost(post) {
  const postContainer = document.createElement("div");
  postContainer.className =
    "bg-white p-6 rounded-lg shadow-lg mb-6 cursor-pointer hover:shadow-xl transition-shadow duration-200";
  postContainer.setAttribute("data-post-id", post.id);

  postContainer.addEventListener("click", function () {
    window.location.href = `/post/?id=${post.id}`;
  });

  const title = document.createElement("h2");
  title.className = "text-2xl font-bold text-gray-800 mb-2";
  title.textContent = post.title;
  postContainer.appendChild(title);

  if (post.author && post.author.name) {
    const author = document.createElement("p");
    author.className = "text-sm text-gray-500 mb-4";
    author.textContent = `Author: ${post.author.name}`;
    postContainer.appendChild(author);
  }

  const body = document.createElement("p");
  body.className = "text-gray-700 mb-4";
  body.textContent = post.body;
  postContainer.appendChild(body);

  if (post.tags && post.tags.length > 0) {
    const tags = document.createElement("p");
    tags.className = "text-sm text-gray-600";
    tags.textContent = "Tags: " + post.tags.join(", ");
    postContainer.appendChild(tags);
  }

  if (post.media && post.media.url) {
    const media = document.createElement("img");
    media.className = "w-full h-auto rounded mt-4";
    media.src = post.media.url;
    media.alt = post.media.alt || "Post media";
    postContainer.appendChild(media);
  }

  document.getElementById("postFeed").appendChild(postContainer);
}

async function loadPosts() {
  if (!isAuthenticated) {
    return;
  }

  try {
    const posts = await readPosts();

    posts.forEach((post) => renderPost(post));
  } catch (error) {
    console.error("Error loading posts:", error);
    document.getElementById("postFeed").textContent = "Failed to load posts.";
  }
}

loadPosts();
