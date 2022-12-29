/**
 * Interface = Object for Typescript
 * Interface = ONLY Type and no data
 */

export enum Nationality {
  Japanese = 'Japanese',
  British = 'British',
}

export interface IPerson {
  name: string;
  nationality?: Nationality;
}

export enum Genre {
  Drama = 'Drama',
  Comedy = 'Comedy',
  Romance = 'Romance',
  Horror = 'Horror',
  Fantasy = 'Fantasy',
}

export enum Booktype {
  Paperback = 'Paperback',
  Hardcover = 'Hardcover',
}

export enum Language {
  Czech = 'Czech',
  English = 'English',
}

export interface IBook {
  pages: number|null;
  title: string;
  genre: Genre|null;
  type: Booktype|null;
  author: IPerson;
  editor?: IPerson|null;
  language: Language|null;
}

interface IBookMandatory extends Pick<IBook, 'author'|'title'> {}

export interface IBookCreate extends IBookMandatory, Partial<Omit<IBook, keyof IBookMandatory>> {}
export interface IBookUpdate extends Partial<IBook>{}

export interface ILibrary {
  name: string;
  books?: IBook[];
  owner: IPerson;
}

