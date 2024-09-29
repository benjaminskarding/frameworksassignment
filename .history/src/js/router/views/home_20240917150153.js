import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/visibilityLogoutButton";
import { setLogoutListener } from "../../ui/global/logout";

authGuard();
setLogoutListener();
toggleLogoutButton();
