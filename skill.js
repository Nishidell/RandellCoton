    document.addEventListener('DOMContentLoaded', () => {
    
    const quadrants = document.querySelectorAll('.quadrant');
    const magicWheel = document.getElementById('magic-wheel');
    const skillCards = document.querySelectorAll('.skill-card');
    const projectCards = document.querySelectorAll('.project-card');

    quadrants.forEach(quadrant => {
        quadrant.addEventListener('click', () => {
            
            // 1. Get the spell variables from the HTML
            const targetCategory = quadrant.getAttribute('data-target');
            const targetTheme = quadrant.getAttribute('data-theme');
            const rotationAngle = quadrant.getAttribute('data-rotation');

            // 2. Spin the wheel to align with the top pointer!
            magicWheel.style.transform = `rotate(${rotationAngle}deg)`;

            // 3. Change the Global Environment Theme
            // Remove all existing themes from the body
            document.body.classList.remove('theme-default', 'theme-blue', 'theme-red', 'theme-black');
            // Add the new chosen theme
            document.body.classList.add(targetTheme);

            // 4. Filter the Skills
            skillCards.forEach(card => {
                if (targetCategory === 'all' || card.classList.contains(targetCategory)) {
                    card.classList.remove('hidden-magic');
                } else {
                    card.classList.add('hidden-magic');
                }
            });

            // 5. Filter the Projects
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