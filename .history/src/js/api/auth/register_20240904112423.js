export async function registerUser(userData) {
    const url = 'https://v2.api.noroff.dev/auth/register';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const responseBody = await response.json(); // Parse response
    if (!response.ok) {
        console.log("Error details:", responseBody); // Log the error details
        throw new Error(responseBody.message || response.statusText);
    }

    return responseBody;
}