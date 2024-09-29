export async function registerUser(userData) {
    const url = 'https://v2.api.noroff.dev/auth/register';
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), // Send user data as JSON
    });

    // Parse the response
    const responseBody = await response.json();

    if (!response.ok) {
        // Log the full error structure to better understand the problem
        console.error("Error details:", responseBody);

        // Extract error messages and display them
        const errorMessages = responseBody.errors.map(err => err.message).join(', ');
        throw new Error(`Registration failed: ${errorMessages}`);
    }

    return responseBody;
}
