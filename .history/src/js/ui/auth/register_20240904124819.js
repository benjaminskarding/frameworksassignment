import { registerUser } from "../../api/auth/register";

export async function onRegister(event) {
    event.preventDefault();

    const formData = new formData(event.target);
    const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
    };
}


