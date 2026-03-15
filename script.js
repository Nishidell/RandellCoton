document.addEventListener('DOMContentLoaded', () => {
    
    // --- Typing Animation Logic ---
    const textToType = "Welcome to my magical corner of the internet.";
    const typingElement = document.getElementById('typing-text');
    let charIndex = 0;

    function typeWriter() {
        // If there are still letters left to type...
        if (charIndex < textToType.length) {
            typingElement.innerHTML += textToType.charAt(charIndex);
            charIndex++;
            // Wait 50 milliseconds, then type the next letter!
            setTimeout(typeWriter, 50); 
        }
    }

    // Start
    typeWriter();

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');

    // logic for naviagation bar background change on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
           
            navbar.classList.add('scrolled');
        } else {
          
            navbar.classList.remove('scrolled');
        }
    });

});