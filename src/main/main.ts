import { Book } from "../book/book.model";
import { BookService } from "../book/book.service";
import { BookRenderService } from "../book/book-render.service";
import { User } from "../user/user.model";
import { UserService } from "../user/user.service";
import { UserRenderService } from "../user/user-render.service";

const bookService = new BookService();
const bookRender = new BookRenderService();
const userService = new UserService();
const userRender = new UserRenderService();

const recomendedBooksElement = document.getElementById("recomended-books");
createRecomendedBooksView();

const incomingBooksElement = document.getElementById("incoming-books");
createIncomingBooksView();

const bestSellingBooksElement = document.getElementById("bestselling-books");
createBestSellingBooksView();

const sugestedBooksElement = document.getElementById("sugested-books");
createSugestedBooksView();

const dashboardBooksElement = document.getElementById("books-dashboard");
createBooksDashboard();

const dashboardUsersElement = document.getElementById("users-dashboard");
createUsersDashboard();

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

function createBooksDashboard() {

  if (!dashboardBooksElement) {
    return;
  }

  let books: Book[] = bookService.getAllBooks();

  let booksDashboardView: HTMLDivElement = bookRender.createBooksTableview(books);

  dashboardBooksElement.appendChild(booksDashboardView);
}

function createUsersDashboard() {

  if (!dashboardUsersElement) {
    return;
  }

  let users: User[] = userService.getAllUsers();

  let usersDashboardView: HTMLDivElement = userRender.createUserssTableview(users);

  dashboardUsersElement.appendChild(usersDashboardView);
}
