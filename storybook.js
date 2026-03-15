document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Grab the container where the book will be built
    const bookContainer = document.getElementById('book-container');

    // 2. Initialize the StPageFlip library with our desired settings
    const pageFlip = new St.PageFlip(bookContainer, {
        width: 400, // Width of one single page
        height: 500, // Height of one single page
        size: "fixed", // Keeps the book a consistent size
        minWidth: 300,
        maxWidth: 500,
        minHeight: 400,
        maxHeight: 600,
        drawShadow: true, // The magical 3D shadow effect!
        showCover: false, // We are just jumping straight into the chapters
        mobileScrollSupport: false 
    });

    // 3. Tell the library which HTML elements are the pages
    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

    // 4. Hook up your custom arrows to the library's flip functions!
    document.getElementById('next-page').addEventListener('click', () => {
        pageFlip.flipNext();
    });

    document.getElementById('prev-page').addEventListener('click', () => {
        pageFlip.flipPrev();
    });

}); 