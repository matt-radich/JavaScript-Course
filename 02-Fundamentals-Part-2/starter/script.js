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

// const cutFruit = function (fruit) {
//   return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruit(apples)
//   const orangePieces = cutFruit(oranges)

//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`
//   return juice;
// }

// console.log(fruitProcessor(2,3))

//Functions Recap///

// const calcAge4 = function(birthYear) {
//   return 2037 - birthYear
// }

// const yearsUntilRetire = (birthYear, firstName) => {
//   const age = calcAge4(birthYear)
//   const retirement = 65 - age

//   if(retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement
//   } else {
//     console.log(`${firstName} has already retired`);
//     return 99999;
//   }
  

  
// }
// console.log(yearsUntilRetire(1991, "matt"))
// console.log(yearsUntilRetire(1950, "matt2"))


//CODING CHALLENGE #1 < ---------------------------------------------------------------
// const calcAverage =(num1, num2, num3) => {
//   const scores = num1 + num2 + num3
//   const divide = scores / 3
//   return divide

// }
// const scoreDolphins = console.log(calcAverage(44,23,71));
// const scoreKoalas = console.log(calcAverage(65,54,49));

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if(avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins Win ${avgDolphins} vs ${avgKoalas}`)
    
//   }else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas Win ${avgKoalas} vs ${avgDolphins}`)
    
//   }
//   else {
//     console.log("no1 wins Today");
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111)

// checkWinner(111, 576)

//<------------------------------------------------------------------------------------


//Introduction to Arrays <----------------------------------------------------------

//instead of like below, we can put into an array

// const friend1 = "Matt1"
// const friend2 = "Matt2"
// const friend3 = "Matt3"

// const friends = ["Matt1", "Matt2", "Matt3"]
// console.log(friends);

// const years1 = new Array(1991,1984,2008,2020);

// console.log(friends[0]);
// console.log(friends[2]);

//gives us how many options are in the array - not 0 based

// console.log(friends.length);

//length is not 0 based, so we always subtract 1 to get end element in an the length
//of an array

//Expresssion produces a value 
// console.log(friends[friends.length - 1]);

//can change / mutate array - change position 2 in the array to another name
// friends[2] = "NotMatt";
// console.log(friends);
// const firstName = "Matt"
// const matt = [firstName, "Radich", 2037 - 1989, "Teacher", friends];

// console.log(matt);
// console.log(matt.length);

//Exercise < ------------------------------------------------

// const calcAge4 = function(birthYear) {
//   return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge4(years[0]);
// const age2 = calcAge4(years[1]);
// const age3 = calcAge4(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge4(years[0]), calcAge4(years[1]), calcAge4(years[years.length - 1])]
// console.log(ages);

//Array Methods < ---------------------------------------------------------------------

//Add Elements -----------
const friends = ["Matt1", "Matt2", "Matt3"];

//Array Push method , Adds element to end of array----
//Returns the length of the array
//Put push into variable aswel
friends.push("MattPush1")
const newLength = friends.push("MattPushVariable");
console.log(friends);
console.log(newLength);

//Array Unshift , Adds element to beginning of array----
//Returns length of the array
friends.unshift("MattUnshift")
console.log(friends);

//Remove Elements -------------
friends.pop()//removes last element of the array
friends.pop()
friends.pop()
//pop returns the removed element
console.log(friends);

friends.shift()//removes first element of the array
//shift returns the removed element
console.log(friends);

//gives us the index of where the element is in the array
console.log(friends.indexOf("Matt1"));

//checks to see if the element is in the array - returns True or False
console.log(friends.includes("Matt1"));


//Coding Challenge 2 < -------------------------------------------------------------
//Build a tip calculator, Tip 15% of the bill if the bill value is between 50
//and 300, and if the value is different, tip 20%

const calcTip = function(billValue) {
  if (billValue >=50 && billValue <=300) {
    return billValue *0.15
  } else {
    return billValue *0.20
  }
}

console.log(calcTip(100));

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips);

//Bonus: Create an array "totals" containing the total values, so bill+tip

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(totals);
