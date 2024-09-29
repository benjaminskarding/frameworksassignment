export async function login({ email, password }) {
    try {
        const response = await fetch(API_AUTH_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        });

        const responseBody = await response.json();

        if (!response.ok) {
            const errorMessages = responseBody.errors.map(err => err.message).join(', ');
            throw new Error(`Login Failed: ${errorMessages}`);
        }

        return responseBody;

    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}
