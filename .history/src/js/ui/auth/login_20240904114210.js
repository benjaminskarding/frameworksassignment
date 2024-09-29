export async function onLogin(event) {
    event.preventDefault();

    const form = event.target;

    const name = form.elements['name'].value;
    const password = form.elements['password'].value;
}
