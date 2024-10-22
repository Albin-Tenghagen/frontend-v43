console.log('Hej Tisdag!');

// Detta är code along
//Ålder kollare
let age = Number(prompt('Ange din ålder'))
if (age >= 18){
    console.log('du är äldre än 18')
} else {
    console.log('du är icke myndig')
}
//--------------------------------------
//&& operator
let userName = prompt('Ange ditt användarnamn');
let password = prompt('Ange ditt lösenord')

if (userName === 'admin' && password === 'Hemligt'){
    console.log('det stämde, hurra!')
} else if (userName === 'lärare' && password === 'niklas' ) {
    console.log('Välkommen lärare')
} else {
    console.log('Det stämmer ej')
}
//--------------------------------------
// || operator
let day = prompt('ange veckodagen').toLowerCase();

if (day === 'lördag' || day === 'söndag') {
    console.log(`det är  ${day}, och helg dessutom!`)
} else {
    console.log('det är vardag ', day, ' mer specifikt')
};
//--------------------------------------
// ! operator
let isRaining = false ;
let isSunny = true;
let isBored = true;
let isBipedal = false;

if (!isRaining  && isSunny || isBipedal && isBored) {
    console.log('Ut och spela fotboll')
} else {
    console.log('läser bok')
};
//-------------------------------------
// ternary operator
// Vilkor ? trueResult : falseResult;
let temperature = Number(prompt('Ange temperatur'));
if (temperature >= 25 ){
    console.log('Skit de är varmt')
} else {

}

// Detta är code along