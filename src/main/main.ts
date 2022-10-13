import { BookRenderService } from "../book/book-render.service";
import { Book } from "../book/book.model";
import { BookService } from "../book/book.service";

const bookService = BookService.bookService;
const bookRender = BookRenderService.bookRenderService;

const recomendedBooksElement = document.getElementById("recomended-books");
createRecomendedBooksView();

function createRecomendedBooksView() {

  if(!recomendedBooksElement){
    return;
  }

  let recommendedBooks: Book[] = bookService.getRecommended();

  const recommendedBooksView = bookRender.createBooksView(recommendedBooks);

  recomendedBooksElement.appendChild(recommendedBooksView);
}
