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

    // --- Howl's Magic Dial (Global Filtering) ---
    const dialButtons = document.querySelectorAll('.dial-color');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');

    dialButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1. Move the glowing active state to the clicked button
            dialButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const targetCategory = button.getAttribute('data-target');

            // 2. Filter Skills
            skillCards.forEach(card => {
                if (targetCategory === 'all' || card.classList.contains(targetCategory)) {
                    card.classList.remove('hidden-magic');
                } else {
                    card.classList.add('hidden-magic');
                }
            });

            // 3. Filter Projects
            projectCards.forEach(card => {
                if (targetCategory === 'all' || card.getAttribute('data-category') === targetCategory) {
                    card.classList.remove('hidden-magic');
                } else {
                    card.classList.add('hidden-magic');
                }
            });
            
        });
    });

});