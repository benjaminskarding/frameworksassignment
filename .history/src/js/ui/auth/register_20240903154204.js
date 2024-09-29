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
        password
    };

    console.log("Form submission test data:", {name, email, password});

}


