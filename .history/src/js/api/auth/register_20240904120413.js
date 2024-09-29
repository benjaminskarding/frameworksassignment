export async function registerUser(userData) {
    try {
        const response = await fetch(API_AUTH_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const responseBody = await response.json();

        // Check for a successful response
        if (!response.ok) {
            const errorMessages = responseBody.errors.map(err => err.message).join(', ');
            throw new Error(`Registration failed: ${errorMessages}`);
        }

        return responseBody;

    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}
