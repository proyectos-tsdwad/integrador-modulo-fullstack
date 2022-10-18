/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookRenderService = void 0;
class BookRenderService {
    createBooksView(books) {
        let mainContainer = document.createElement("div");
        mainContainer.classList.add("container-fluid");
        let mainRow = document.createElement("div");
        mainRow.classList.add("row", "gy-5", "py-4", "ps-3", "ps-md-5");
        let booksElement = books.map(book => `<div class="col-6 col-md-4 col-lg-3 col-xl-2 book-resume">
        <div class="row ps-4"><img class="img-fluid col-8" src="${book.img}">
         <span class="py-2">${this.getScoreStars(book.score)}</span>
         <h2>${book.title}</h2>
         <h3>${book.author.name}</h3>
        </div>
      </div>`);
        booksElement.forEach(element => mainRow.insertAdjacentHTML("beforeend", element));
        mainContainer.appendChild(mainRow);
        return mainContainer;
    }
    getScoreStars(score) {
        let starsScore = '';
        for (let index = 0; index < score; index++) {
            starsScore = starsScore.concat("⭐");
        }
        return starsScore;
    }
}
exports.BookRenderService = BookRenderService;


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BookService = void 0;
const book_model_1 = __webpack_require__(3);
const author_model_1 = __webpack_require__(4);
const publisher_model_1 = __webpack_require__(5);
const recommendedBooks_json_1 = __importDefault(__webpack_require__(6));
const incomingBooks_json_1 = __importDefault(__webpack_require__(7));
class BookService {
    getRecommended() {
        let books = recommendedBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));
        return books;
    }
    getIncomings() {
        let books = incomingBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));
        return books;
    }
    getBestSelling() {
        let books = recommendedBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));
        return books;
    }
    getByCategory() {
        let books = recommendedBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));
        return books;
    }
    getRentalHistory() {
        let books = recommendedBooks_json_1.default.map(book => new book_model_1.Book(book.title, book.img, book.description, new author_model_1.Author(book.author.name), book.stock, new publisher_model_1.Publisher(book.publisher.name), book.isbn, book.pageAmount, book.language, book.genre, new Date(book.releaseDate), book.score));
        return books;
    }
}
exports.BookService = BookService;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Book = void 0;
class Book {
    constructor(title, img, description, author, stock, publisher, isbn, pageAmount, language, genre, releaseDate, score) {
        this._title = title;
        this._img = img;
        this._description = description;
        this._author = author;
        this._stock = stock;
        this._publisher = publisher;
        this._isbn = isbn;
        this._pageAmount = pageAmount;
        this._language = language;
        this._genre = genre;
        this._score = score;
        this._releaseDate = releaseDate;
    }
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
    get author() {
        return this._author;
    }
    set author(author) {
        this._author = author;
    }
    get img() {
        return this._img;
    }
    set img(img) {
        this._img = img;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        this._description = description;
    }
    get publisher() {
        return this._publisher;
    }
    set publisher(publisher) {
        this._publisher = publisher;
    }
    get isbn() {
        return this._isbn;
    }
    set isbn(isbn) {
        this._isbn = isbn;
    }
    get pageAmount() {
        return this._pageAmount;
    }
    set pageAmount(pageAmount) {
        this._pageAmount = pageAmount;
    }
    get language() {
        return this._language;
    }
    set language(language) {
        this._language = language;
    }
    get genre() {
        return this._genre;
    }
    set genre(genre) {
        this._genre = genre;
    }
    get releaseDate() {
        return this._releaseDate;
    }
    set releaseDate(releaseDate) {
        this._releaseDate = releaseDate;
    }
    get score() {
        return this._score;
    }
    set score(score) {
        this._score = score;
    }
    get stock() {
        return this._stock;
    }
    set stock(stock) {
        this._stock = stock;
    }
}
exports.Book = Book;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Author = void 0;
class Author {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
exports.Author = Author;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Publisher = void 0;
class Publisher {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
exports.Publisher = Publisher;


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Todo por volver a verte","author":{"name":"Florencia Vercellone"},"img":"../assets/img/book-cover/todo-por-volver-a-verte.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0},{"title":"Todo por volver a verte","author":{"name":"Florencia Vercellone"},"img":"../assets/img/book-cover/todo-por-volver-a-verte.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"23/12/2020","score":5,"stock":0},{"title":"Todo por volver a verte","author":{"name":"Florencia Vercellone"},"img":"../assets/img/book-cover/todo-por-volver-a-verte.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0},{"title":"Todo por volver a verte","author":{"name":"Florencia Vercellone"},"img":"../assets/img/book-cover/todo-por-volver-a-verte.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0},{"title":"Todo por volver a verte","author":{"name":"Florencia Vercellone"},"img":"../assets/img/book-cover/todo-por-volver-a-verte.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0},{"title":"Todo por volver a verte","author":{"name":"Florencia Vercellone"},"img":"../assets/img/book-cover/todo-por-volver-a-verte.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0}]');

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0},{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"23/12/2020","score":5,"stock":0},{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0},{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0},{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0},{"title":"Punk 57","author":{"name":"Penelope Douglas"},"img":"../assets/img/book-cover/punk-57.png","description":"","publisher":{"name":"Ivrea"},"isbn":"","pageAmount":100,"language":"","genre":"","releaseDate":"","score":5,"stock":0}]');

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const book_render_service_1 = __webpack_require__(1);
const book_service_1 = __webpack_require__(2);
const bookService = new book_service_1.BookService();
const bookRender = new book_render_service_1.BookRenderService();
const recomendedBooksElement = document.getElementById("recomended-books");
createRecomendedBooksView();
const incomingBooksElement = document.getElementById("incoming-books");
createincomingBooksView();
function createRecomendedBooksView() {
    if (!recomendedBooksElement) {
        return;
    }
    let recommendedBooks = bookService.getRecommended();
    let recommendedBooksView = bookRender.createBooksView(recommendedBooks);
    recomendedBooksElement.appendChild(recommendedBooksView);
}
function createincomingBooksView() {
    if (!incomingBooksElement) {
        return;
    }
    let books = bookService.getIncomings();
    let incomingBooksView = bookRender.createBooksView(books);
    incomingBooksElement.appendChild(incomingBooksView);
}

})();

/******/ })()
;