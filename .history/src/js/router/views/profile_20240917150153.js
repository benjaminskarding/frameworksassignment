import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/visibilityLogoutButton";

toggleLogoutButton();
authGuard();
