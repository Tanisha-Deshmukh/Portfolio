document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.createElement('button');
    navToggle.textContent = '☰';
    navToggle.classList.add('nav-toggle');
    document.querySelector('nav').appendChild(navToggle);

    const navMenu = document.querySelector('nav ul');
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Add form submission logic here (e.g., AJAX request or validation)
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});
