import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleLogoutButton";
import { setLogoutListener } from "../../ui/global/logout";

authGuard();
setLogoutListener();
toggleLogoutButton();
