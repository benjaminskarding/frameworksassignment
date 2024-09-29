import { onRegister } from "../../ui/auth/register";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";

toggleLogoutButton();

const form = document.forms.register;

form.addEventListener("submit", onRegister);
