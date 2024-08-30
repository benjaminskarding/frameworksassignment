export async function registerUser(userData) {
  try {
    const response = await fetch('https://v2.api.noroff.dev/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'  
      },
      body: JSON.stringify(userData)
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Registration Failed');
    }

    return result;
  } catch (error) {
    console.error ('Error in registerUser', error);
    throw error;
  } 
}