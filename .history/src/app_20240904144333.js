
import "/src/css/style.css";

import router from "./js/router/index.js";

await router(window.location.pathname);

document.addEventListener("DOMContentLoaded", () => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
        console.log("User is signed in.");
        // Proceed with user-specific actions or fetch user data
    } else {
        console.log("User is not signed in.");
        // Redirect to login page or show login prompt
        window.location.href = "/auth/login/";
    }
});