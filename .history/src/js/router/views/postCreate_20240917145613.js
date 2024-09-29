import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleLogoutButton";

authGuard();
toggleLogoutButton();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
