/* Part 1: Basic Functions*/

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * (5 / 9);
}

console.log(convertToCelsius(100)); 

/* Part 2: Advanced Functions*/

function createGreeting(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(createGreeting("Chioma", 32)); 

/* Part 3: Basic Array Methods*/

const numbers = [1, 2, 3, 4, 5];

numbers.push(6);

numbers.shift();

numbers.unshift(0);

const joinedNumbers = numbers.join("-");

console.log(joinedNumbers); 

/* Part 4: Advanced Array Methods (Map and Filter)*/

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); 

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 

/* Part 5: Loop (Bonus)*/

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result = sumArray([1, 2, 3, 4, 5]);

console.log(result); 