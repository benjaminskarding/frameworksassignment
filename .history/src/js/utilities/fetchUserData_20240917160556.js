export async function fetchUserProfile() {
    const token = localStorage.getItem("authToken");
    const apiKey = localStorage.getItem("userApiKey");

    if (!token || !apiKey) {
        alert("You must be logged in to view this page.");
        window.location.href = "/auth/login";
        return;
    }

    try {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${token}`);
        headers.append("X-Noroff-API-Key", apiKey);

        // Fetch the user profile data
        const response = await fetch("https://v2.api.noroff.dev/social/profiles/me", {
            method: "GET",
            headers: headers,
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user profile.");
        }

        const data = await response.json();
        console.log("User profile data:", data);

        // Update the page with the user's profile information
        document.getElementById("userNameDisplay").textContent = data.name || "User";
        document.getElementById("userBioDisplay").textContent = data.bio || "No bio provided";

        if (data.avatar && data.avatar.url) {
            const avatarImg = document.createElement("img");
            avatarImg.src = data.avatar.url;
            avatarImg.alt = data.avatar.alt || "User Avatar";
            document.querySelector(".profileAvatar").appendChild(avatarImg);
        }

    } catch (error) {
        console.error("Error fetching user profile:", error);
    }
}

// Call this function on page load to display the user's info
document.addEventListener("DOMContentLoaded", fetchUserProfile);

  