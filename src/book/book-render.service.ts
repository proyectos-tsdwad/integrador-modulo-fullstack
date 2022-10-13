import { Book } from "./book.model";

export class BookRenderService {

  private static _bookRenderInstance = new BookRenderService();

  private constructor() { }

  static get bookRenderService() {
    if (!this._bookRenderInstance) {
      return new BookRenderService();
    }
    return this._bookRenderInstance;
  }

  public createBooksView(books: Book[]): HTMLDivElement {
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("container-fluid")

    let mainRow = document.createElement("div");
    mainRow.classList.add("row", "gy-5", "py-4", "ps-3", "ps-md-5");

    books.forEach(book => {

      let mainCol = document.createElement("div");
      mainCol.classList.add("col-6", "col-md-4", "col-lg-3", "col-xl-2", "book-resume");

      let subRow = document.createElement("div");
      subRow.classList.add("row", "ps-4");

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

    mainContainer.appendChild(mainRow)
    return mainContainer;
  }

}
