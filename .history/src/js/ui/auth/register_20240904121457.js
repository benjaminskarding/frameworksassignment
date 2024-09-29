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
            alt: "Default Avatar"
        },
        banner: {
            url: "https://default-url.com/default-banner.jpg",
            alt: "Default Banner"
        },
        venueManager: false
    };

    try {
        const response = await registerUser(userData);
        console.log('Registration Successfull:', response);
    } catch (error) {
        console.error ('Registration failed:', error);
    }

    

}


