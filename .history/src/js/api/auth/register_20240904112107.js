export async function registerUser(userData) {
    const url = 'https://v2.api.noroff.dev/auth/register';
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error: ${errorData.message || response.statusText}`);
    }

    return response.json();
}