const team = {
  _players: [
    { firstName: "Alisson", lastName: "Becker", age: 30 },
    { firstName: "Jordan", lastName: "Henderson", age: 32 },
    { firstName: "Roberto", lastName: "Firmino", age: 31 },
  ],
  _games: [
    { opponent: "Crystal Palace", teamPoints: 1, opponentPoints: 1 },
    { opponent: "Manchester United", teamPoints: 0, opponentPoints: 3 },
    { opponent: "Bournemouth", teamPoints: 3, opponentPoints: 0 },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);
console.log(team.players);
console.log(team.games);
