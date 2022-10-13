import { Book } from "./book.model";
import { Author } from "../author/author.model";
import { Publisher } from "../publisher/publisher.model";

export class BookService {

  private static  _bookServiceInstance = new BookService();

  private constructor(){}

  static get bookService(){
    if (!this._bookServiceInstance){
      return new BookService();
    }
    return this._bookServiceInstance;
  }


  public  getRecommended(): Book[] {

    let recommendedBooks = [
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4)

    ]

    return recommendedBooks;
  }

  public  getNewIncomings(): Book[] {

    let incomingBooks = [
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4)

    ]

    return incomingBooks;
  }

  public  getBestSelling(): Book[] {

    let bestSellingBooks = [
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4)

    ]

    return bestSellingBooks;
  }

  public  getByCategory(): Book[] {

    let booksByCategory = [
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4)

    ]

    return booksByCategory;
  }

  public  getRentalHistory(): Book[] {

    let rentalHistoryBooks = [
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
      new Book('Todo por volver a verte', '../assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4)

    ]

    return rentalHistoryBooks;
  }

}
