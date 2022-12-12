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
    const Index = Math.floor(substituteTeachers.length * Math.random());
    substituteTeachers[Index];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy, averagePrimaryTestScores) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    this._averagePrimaryTestScores = averagePrimaryTestScores;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
  get averagePrimaryTestScores() {
    return this._averagePrimaryTestScores;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams, averageHighTestScores) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = [""];
    this._averageHighTestScores = averageHighTestScores;
  }
  get sportsTeams() {
    console.log(this._sportsTeams);
    return this._sportsTeams;
  }
  get averageHighTestScores() {
    return this._averageHighTestScores;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents, averageMiddleTestScores) {
    super(name, "middle", numberOfStudents);
    this._averageMiddleTestScores = averageMiddleTestScores;
  }
  get averageMiddleTestScores() {
    return this._averageMiddleTestScores;
  }
}

class SchoolCatalog {
  constructor(schoolList) {
    this._schoolList = [schoolList];
  }

  get schoolList() {
    return this._schoolList;
  }

  set schoolList(newSchoolList) {
    this._schoolList.push(newSchoolList);
  }
}

const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13.",
  99
);
lorraineHansbury.quickFacts();
School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);

const alSmith = new HighSchool(
  "Al E. Smith",
  415,
  ["Baseball', 'Basketball', 'Volleyball', 'Track and Field"],
  96
);
alSmith.sportsTeams();
