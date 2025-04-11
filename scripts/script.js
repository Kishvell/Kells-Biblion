document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    const copyrightYear = new Date().getFullYear();
    document.getElementById('copyrightYear').textContent = copyrightYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;

    // Book Data
    const books = [
        {
            title: "The Lord of the Rings",
            author: "J.R.R. Tolkien",
            image: "images/LOTR.jpeg",
            description: "The Lord of the Rings is an epic high fantasy novel. Set in Middle-earth, the dark Lord has a created a ring of power to rule them all."
        },
        {
            title: "The Chronicles of Narnia",
            author: "C.S. Lewis",
            image: "images/Narnia.jpeg",
            description: "The series is set in the fictional realm of Narnia, a fantasy world of magic, mythical beasts, and talking animals."
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            description: "A powerful and moving story about racial injustice and childhood innocence in the American South."
        }
        // Add more book objects here...
    ];

    let currentIndex = 0;

    function displayBook(index) {
        const featuredBook = books[index];
        document.getElementById('featuredTitle').textContent = featuredBook.title;
        document.getElementById('featuredAuthor').textContent = featuredBook.author;
        document.getElementById('featuredDescription').textContent = featuredBook.description;
        // Update the image source if you decide to add images later
        document.getElementById('featuredImage').src = featuredBook.image;
    }

    document.getElementById('prevButton').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : books.length - 1; // Loop back to the last book
        displayBook(currentIndex);
    });

    document.getElementById('nextButton').addEventListener('click', function() {
        currentIndex = (currentIndex < books.length - 1) ? currentIndex + 1 : 0; // Loop back to the first book
        displayBook(currentIndex);
    });

    // Display the first book initially
    displayBook(currentIndex);
});
