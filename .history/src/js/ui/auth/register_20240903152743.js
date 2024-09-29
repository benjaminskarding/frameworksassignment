import { registerUser } from "../../api/auth/register";

export async function onRegister(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    // Get the data from the form fields
    const form = event.target;
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    // Construct user data object
    const userData = {
        name,
        email,
        password
    };

    try {
        // Call the registerUser function and await the response
        const response = await registerUser(userData);

        // Assuming the API returns a JSON with a 'success' property
        if (response.success) {
            console.log('Registration successful', response);
            alert('Registration successful!');
            // Redirect or further actions
            window.location.href = '/login'; // Change as needed
        } else {
            console.error('Registration failed', response.message);
            alert('Registration failed: ' + response.message);
        }
    } catch (error) {
        console.error('Error during registration', error);
        alert('Error during registration: ' + error.message);
    }
}


