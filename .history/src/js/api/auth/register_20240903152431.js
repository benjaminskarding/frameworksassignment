export async function registerUser(userData) {
  const url = 'https://api.noroff.no/auth/register';
  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();  // Assuming the API responds with user data
  } catch (error) {
      console.error('Failed to register user:', error);
      return null;  // or handle the error as appropriate for your application
  }
}