
import "/src/css/style.css";

import router from "./js/router/index.js";

import { API_KEY } from "./js/api/constants.js";

await router(window.location.pathname);

console.log("API Key:", API_KEY);