export async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData (event.target);
    const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        const result = await login ({email, password}); 

        console.log("Login successfull!:", result);

        alert("Logged in! Taking you to feed page...");

        setTimeout(() => {
            window.location.href = "post/index.html";
        }, 2000);
    } catch (error) {
        console.error("Login failed:", error);
    }

}
