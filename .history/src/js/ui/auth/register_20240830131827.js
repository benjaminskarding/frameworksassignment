import { registerUser } from "../../api/auth/register";

export async function onRegister(event) {
    event.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        bio: document.getElementById('bio').value || "",
        banner: {
            url: document.getElementById('bannerUrl').value || "",
            alt: document.getElementById('bannerAlt').value || "",
        },
        avatar: {
            url: document.getElementById('avatarUrl').value || "",
            alt: document.getElementById('avatarAlt').value || ""
        },
        venueManager: document.getElementById('venueManager').checked || false
    };

    try {
        const response = await registerUser(userData);
        console.log('Registration Successfull', response);
        
        setTimeout(() => {
            window.location.href = "auth/login/login.html";
        }, 2000);

    } catch (error) {
        console.error('Registration Failed:', error);
    }
}


