import { Genre, IBookCreate } from "./interfaces";

export const myBooks: IBookCreate[] = [
  {
    author: { name: "Saga" },
    title: "Sláma i hedvábí",
    genre: Genre.Horror,
    pages: 220,
  },
  {
    author: { name: "Rowling" },
    title: "Harry Potter and the Philosopher´s Stone",
    pages: 345,
  },
  {
    author: { name: "Carter" },
    title: "Carter´s book",
    pages: 999,
  },
];
