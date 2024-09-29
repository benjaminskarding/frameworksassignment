
import "/src/css/style.css";

import router from "./js/router/index.js";
import { setLogoutListener } from "./js/global/logout.js";

await router(window.location.pathname);

