import { BookRenderService } from "../book/book-render.service";
import { Book } from "../book/book.model";
import { BookService } from "../book/book.service";

const bookService = new BookService();
const bookRender = new BookRenderService();

const recomendedBooksElement = document.getElementById("recomended-books");
createRecomendedBooksView();

const incomingBooksElement = document.getElementById("incoming-books");
createincomingBooksView();

function createRecomendedBooksView() {

  if (!recomendedBooksElement) {
    return;
  }

  let recommendedBooks: Book[] = bookService.getRecommended();

  let recommendedBooksView: HTMLDivElement = bookRender.createBooksView(recommendedBooks);

  recomendedBooksElement.appendChild(recommendedBooksView);
}


function createincomingBooksView() {

  if (!incomingBooksElement) {
    return;
  }

  let books: Book[] = bookService.getIncomings();

  let incomingBooksView: HTMLDivElement = bookRender.createBooksView(books);

  incomingBooksElement.appendChild(incomingBooksView);
}
