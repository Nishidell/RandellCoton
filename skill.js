document.addEventListener('DOMContentLoaded', () => {
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