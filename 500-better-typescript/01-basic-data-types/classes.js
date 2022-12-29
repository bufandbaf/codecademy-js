"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
var Book = /** @class */ (function () {
    function Book(book) {
        var _a, _b, _c, _d, _e;
        this.author = book.author;
        this.title = book.title;
        this.editor = (_a = book.editor) !== null && _a !== void 0 ? _a : null;
        this.pages = (_b = book.pages) !== null && _b !== void 0 ? _b : null;
        this.genre = (_c = book.genre) !== null && _c !== void 0 ? _c : null;
        this.language = (_d = book.language) !== null && _d !== void 0 ? _d : null;
        this.type = (_e = book.type) !== null && _e !== void 0 ? _e : null;
    }
    Book.prototype.update = function (book) {
        var _a, _b, _c, _d, _e;
        this.editor = (_a = book.editor) !== null && _a !== void 0 ? _a : this.editor;
        this.genre = (_b = book.genre) !== null && _b !== void 0 ? _b : this.genre;
        this.language = (_c = book.language) !== null && _c !== void 0 ? _c : this.language;
        this.pages = (_d = book.pages) !== null && _d !== void 0 ? _d : this.pages;
        this.type = (_e = book.type) !== null && _e !== void 0 ? _e : this.type;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library(name, owner) {
        this.name = name;
        this.owner = owner;
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        var idx = this.books.findIndex(function (b) { return b.title === book.title; });
        if (idx >= 0)
            throw new Error("Book \"".concat(book.title, "\" already exists in this library."));
        this.books.push(book);
    };
    Library.prototype.removeBook = function (title) {
        var idx = this.books.findIndex(function (book) { return book.title === title; });
        if (idx >= 0)
            this.books.splice(idx, 1);
    };
    Library.prototype.countBooks = function () {
        return this.books.length;
    };
    Library.prototype.sumTotalPages = function () {
        return this.books.reduce(function (acc, book) { var _a; return acc + ((_a = book.pages) !== null && _a !== void 0 ? _a : 0); }, 0);
    };
    return Library;
}());
var library1 = new Library('Červenáčkova', { name: 'Michal' });
var book1 = new Book({ author: { name: "Saga" }, title: 'Sláma i hedvábí', genre: interfaces_1.Genre.Horror, pages: 220 });
var book2 = new Book({ author: { name: "Rowling" }, title: 'Harry Potter and the Philosopher´s Stone', pages: 345 });
var book3 = new Book({ author: { name: "Carter" }, title: 'Carter´s book', pages: 219 });
library1.addBook(book1);
library1.addBook(book2);
library1.addBook(book3);
console.clear();
console.log(library1.sumTotalPages());
library1.removeBook(book1.title);
console.log(library1.sumTotalPages());
