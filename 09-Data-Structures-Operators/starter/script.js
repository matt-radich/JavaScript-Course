'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  //function to order food, return 2 values
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//Destructing Arrays
const arr = [2,3,4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x,y,z] = arr
console.log(x,y,z);//console shows 2 3 4
console.log(arr);//origional array is not effected, we jsut unpack it
//

//taking data from restaurant , access categories array, destructure && display
const [first, second] = restaurant.categories
console.log(first,second);

//skip second with empty value, only displays first && third
const [first1, ,third1] = restaurant.categories
console.log(first1,third1);

//lets switch main & secondary categories
let [main, secondary] = restaurant.categories
console.log(main, secondary);

//Switching variables
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary);

//instead of above we destructure

[main, secondary] = [secondary, main]
console.log(main, secondary);

//Recieve 2 return values from a function
//number [2] from the starter menu &&
//number [0] from the main menu ==
//Garlic Bread && Pizza
const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse);

//Nested Array destructure
const nested = [2,4, [5,6]];
// const [i, ,j] = nested
// console.log(i,j); returns [5,6]

const [i, , [j, k]] = nested
console.log(i, j ,k); //returns 2, 5 ,6

//Default Values
const [p, q ,r] = [8, 9]
console.log(p, q, r); //returns 8, 9, undefined

const [m = 1, n = 1, v = 1] = [8, 9]
console.log(m, n , v); //returns 8, 9 , 1
