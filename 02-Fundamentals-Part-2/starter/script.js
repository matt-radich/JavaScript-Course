function logger() {
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
}

const myFood = process(1, 7);
console.log(myFood);