import { authGuard } from "../../utilities/authGuard";
import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { getPostId } from "./post";
import { onUpdatePost } from "../../ui/post/update";
import { readPost } from "../../api/post/read";

toggleVisibilityOfElements();
authGuard();



document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
