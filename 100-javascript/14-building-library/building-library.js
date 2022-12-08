class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return ratingsSum / this.ratings.length;
  }
  addRating(value) {
    if (value < 1 || value > 5) {
      console.log(
        "ERROR! Rating can only be expressed in numbers between 1 and 5."
      );
    } else {
      this.ratings.push(value);
    }
  }
}

class Book extends Media {
  constructor(author, title, pages, bookGenre) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._bookGenre = bookGenre;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
  get bookGenre() {
    return this._bookGenre;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  "popular science",
  544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = [""];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}
