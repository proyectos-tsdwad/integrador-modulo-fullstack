import { Book } from "./book.model";
import { Author } from "../author/author.model";
import { Publisher } from "../publisher/publisher.model";
import recommendedBooks from '../example-data/recommendedBooks.json';

export class BookService {

  getRecommended(): Book[] {

    let recommndedBooks = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return recommndedBooks;
  }

  getNewIncomings(): Book[] {

    let incomingBooks = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return incomingBooks;
  }

  getBestSelling(): Book[] {

    let bestSellingBooks = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return bestSellingBooks;
  }

  getByCategory(): Book[] {

    let booksByCategory = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return booksByCategory;
  }

  getRentalHistory(): Book[] {

    let rentalHistoryBooks = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return rentalHistoryBooks;
  }

}
