import {
  Booktype,
  Genre,
  IBook,
  IBookCreate,
  IBookUpdate,
  ILibrary,
  IPerson,
  Language,
} from "./interfaces";

class Book implements IBook {
  constructor(book: IBookCreate) {
    this.author = book.author;
    this.title = book.title;
    this.editor = book.editor ?? null;
    this.pages = book.pages ?? null;
    this.genre = book.genre ?? null;
    this.language = book.language ?? null;
    this.type = book.type ?? null;
  }
  pages: number | null;
  title: string;
  genre: Genre | null;
  type: Booktype | null;
  author: IPerson;
  editor?: IPerson | null | undefined;
  language: Language | null;
  update(book: IBookUpdate) {
    this.editor = book.editor ?? this.editor;
    this.genre = book.genre ?? this.genre;
    this.language = book.language ?? this.language;
    this.pages = book.pages ?? this.pages;
    this.type = book.type ?? this.type;
  }
}

const book1 = new Book({
  author: { name: "Saga" },
  title: "Sláma i hedvábí",
  genre: Genre.Horror,
});
const book2 = new Book({
  author: { name: "Rowling" },
  title: "Harry Potter and the Philosopher´s Stone",
});

book1.update({ genre: Genre.Drama, type: Booktype.Paperback });

class Library implements ILibrary {
  constructor(name: string, owner: IPerson) {
    this.name = name;
    this.owner = owner;
    this.books = [];
  }
  name: string;
  books: IBook[];
  owner: IPerson;
  addBook(book: Book) {
    const idx = this.books.findIndex((b) => b.title === book.title);
    if(idx >= 0) throw new Error(`Book "${book.title}" already exists in this library.`);
    this.books.push(book);
  }
  removeBook(title: string) {
    const idx = this.books.findIndex((book) => book.title === title);
    if (idx >= 0) this.books.splice(idx, 1);
  }
  countBooks(){
    return this.books.length;
  }
  sumTotalPages(){
    return this.books.reduce((acc, book) => acc + (book.pages ?? 0), 0)
  }
}

const library1 = new Library("Červenáčkova", { name: "Michal" });

library1.addBook(book1);
library1.addBook(book2);
