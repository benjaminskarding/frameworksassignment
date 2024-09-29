import { API_AUTH_LOGIN } from "../constants";

export async function login({ email, password }) {
    try {
        const response = await fetch(API_AUTH_LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer $API_KEY`,
            }
            body: JSON.stringify({email, password}),
        });

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message || "Login failed:");
        } 

        return data;
    } catch (error) {
        throw new Error (error.message || "Something went wrong during login");
    }
}
