import { API_AUTH_LOGIN } from "../constants";

export async function login({ email, password }) {
    try {
        const response = await fetch(API_AUTH_LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer $API_KEY`,
            }
            body: JSON.stringify({email, password})

        })
    }
}
