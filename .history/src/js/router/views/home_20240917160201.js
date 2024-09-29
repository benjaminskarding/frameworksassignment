import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";
import { setLogoutListener } from "../../ui/global/logout";
import { fetchUserProfile }

authGuard();
setLogoutListener();
toggleLogoutButton();
