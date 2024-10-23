//// övning 1
//  let temperature = Number(prompt('hur många celsius är det ute'))

//  if (temperature >= 30 ) {
//     console.log('Det är varmt ute.')
//  } else if (temperature >= 20 && temperature < 30){
//     console.log('det är tempererat ute.')
//  } else if (temperature >= 10 && temperature < 20) {
//     console.log('det är lite kyligt')
//  } else {

//  }
////---------------------------------------------------------------------------
//// övning 2
//  let betygPoäng = Number(prompt('Ange dina poäng för konvertering, mellan 0-100'));

//  if (betygPoäng >= 90 && betygPoäng <= 100) {
//     console.log('Du får ett A!')
// } else if (betygPoäng >= 80 && betygPoäng <= 89) {
//     console.log('Du får B!')
// } else if (betygPoäng >= 70 && betygPoäng <= 79) {
//     console.log('Du får C!')
// } else if (betygPoäng >= 60 && betygPoäng <= 69) {
//     console.log('Du får D!')
// } else if (betygPoäng >= 0 && betygPoäng <= 59) {
//     console.log('Du får F!')
// }
////-----------------------------------------------------------------------------
//// övning 3

// let kundTyp = prompt('är du "ny" kund eller "återkommande"?').toLowerCase
// let köpBelopp = Number(prompt('ange totala beloppet'))

// if (kundTyp == 'återkommande' && köpBelopp > 500) {
//     console.log('Du får 15% rabatt')
//     let nyaPris = köpBelopp * 0.85;
//     console.log(`slut beloppet blir ${nyaPris}`) 
// } else if (kundTyp = 'ny' && köpBelopp > 500) {
//     console.log('du får 10% rabatt')
//     let nyaPris = köpBelopp * 0.90;
//     console.log(`slut beloppet blir ${nyaPris}`) 
// } else {
//     console.log(`Totalbeloppet blir ${köpBelopp}`)
// }
////-------------------------------------------------------------------------------
//// övning 4

// const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
// let userPassword = prompt('ange ditt lösenord, Minst 8 bokstäver varav en är stor, och en siffra');

// (regex.test(userPassword)) 
// ? console.log('Giltigt lösenord')
// : console.log('ogiltigt lösenord');
////--------------------------------------------------------------------------------
//// övning 5

// const trafikLjusFärg = prompt('Röd, Gul eller grön');
// let trafikLjus = trafikLjusFärg.toLowerCase();


// trafikLjus === 'grön'
// ? console.log('Kör!') 
// : trafikLjus === 'gul' 
// ? console.log('förbered att stanna') 
// : trafikLjus === 'röd'
// ? console.log('stanna')
// : console.log('ogiltig inmatning');

////-------------------------------------------------------------------------------
//// övning 6 
//  let userNumber = Number(prompt('Ange ett nummer mellan 1 o 3'))


//  switch(userNumber) {
//     case 1 :
//         console.log('Nummer Ett')
//     break;
//     case 2 :
//         console.log('Nummer Två')
//     break;
//     case 3 :
//         console.log('Nummer tre')
//     break;
//     default: 
//         console.log('ogiltig inmatning')
//  }
 ////---------------------------------------------------------------------------
 //// övning 7

//  let userWeight = parseFloat(prompt('ange din vikt, för att kalkylera din vikt på olika planeter'));

//  if (isNaN(userWeight)) {
//     console.log('felaktig inmatning, var god försök igen')
//  }

//  let newWeight = undefined;

//  let choosenPlanet = prompt('Välj planet: Mars, Jupiter, Månen').toLowerCase();

//  switch (choosenPlanet) {
//     case 'mars' :
//         newWeight = userWeight * 0.38;
//     break;
//     case 'jupiter' :
//         newWeight = userWeight * 2.34
//     break;
//     case 'månen':
//         newWeight = userWeight * 0.16
//     break;
//     default:
//         console.log('ogiltigt planetval')

//  }

//  alert(newWeight)
//  console.log(newWeight);
 ////-----------------------------------------------------------------------------
 //// övning 8

//  let questionOne = prompt('Vem är vår nuvarande statsminister?');
//  let questionTwo = prompt('Vad är pi? svara med två decimaler');
//  let questionThree = prompt('är elvis presley amerikansk?');

//  let result = 0 ;

//  if (questionOne == 'ulf kristersson') {
//     result = result + 1;
//     alert('Tjohoo! rätt svar, 1 poäng :D')
//  } else {
//     result = result + 0; 
//  } 
// if (questionTwo == '3.14') {
//     result = result + 1;
//     alert('Tjohoo! rätt svar, 1 poäng :D')
// } else {
//     result = result + 0;
// }

// if (questionThree == 'ja'){
//     result = result + 1;
//     alert('Tjohoo! rätt svar, 1 poäng :D')
// } else {
//     result = result + 0
// .};



// console.log(`Snyggt Jobbat, ditt resultat blev : ${result} poäng`)

////--------------------------------------------------------------------------------
//// övning 9
// const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
// let userPassword = prompt('ange ditt lösenord, Minst 8 bokstäver varav en är stor, och en siffra');

// let userMail = prompt('Ange din email')
// let mailRegEx = /@.*\./;

// if (mailRegEx.test(userMail)) {
//     console.log('valid email')
// } else {
//     console.log('invalid mail')
// }


////--------------------------------------------------------------------------------
//// övning 10 
function pinCheck() {
let correctPin = 1234;
const maxTryes = 3;
let trys = 0;

while (trys < maxTryes) {
    let userPin = Number(prompt('skriv in din pinkod här'))

    if (isNaN(correctPin)) {
        alert('fel inmatning, försök igen')
        continue;
    } 

    if (userPin === correctPin) {
        alert('korrekt pin, fortskrid.')
        return;
    } else {
        trys++;
        alert('fel pin, försök igen')
    }
}

alert('för många försök, inmatning misslyckades')

}
// pinCheck()
////--------------------------------------------------------------------------------
//// övning 11

let firstMeal = {
    mainCourse : 'hamburgir',
    sideCourse : 'fries',
    price : 120
}
let secondMeal = {
    mainCourse : 'bacon hamburgir',
    sideCourse : 'fries',
    price : 125
}

let thirdMeal = {
    mainCourse : 'bacon&cheese hamburgir',
    sideCourse : 'fries',
    price : 130
}


let userChoice = parseFloat(prompt('choose meny option with number 1-3'));
if (userChoice == 1) {
    alert(`${firstMeal} choosen, 15-20 minutes it shall arrive`)
} else if (userChoice == 2) {
    alert(`${secondMeal} choosen, in 15-20 minutes it shall arrive`)
} else if (userChoice == 3) {
    alert(`${thirdMealMeal} choosen, in 15-20 minutes it shall arrive`)
} else {
    alert('ditt val är med i listan, välj igen')
}