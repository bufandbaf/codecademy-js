class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(numberValue) {
    if (numberValue === number) {
      this._numberOfStudents = numberValue;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberOfStudents} students at the ${this.level} level.`
    );
  }
  static pickSubstituteTeacher(substituteTeachers) {
    this._substituteTeachers = [""];
    Math.floor(substituteTeachers.length * Math.random());
    substituteTeachers[Index];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = [""];
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
}
