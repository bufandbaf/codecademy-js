let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const age = 18;

if (age > 18 && registeredEarly === true) {
  console.log(
    "Runners over 18 who did register early will race at 9:30 am. Your race number is: " +
      1 +
      raceNumber
  );
} else if (age > 18 && registeredEarly === false) {
  console.log(
    "Runners over 18 who did not register early will race at 11:00 am. Your race number is: " +
      1 +
      raceNumber
  );
} else if (age < 18) {
  console.log(
    "Runners under 18 will race at 12:30 pm. Your race number is: " + raceNumber
  );
} else {
  console.log("Please see the registration desk.");
}
