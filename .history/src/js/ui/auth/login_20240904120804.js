export async function onLogin(event) {
    event.preventDefault();

    const form = event.target;

    const email = form.elements['email'].value.trim(); 
    const password = form.elements['password'].value.trim();

    const userData = { email, password };

    try {
        const response = await login(userData);  // Call the login function

        console.log('Login Successful:', response);
        alert("Login Successful!");

        // Handle the response, like saving a token or redirecting the user
        if (response.token) {
            localStorage.setItem('token', response.token);  // Save token in localStorage (example)
        }
        
        // Optionally redirect to a protected route, e.g., user dashboard
        // window.location.href = '/dashboard'; 

    } catch (error) {
        console.error('Login Failed:', error);
        alert(`Login Failed: ${error.message}`);
    }
}

