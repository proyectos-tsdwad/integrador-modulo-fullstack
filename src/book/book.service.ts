import { Book } from "./book.model";
import { Author } from "../author/author.model";
import { Publisher } from "../publisher/publisher.model";

export class BookService {

  private _bookList: Book[] = [];

  public constructor() {
    this.fillBookList();
  }

  public fillBookList() {
    this._bookList = [
      new Book('Todo por volver a verte', '/assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4),
        new Book('Todo por volver a verte', '/assets/img/books covers/todo-por-volver-a-verte.png', '', new Author('Florencia Vercellone'), 10, new Publisher('Ivrea'),
        '', 256, 'Español', 'Romance', new Date, 4)
    ]
  }


  public get bookList(): Book[] {
    return this._bookList;
  }

}
