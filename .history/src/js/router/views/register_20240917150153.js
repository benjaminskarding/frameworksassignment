import { onRegister } from "../../ui/auth/register";
import { toggleLogoutButton } from "../../utilities/visibilityLogoutButton";

toggleLogoutButton();

const form = document.forms.register;

form.addEventListener("submit", onRegister);
