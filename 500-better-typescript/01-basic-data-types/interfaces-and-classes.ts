/**
 * Interface = Object for Typescript
 * Interface = ONLY Type and no data
 */

enum Nationality {
  Japanese,
  British,
}

interface IPerson {
  name: string;
  nationality?: Nationality;
}

enum Genre {
  Drama,
  Comedy,
  Romance,
  Horror,
  Fantasy,
}

enum Booktype {
  Paperback,
  Hardcover,
}

enum Language {
  Czech,
  English,
}

interface IBook {
  pages: number;
  title: string;
  genre: Genre;
  type: Booktype;
  author: IPerson;
  editor?: IPerson;
  language: Language;
}

interface ILibrary {
  books: IBook[];
  owner: IPerson;
}

const library: ILibrary = {
  books: [
    {
      author: {
        name: "Saga",
        nationality: Nationality.Japanese,
      },
      editor: {
        name: "Troskov",
      },
      genre: Genre.Drama,
      pages: 203,
      title: "Sláma i hedvábí",
      type: Booktype.Paperback,
      language: Language.Czech,
    },
    {
      author: {
        name: "Rowling",
        nationality: Nationality.British,
      },
      genre: Genre.Fantasy,
      pages: 346,
      title: "Harry Potter and the Philosopher´s Stone",
      type: Booktype.Paperback,
      language: Language.English,
    },
  ],
  owner: {
    name: "Tomáš",
  },
};
