document.addEventListener('DOMContentLoaded', () => {
    
    // --- Typing Animation Logic ---
    const textToType = "Welcome to my magical corner of the internet.";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;

    function typeWriter() {
        // If there are still letters left to type...
        if (charIndex < textToType.length) {
            // Add the next letter to the screen
            typingElement.innerHTML += textToType.charAt(charIndex);
            charIndex++;
            // Wait 50 milliseconds, then type the next letter!
            setTimeout(typeWriter, 50); 
        }
    }

    // Start the typing animation!
    typeWriter();

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');

    // Listen for the user scrolling the page
    window.addEventListener('scroll', () => {
        // If they scroll down more than 50 pixels...
        if (window.scrollY > 50) {
            // Add the solid cream background
            navbar.classList.add('scrolled');
        } else {
            // If they are at the very top, remove it to make it transparent again
            navbar.classList.remove('scrolled');
        }
    });

});