export async function registerUser(userData) {
    const url = 'https://v2.api.noroff.dev/auth/register';
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        };
        body: JSON.stringify(userData);
    });
}