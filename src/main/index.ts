import { Book } from "../book/book.model";
import { BookService } from "../book/book.service";

let bookService = new BookService();
let books: Book[] = bookService.bookList;

// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const p = document.createElement("p");
// 3. Add the text content
p.textContent = "Hello, World!";
// 4. Append the p element to the div element
app?.appendChild(p);
console.log("");

const recomendedBooks = document.getElementById("recomended-books");
fillRecomendedBooks();

function fillRecomendedBooks() {
  books.forEach(book => {
    let divCol = document.createElement("div");
    divCol.classList.add("col-3")

    let divRow = document.createElement("div");
    divRow.classList.add("row");

    let bookCover = document.createElement("img");
    bookCover.classList.add("img-fluid");
    bookCover.classList.add("col-5");
    bookCover.src = book.img;
    divRow.appendChild(bookCover);

    let spanScore = document.createElement("span");
    spanScore.classList.add("col-12");
    spanScore.textContent = book.score.toString();
    divRow.appendChild(spanScore);

    let spanTitle = document.createElement("span");
    spanTitle.classList.add("col-12");
    spanTitle.textContent = book.title;
    divRow.appendChild(spanTitle);

    let spanAuthorName = document.createElement("span");
    spanAuthorName.classList.add("col-12");
    spanAuthorName.textContent = book.author.name;
    divRow.appendChild(spanAuthorName);

    divCol.appendChild(divRow);
    recomendedBooks?.appendChild(divCol);
  });
}
