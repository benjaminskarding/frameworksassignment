import { registerUser } from "../../api/auth/register";

export async function onRegister(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    const userData = {
        name,
        email,
        password,
        bio: "This is a default bio",
        avatar: {
            url: "https://default-url.com/default-avatar.jpg",
            alt: "Default Avatar" // Optional, but provided
        },
        banner: {
            url: "https://default-url.com/default-banner.jpg",
            alt: "Default Banner" // Optional, but provided
        },
        venueManager: false // Optional, but provided
    };

    console.log("User Data being sent to API:", JSON.stringify(userData, null, 2));

    

}


