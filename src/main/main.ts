import { BookRenderService } from "../book/book-render.service";
import { Book } from "../book/book.model";
import { BookService } from "../book/book.service";

const bookService = new BookService();
const bookRender = new BookRenderService();

const recomendedBooksElement = document.getElementById("recomended-books");
createRecomendedBooksView();

const incomingBooksElement = document.getElementById("incoming-books");
createIncomingBooksView();

const bestSellingBooksElement = document.getElementById("bestselling-books");
createBestSellingBooksView();

const sugestedBooksElement = document.getElementById("sugested-books");
createSugestedBooksView();

function createRecomendedBooksView() {

  if (!recomendedBooksElement) {
    return;
  }

  let recommendedBooks: Book[] = bookService.getRecommended();

  let recommendedBooksView: HTMLDivElement = bookRender.createBooksView(recommendedBooks);

  recomendedBooksElement.appendChild(recommendedBooksView);
}


function createIncomingBooksView() {

  if (!incomingBooksElement) {
    return;
  }

  let books: Book[] = bookService.getIncomings();

  let incomingBooksView: HTMLDivElement = bookRender.createBooksView(books);

  incomingBooksElement.appendChild(incomingBooksView);
}

function createBestSellingBooksView() {

  if (!bestSellingBooksElement) {
    return;
  }

  let books: Book[] = bookService.getBestSelling();

  let incomingBooksView: HTMLDivElement = bookRender.createBooksView(books);

  bestSellingBooksElement.appendChild(incomingBooksView);
}

function createSugestedBooksView() {

  if (!sugestedBooksElement) {
    return;
  }

  let books: Book[] = bookService.getSugested();

  let sugestedBooksView: HTMLDivElement = bookRender.createBooksView(books);

  sugestedBooksElement.appendChild(sugestedBooksView);
}
