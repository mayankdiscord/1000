document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleTheme');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    });
});
