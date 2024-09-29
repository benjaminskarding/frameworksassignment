export async function onLogin(event) {
    event.preventDefault();

    const form = event.target;

    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
}
