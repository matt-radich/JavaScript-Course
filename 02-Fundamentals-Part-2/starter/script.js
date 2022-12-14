// /*Functions*/

/*function logger() {
  console.log("My name is Matt");
}

logger();
logger();
logger();

////////////////////////////////////////////////////////////////

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

const appleJuice = fruitProcessor(5, 1);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
//////////////////////////////////////////////////////////////////
//Try function//
function process(drink, food) {
  const lunch = `You have ${drink} drink and ${food} food..`
  return lunch;
}*/

/*const myFood = process(1, 7);
console.log(myFood);

//Declarations VS Expressions

function calcAge1(birthYear){
  const age = 2022 - birthYear;
  return age
}


//Declaration , You can call a Declaration BEFORE you define it///////////////
function calcAge1(birthYear){
  return 2022 - birthYear;
}
const age1 = calcAge1(1989)

console.log(age1);

//Expression , Expressions produce values ///////////////
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
}
const age2 = calcAge2(1989)
console.log(age2);

console.log(age1, age2);*/
// //Arrow Functions

/*const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
}*/

//value auto returns - oneliner functions
/*const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3);*/

//more then 1 liner function - need to return
/*const yearsUntilRetire = (birthYear, firstName) => {
  const age = 2037 - birthYear
  const retirement = 65 - age
  // return retirement
  return `${firstName} retires in ${retirement} years`
}*/

/*console.log(yearsUntilRetire(1991, "Matt"))
console.log(yearsUntilRetire(1981, "Bob"))*/

/////////Functions calling other functions

/*const cutFruit = function (fruit) {
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

Functions Recap///

const calcAge4 = function(birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetire = (birthYear, firstName) => {
  const age = calcAge4(birthYear)
  const retirement = 65 - age

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement
  } else {
    console.log(`${firstName} has already retired`);
    return 99999;
  }
  

  
}
console.log(yearsUntilRetire(1991, "matt"))
console.log(yearsUntilRetire(1950, "matt2"))*/


//CODING CHALLENGE #1 < ---------------------------------------------------------------
/*const calcAverage =(num1, num2, num3) => {
  const scores = num1 + num2 + num3
  const divide = scores / 3
  return divide

}
const scoreDolphins = console.log(calcAverage(44,23,71));
const scoreKoalas = console.log(calcAverage(65,54,49));

const checkWinner = (avgDolphins, avgKoalas) => {
  if(avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins Win ${avgDolphins} vs ${avgKoalas}`)
    
  }else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas Win ${avgKoalas} vs ${avgDolphins}`)
    
  }
  else {
    console.log("no1 wins Today");
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111)

checkWinner(111, 576)*/

//<------------------------------------------------------------------------------------


//Introduction to Arrays <----------------------------------------------------------

// instead of like below, we can put into an array

/*const friend1 = "Matt1"
const friend2 = "Matt2"
const friend3 = "Matt3"

const friends = ["Matt1", "Matt2", "Matt3"]
console.log(friends);

const years1 = new Array(1991,1984,2008,2020);

console.log(friends[0]);
console.log(friends[2]);

gives us how many options are in the array - not 0 based

console.log(friends.length);

length is not 0 based, so we always subtract 1 to get end element in an the length
of an array

Expresssion produces a value 
console.log(friends[friends.length - 1]);

can change / mutate array - change position 2 in the array to another name
friends[2] = "NotMatt";
console.log(friends);
const firstName = "Matt"
const matt = [firstName, "Radich", 2037 - 1989, "Teacher", friends];

console.log(matt);
console.log(matt.length);*/

//Exercise < ------------------------------------------------

/*const calcAge4 = function(birthYear) {
  return 2037 - birthYear
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge4(years[0]);
const age2 = calcAge4(years[1]);
const age3 = calcAge4(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge4(years[0]), calcAge4(years[1]), calcAge4(years[years.length - 1])]
console.log(ages);*/

//Array Methods < ---------------------------------------------------------------------

/*//Add Elements -----------
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
console.log(totals);*/


//<---------------------------------------
//Intro to Objects

/*const matt = {
  firstName: "matt",
  lastName: "radich",
  age: 2022 - 1989,
  job: "student",
  friends: ["matt1", "matt2", "matt3"]
};
console.log(matt);

//Dot VS Bracket Notation --
//Dot use real property name
console.log(matt.lastName);

//Bracket we can put any expression - 
console.log(matt["lastName"]);

const nameKey = "Name";
console.log(matt["first" + nameKey]);
//creates string firstName, retrieve data from object
//Does not work for dot notation
console.log(matt["last" + nameKey]);

//When to use them??---
//When we need to compute property name , use bracket, 
//any others use dot notation

//*/

/*const interestedIn = prompt("What do you want to know about Matt??, Choose between firstName, lastName, age, job, and friends")



if(matt[interestedIn]) {
  console.log(matt[interestedIn]);
}else {
  console.log("Wrong Request, Choose between firstName, lastName, age, job, and friendslocation");
}

matt.location = 'Auckland';
matt["twitter"] = "@mattRadich"
console.log(matt);*/

//Challenge
//"Matt has 3 friends, and his best friend is called Michael"

/*console.log(`${matt.firstName} has ${matt.friends.length} friends, and his 
best friend is called ${matt.friends[0]}`);*/


//Object Methods < ----------------------------------------------------------------------

/*const matt = {
  firstName: "matt",
  lastName: "radich",
  birthYear: 1989,
  job: "student",
  friends: ["matt1", "matt2", "matt3"],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2022 - birthYear
  // }

  // calcAge: function() {
  //   return 2022 - this.birthYear
  // }
  calcLicense: function() {
    if(this.hasDriversLicense == true) {
      return ;
    }else {
      console.log("Does not have a licence");
    }
  },

  calcAge: function() {
    this.age = 2022 - this.birthYear
    return this.age
  },

  getInfo: function() {
    return `${this.firstName} is a ${this.calcAge()} - year old ${matt.job}, 
    and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`
  }
};

console.log(matt.calcAge());

console.log(matt);
console.log(matt.age);
console.log(matt.age);*/

//console.log(matt["calcAge"](1989));

//Challenge
//"Matt is a 33 yearold student. and he has a drivers license"

//console.log(matt.getInfo());
//-- needed to write a mehtod to calculate the string
// console.log(`${matt.firstName} is a ${matt.age} year old ${matt.job},
// and ${matt.calcLicense}`);

//Object Challenge <-----------------------------------------------------
//Compare BMI


/*const mark = {
  firstName: "mark",
  lastName: "miller",
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
}

mark.calcBMI();
console.log(mark);

const john = {
  firstName: "john",
  lastName: "smith",
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height)
    return this.bmi
  }
  
}

john.calcBMI()
console.log(john);

console.log(mark.bmi, john.bmi);

// console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than
// ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) !`);

// ---- Put results into a ifELse

if(mark.bmi > john.bmi) {
  console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than
  ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) !`);
}else if (john.bmi > mark.bmi) {
  console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than
  ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) !`);
}*/

//< Iteration - For Loop-------------------------------------------------------------------------
//For Loop < -------------------------------------------------

// console.log("rep 1");
// console.log("rep 1");
// console.log("rep 1");
// console.log("rep 1");
// console.log("rep 1");
// console.log("rep 1");
// console.log("rep 1");
// console.log("rep 1");
// console.log("rep 1");
// console.log("rep 1");

//instead of the above - run a loop
// for loop - has a counter
//- first part = intital value of counter
//- second part = logical cond, that is evaluated before each iteration of the loop,
//for loop will continue to run aslong as cond is TRUE
//- third part = what you want to do with the result

/*for(let rep = 1; rep <= 10; rep++) {
  console.log("rep 1"); //prints this string 10x
}

for(let rep = 1; rep <= 10; rep++) {
  console.log(`rep ${rep}`); //insert rep variable, now we get a result counting 1 to 10
}
*/

// Looping arrays, Breaking, Continuing < ---------------------------------------

/*const matt = [
  "Matt",
  "Radich",
  2022 - 1989,
  "Student",
  ["Friend1", "Friend2", "Friend3"],
  true
];

const types = [];
// console.log(matt[0]);
// console.log(matt[1]);
// console.log(matt[2]);


for(let i = 0; i < matt.length; i++) {
  // Reading from matt array
  console.log(matt[i], typeof matt[i]);

  //Filling types array
  // types[i] = typeof matt[i];

  //Another way to fill array
  //Add to end of array not beginning
  types.push(typeof matt[i])
}

console.log(types);

//calculate ages and store in new array <----------
const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
  ages.push (2037 - years[i]);
}
console.log(ages);

// Continue and Break
console.log("----ONLY STRINGS----");
for(let i = 0; i < matt.length; i++) {
  if(typeof matt[i] !== "string") continue;

  console.log(matt[i], typeof matt[i]);
}
//Break terminates the whole loop
console.log("----BREAK WITH NUMBER----");
for(let i = 0; i < matt.length; i++) {
  if(typeof matt[i] === "number") break;

  console.log(matt[i], typeof matt[i]);
}*/

//Looping Backwards & Loops in Loops < --------------------------------------

/*const matt = [
  "Matt",
  "Radich",
  2022 - 1989,
  "Student",
  ["Friend1", "Friend2", "Friend3"],
];

// 0, 1, 2, ...., => 4 We did with loop before
//4, 3, 2, ...., => 0 we want to loop backwards now

//Counter - Condition - Counter Update
for(let i = matt.length - 1; i >= 0; i--) {
  console.log(i, matt[i]);
}

//Loop inside Loop < --------------

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting Weight Rep ${rep}`);
  }
}*/

//While Loop <------------------------------------------------------------

/*for (let rep = 1; rep <= 10; rep++) {
  console.log(`FOR LOOP--- Lifting Weight Rep ${rep}`);
}*/

//While Loop , We can only specfiy the condition
//Runs WHILE the condition is true
//Can be any condition, does not have to be related to counter at all

/*let rep = 1;
while (rep <= 10) {
  //console.log(`WHILE LOOP--- Lifting Weight Rep ${rep}`);
  rep++;
}
//math.random -creates a number between 0 & 1 then multiply by 6 - returns a decimal

//math.trunc gives number between 0-5
let dice = Math.trunc(Math.random() * 6) + 1 


while(dice !== 6) {
  console.log(`You rolled a ${dice}!`);
  dice = Math.trunc(Math.random() * 6) + 1 
  if (dice === 6) console.log("!...Loop is about to end...!");
}*/

//Challenge tip calc with array + loop < -----------------------------

// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];

// const totals = []


// for (let i= 0; i < bill.length; i++) {

//   console.log(bill[i]);

//   const calcTip = function(bill) {
//     if (bill >=50 && bill <=300) {
//       return bill *0.15
//     } else {
//       return bill *0.20
//     }
//   }
  
//   tips.push(calcTip(bill[i]))
//   totals.push(bill[i] + tips[i])
  
// }

// console.log(bill, tips, totals);

//Above can also be with function outside of loop<---Like below--------------

const calcTip = function(bill) {
  if (bill >=50 && bill <=300) {
    return bill *0.15
  } else {
    return bill *0.20
}
}
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];

const totals = []

for (let i = 0; i < bill.length; i++) {
  const tip = calcTip(bill[i]);
  tips.push(tip)
  totals.push(tip+bill[i])
}

console.log(bill, tips, totals);



//Bonus Challenge #4 <----------------
//Get sum of all numbers in BILL array
//Get Average number
// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// let sum = 0;

// for (let i=0; i < bill.length; i++) {
//   sum += bill[i]
// }
// console.log(sum); //2323 total - Works- gives us total of "bill" Array

// const avg = sum / bill.length
// console.log(avg); //232.3 = the average of bill array. total / elements in the array

//<-------Another solution using a Function for bonusChallenge--------------------

const calcAverage = function(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {//arr = the arr we are recieveing in the parameter
    //sum = sum + arr[i]
    sum += arr[i]
  }
  return sum / arr.length
}
console.log(calcAverage([2,3,7]))//this is the array we are looping over//Works - gives us 11 in console
// console.log(calcAverage(totals))
console.log(calcAverage(totals));






