document.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundImage = 'url("images/margherita-pizza.jpg")';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';

    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const message = form.querySelector('textarea').value;

        if (name && email && message) {
            alert(`Thank you for reaching out, ${name}! We will get back to you at ${email}.`);
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});


