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
            url: "https://img.service.com/avatar.jpg",
            alt: "Default Avatar" // Optional, but provided
        },
        banner: {
            url: "https://img.service.com/banner.jpg",
            alt: "Default Banner" // Optional, but provided
        },
        venueManager: false // Optional, but provided
    };

    try {
        const response = await registerUser(userData);
        console.log('Registration Successful:', response);

        alert("Registration successful! You can now log in.");
    } catch (error) {
        console.error('Registration failed:', error);

        alert(`Registration failed: ${error.message}`);
    }

    

}


