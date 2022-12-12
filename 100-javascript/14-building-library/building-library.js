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
  constructor(director, title, runTime, mainStar) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._mainStar = mainStar;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get mainStar() {
    return this._mainStar;
  }
}

class CD extends Media {
  constructor(artist, title, songs, yearPublished) {
    super(title);
    this._artist = artist;
    this._songs = songs;
    this._yearPublished = yearPublished;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  shuffle() {
    let shuffledSongs = [];
    for (let i = 0; i < this.songs.length; i++) {
      let randomIndex = Math.floor(Math.random() * this.songs.length);
      let randomSong = this.songs[randomIndex];
      if (shuffledSongs.includes(randomSong)) {
        i--;
      } else {
        shuffledSongs[i] = randomSong;
      }
    }
    return shuffledSongs;
  }
}

class Catalog {
  constructor(mediaList) {
    this._MyCatalog = [mediaList];
  }

  get mediaList() {
    return this._mediaList;
  }

  set mediaList(newMedialist) {
    this._MyCatalog.push(newMedialist);
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

const speed = new Movie("Jan de Bont", "Speed", 116, "Sandra Bullock");
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const loveRevolution = new CD(
  "Lenny Kravitz",
  "Love Revolution",
  ["American Woman", "I Belong to You", "Are You Gonna Go My Way?"],
  2008
);
loveRevolution.toggleCheckOutStatus();
console.log(loveRevolution.isCheckedOut);
loveRevolution.addRating(5);
loveRevolution.addRating(4);
loveRevolution.addRating(3);
console.log(loveRevolution.getAverageRating());
