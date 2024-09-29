import { registerUser } from "../../api/auth/register";

export async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        const result = await registerUser(userData);

        alert("Registration successfull! Taking you to login page...");

        setTimeout(() => {

        window.location.href = "/auth/login/";
    }, 2000);

    } catch (error) {
        console.error("Registration failed:", error);
    }
}


