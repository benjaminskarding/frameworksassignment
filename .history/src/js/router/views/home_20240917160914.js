import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { setLogoutListener } from "../../ui/global/logout";

authGuard();
setLogoutListener();
toggleLogoutButton();

