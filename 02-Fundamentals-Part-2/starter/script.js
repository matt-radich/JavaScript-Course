// /*Functions*/

// function logger() {
//   console.log("My name is Matt");
// }

// logger();
// logger();
// logger();

// ////////////////////////////////////////////////////////////////

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 1);
// console.log(appleJuice);


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// //////////////////////////////////////////////////////////////////
// //Try function//
// function process(drink, food) {
//   const lunch = `You have ${drink} drink and ${food} food..`
//   return lunch;
// }

// const myFood = process(1, 7);
// console.log(myFood);

// /* Declarations VS Expressions */

// // function calcAge1(birthYear){
// //   const age = 2022 - birthYear;
// //   return age
// // }


// //Declaration , You can call a Declaration BEFORE you define it///////////////
// function calcAge1(birthYear){
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1989)

// console.log(age1);

// //Expression , Expressions produce values ///////////////
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// }
// const age2 = calcAge2(1989)
// console.log(age2);

// console.log(age1, age2);

// //
// //Arrow Functions

// // const calcAge2 = function (birthYear) {
// //   return 2022 - birthYear;
// // }

// //value auto returns - oneliner functions
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(1991)
// console.log(age3);

// //more then 1 liner function - need to return
// const yearsUntilRetire = (birthYear, firstName) => {
//   const age = 2037 - birthYear
//   const retirement = 65 - age
//   // return retirement
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetire(1991, "Matt"))
// console.log(yearsUntilRetire(1981, "Bob"))

/////////Functions calling other functions

const cutFruit = function (fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruit(apples)
  const orangePieces = cutFruit(oranges)

  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
  return juice;
}

console.log(fruitProcessor(2,3))

