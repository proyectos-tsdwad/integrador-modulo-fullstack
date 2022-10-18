import { Book } from "./book.model";
import { Author } from "../author/author.model";
import { Publisher } from "../publisher/publisher.model";
import recommendedBooks from '../simulation-data/recommendedBooks.json';
import incomingBooks from '../simulation-data/incomingBooks.json';

export class BookService {

  getRecommended(): Book[] {

    let books = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return books;
  }

  getIncomings(): Book[] {

    let books = incomingBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return books;
  }

  getBestSelling(): Book[] {

    let books = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return books;
  }

  getByCategory(): Book[] {

    let books = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return books;
  }

  getRentalHistory(): Book[] {

    let books = recommendedBooks.map(book => new Book(
      book.title, book.img, book.description, new Author(book.author.name), book.stock, new Publisher(book.publisher.name),
      book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));

    return books;
  }

}
