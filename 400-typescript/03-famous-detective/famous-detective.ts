/**
 * Documentation
 * 
 * The detective introduces himself (function)
 * The detective proclaims to use the magnifying glass
 * He will consider the first clue: clue1
 * He will consider the second clue: clue2
 * He will confront the guilty party
 */


 function introductionAndMagnifyingGlass(){
    console.log('I am a famous detective and I will solve the crime. I will use my magnifying glass.');
}

introductionAndMagnifyingGlass();

function determineCulprit(){
    return Math.floor(Math.random()*2+1);
  }

function crimeSceneContent(numberofClues:number, clue1:string, clue2:string, suspect1:string, suspect2:string){
    console.log('Now I consider the first clue: ',clue1);
    console.log('Now I consider the second clue: ',clue2);

    let culpritNumber:number = determineCulprit();

    if(culpritNumber === 1){
        return(suspect1);
    } else {
        return(suspect2);
    }
}

let answer: string = crimeSceneContent(2, "The parrot heard everything!", 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam');

function crimeSolved(){
    console.log("The guilty party is none other than " + answer + "!");
}

crimeSolved()