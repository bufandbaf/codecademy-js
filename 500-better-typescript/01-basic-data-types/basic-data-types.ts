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