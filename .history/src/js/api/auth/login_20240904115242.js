export async function login({ email, password }) {
    try {
        const response = await fetch(API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify(userData),
        });

        const responseBody = await.response.JSON();

        if (!response.ok) {
            const errorMessages = responseBody.errors.map(err => err.message).join(', ');
            throw new Error(`Login Failed: ${errorMessages}`);
        }

        return responseBody;

    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}
