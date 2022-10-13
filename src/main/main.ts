import { Book } from "../book/book.model";
import { BookService } from "../book/book.service";

let bookService = new BookService();
let books: Book[] = bookService.bookList;


const recomendedBooks = document.getElementById("recomended-books");
fillRecomendedBooks();

function fillRecomendedBooks() {
  if(!recomendedBooks){
    return;
  }

  let mainRow = document.createElement("div");
  mainRow.classList.add("row", "gy-5", "py-4", "ps-3", "ps-md-5", "my-4" );

  books.forEach(book => {

    let mainCol = document.createElement("div");
    mainCol.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2", "book-resume");

    let subRow = document.createElement("div");
    subRow.classList.add("row", "ps-4");
    // divRow.classList.add("justify-content-center");

    let bookCover = document.createElement("img");
    bookCover.classList.add("img-fluid", "col-8");
    bookCover.src = book.img;
    subRow.appendChild(bookCover);

    let bookScore = document.createElement("span");
    bookScore.classList.add("py-2");
    bookScore.textContent = book.score.toString();
    subRow.appendChild(bookScore);

    let bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    subRow.appendChild(bookTitle);

    let bookAuthor = document.createElement("h3");
    bookAuthor.textContent = book.author.name;
    subRow.appendChild(bookAuthor);

    mainCol.appendChild(subRow);
    mainRow.appendChild(mainCol);


  });

  recomendedBooks?.appendChild(mainRow);
  recomendedBooks?.classList.add("container-fluid");
}
