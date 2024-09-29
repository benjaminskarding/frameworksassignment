import { API_AUTH_REGISTER, API_KEY } from "../constants";

export async function registerUser(userData) {
    try {
        const response = await fetch(API_AUTH_REGISTER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer $API_KEY`,
            },
            body: JSON.stringify(userData),
        })
    }
}

