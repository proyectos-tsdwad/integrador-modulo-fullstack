import { Book } from "./book.model";

export class BookRenderService {


  createBooksView(books: Book[]): HTMLDivElement {
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("container-fluid")

    let mainRow = document.createElement("div");
    mainRow.classList.add("row", "gy-5", "py-4", "ps-3", "ps-md-5");

    let booksElement = books.map(book =>
      `<div class="col-6 col-md-4 col-lg-3 col-xl-2 book-resume">
        <div class="row ps-4"><img class="img-fluid col-8" src="${book.img}">
         <span class="py-2">${this.getScoreStars(book.score)}</span>
         <h2>${book.title}</h2>
         <h3>${book.author.name}</h3>
        </div>
      </div>`
    );

    booksElement.forEach(element => mainRow.insertAdjacentHTML("beforeend", element))
    mainContainer.appendChild(mainRow)
    return mainContainer;
  }


  private getScoreStars(score: number): string {
    let starsScore = '';

    for (let index = 0; index < score; index++) {
      starsScore = starsScore.concat("⭐")
    }

    return starsScore;
  }

}
