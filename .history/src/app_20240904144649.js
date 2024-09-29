
import "/src/css/style.css";

import router from "./js/router/index.js";

await router(window.location.pathname);

function checkAuthentication() {
    const authToken = localStorage.getItem("authToken");

    if (!authToken) {
        console.log("User is not signed in. Redirecting to login...");
        window.location.href = "/auth/login/";
    } else {
        console.log("User is signed in.");
    }
}

checkAuthentication();