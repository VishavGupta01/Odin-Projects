const myLibrary = [];
const bookForm = document.getElementById('bookForm');
const libraryDisplay = document.getElementById('libraryDisplay');

bookForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const Data = new FormData(event.target);

    addBookToLibrary(Data.get('title'), Data.get('author'), Data.get('year'));

    event.target.reset();
});

function Book(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
}

function addBookToLibrary(title, author, year) {
    const id = crypto.randomUUID();
    const book = new Book(id, title, author, year);

    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    libraryDisplay.innerHTML = "";

    myLibrary.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>By:</strong> ${book.author}</p>
            <p><strong>Published:</strong> ${book.year}</p>
        `;

        libraryDisplay.appendChild(bookCard);
    });
}