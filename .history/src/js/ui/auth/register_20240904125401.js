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
        console.log("User registered successfully:", result);
    } catch (error) {
        console.error("Registration failed:", error);
    }
}


