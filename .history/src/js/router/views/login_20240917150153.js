import { onLogin } from "../../ui/auth/login";
import { toggleLogoutButton } from "../../utilities/visibilityLogoutButton";

toggleLogoutButton();

const form = document.forms.login;

form.addEventListener("submit", onLogin);


