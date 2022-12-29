/**
 * 
 */

interface IAnimal {mamal:boolean};

const dog: IAnimal = {mamal:true};
dog.mamal = false;

let bird: IAnimal = {mamal:false};
bird = 1;

const a = 1;
let b = 1;

a = true;
b = true;

a = 2;
b = 2;

if (true) {
    const a = true;
    let b = true;
}

enum Colour {
    Blue,
    Red,
    Green,
}

const Barva = { Red: 'RED', Blue: 'BLUE', Green: 'Green'};

const carpetColour: Colour = Colour.Blue;
let wallColour = Colour.Green;
wallColour = 'blbost';


let barva = Barva.Blue;
barva = 'blbost';

function sendEmail(): void {
    console.log('email sent');
    if (1 === 1) return true;
    return 'bla bla bla';
}