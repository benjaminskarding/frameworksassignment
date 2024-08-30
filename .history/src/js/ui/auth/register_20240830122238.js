

export async function onRegister(event) {
    event.preventDefault();

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        bio: document.getElementById('bio').value,
        banner: {
            url: document.getElementById('bannerUrl').value,
            alt: document.getElementById('bannerAlt').value,
        }
        avatar: {
            url: document.getElementById('avatarUrl').value,
            alt: document.getElementById('avatarAlt').value
        },
    }
}
