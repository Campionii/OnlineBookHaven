    // script.js

    const addBookBtn = document.getElementById("addBookBtn");
    const deleteBooksBtn = document.getElementById("deleteBooksBtn");
    const showBooksBtn = document.getElementById("showBooksBtn");
    const bookList = document.getElementById("bookList");
    const bookCount = document.getElementById("bookCount");
    const prevButton = document.getElementById('anterior');
    const nextButton = document.getElementById('proximo');
    const carrosselImg = document.getElementById('carrosselImagem');
    const bookTitleInput = document.getElementById("bookTitleInput");

    let books = [];

    const booksAndImages = {
        
        "it": "it.png",
        "a sombra flamejante": "sombra.png",
        "faces da luz": "facesdaluz.jpg",
        "para o lobo": "paraolobo.jpg"

    };


    addBookBtn.addEventListener("click", () => {
        const bookTitle = bookTitleInput.value;
        if (bookTitle) {
            const book = {
                title: bookTitle
            };
            books.push(book);
            updateBookList();
            updateCarrosselImage(bookTitle);
        }
        bookTitleInput.value = "";
    });

    deleteBooksBtn.addEventListener("click", () => {
        books = [];
        updateBookList();
    });

    showBooksBtn.addEventListener("click", () => {
        mostrarLivros();
    });

    prevButton.addEventListener('click', () => {
        imgIndice = (imgIndice === 0) ? limite : imgIndice - 1;
        carregar();
    });

    nextButton.addEventListener('click', () => {
        imgIndice = (imgIndice === limite) ? 0 : imgIndice + 1;
        carregar();
    });

    function updateBookList() {
        bookList.innerHTML = "";
        books.forEach((book, index) => {
            const bookItem = document.createElement("p");
            bookItem.textContent = `${index + 1}. ${book.title}`;
            bookList.appendChild(bookItem);
        });

        bookCount.textContent = `Quantidade de livros cadastrados: ${books.length}`;
        
        if (books.length === 0) {
            bookList.innerHTML = "<p>Nenhum livro cadastrado.</p>";
        }
    }

    function mostrarLivros() {
        const livrosDiv = document.getElementById('livros');
        livrosDiv.innerHTML = '';

        if (books.length === 0) {
            livrosDiv.innerHTML = 'Biblioteca vazia';
        } else {
            books.forEach((book, index) => {
                const livroInfo = document.createElement('p');
                livroInfo.textContent = `Livro ${index + 1}: ${book.title}`;
                livrosDiv.appendChild(livroInfo);
            });
        }
    }

    function updateCarrosselImage(bookTitle) {
        if (booksAndImages.hasOwnProperty(bookTitle)) {
            const imageName = booksAndImages[bookTitle];
            carrosselImg.src = imageName;
        } else {
            carrosselImg.src = "it.png", "sombra.png","facesdaluz.jpg", "paraolobo.jpg"; 
        }
    }


