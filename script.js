// console.log("Hello world");

// var person = "John";
// console.log(person);

// person = "Nick";
// console.log(person);

// var first-Name = "Bob";

// var LastName = "Doe";

// let age = 30;

// console.log(age);

// age = 35;

// console.log(age);

// const city = "London";

// console.log(city);

// const str = "John is a developer";
// console.log(str);
// console.log(typeof str);

// const num = "27.23";
// console.log(num);
// console.log(typeof num);

// const num1 = 10;
// const num2 = 20;
// const bool = true;
// console.log(typeof bool);

// let a;
// console.log(a);
// console.log(typeof a);

// const b = null;
// console.log(b);

// const a = 5 / 5;
// console.log(a);

// const b = (5 + 5) * 5;
// console.log(b);

// const num1 = 10;
// const num2 = "10";

// const a = 10 * "20";
// console.log(a);

// const b = "Hello " + "there";
// console.log(b);

// const c = "a" + 10 + 15;
// console.log(c);

// const kid = "Alexis";
// const gender = "Female";

// if (gender == "Male") {
//   console.log(kid + " is my son");
// } else {
//   console.log(kid + " is my daughter");
// }

// const prof = "engineer";

// if (prof === "composer") {
//   console.log(prof + " teaches students");
// } else if (prof === "composer") {
//   console.log(prof + " creates music");
// } else {
//   console.log("Professions do not match");
// }

// if (!5 === 5) {
//   console.log("Condition is true");
// } else {
//   console.log("Condition is false");
// }

// function test() {
//   console.log("Hello there");
// }

// test();

// function passExam(name, score) {
//   const passUni = 71;
//   const passColl = 51;

//   if (score >= passUni) {
//     console.log(name + " enrolled at the University with " + score + " points");
//   } else if (score >= passColl) {
//     console.log(name + " enrolled at the college with " + score + " points");
//   } else {
//     console.log(name + " failed");
//   }
// }

// function calcScore(quizScore, essayScore) {
//   const score = quizScore + essayScore;

//   return score;
// }

// passExam("Nick", 85);
// passExam("Mary", 75);
// passExam("John", calcScore(29, 37));

// const multiply = () => 10 * 10;

// console.log(multiply());

// const arr = ["Ann", "Bob", "John", 10, true, [1, 2, 3]];
// console.log(arr);
// console.log(arr[5][1]);

// const colors = ["white", "black", "red"];
// colors[1] = "green";

// colors.push("blue");

// colors.pop();

// colors.shift();

// colors.unshift("purple");

// console.log(colors);

// console.log(colors.indexOf("yellow"));

// const names = ["Alex", "Mary", "Nick", "Jane"];

// for (let i = 0; i < names.length; i++) {
//   console.log("The name is " + names[i]);
// }

// console.log("----------------------");

// names.forEach(name => {
//   console.log("The name is " + name);
// });

// const numbers = [1, 2, 3, 4, 5];

// const newArr = [];

// for (let i = 0; i < numbers.length; i++) {
//   newArr.push(numbers[i] * 10);
// }

// console.log(numbers);
// console.log(newArr);

// console.log("---------------------------");

// const mapArr = numbers.map(number => {
//   return number * 10;
// });

// console.log(numbers);
// console.log(mapArr);

// const persons = [
//   { firstname: "John", lastname: "Smith" },
//   { firstname: "Bob", lastname: "Brown" },
//   { firstname: "Nick", lastname: "Doe" }
// ];

// const getFirstNames = persons.map(person => {
//   return person.firstname;
// });

// console.log(persons);
// console.log(getFirstNames);

// const persons = [
//   { name: "Mary", gender: "female" },
//   { name: "John", gender: "male" },
//   { name: "jane", gender: "female" },
//   { name: "Bob", gender: "male" }
// ];

// const males = [];

// for (let i = 0; i < persons.length; i++) {
//   if (persons[i].gender === "male") {
//     males.push(persons[i]);
//     break;
//   }
// }

// console.log(persons);
// console.log(males);

// console.log("--------------------------------");

// const females = persons.find(person => {
//   return person.gender === "female";
// });

// console.log(persons);
// console.log(females);
// const person = {
//   firstname: "John",
//   lastname: "Smith",
//   age: 27,
//   myFunc(par) {
//     console.log(
//       par.daughterName +
//         " is a daughter of " +
//         par.fatherName +
//         " and she is " +
//         par.daughterAge +
//         " years old"
//     );
//   }
// };

// person.married = true;

// person["city"] = "New York";

// person.firstname = "Bob";

// person.daughter = {
//   name: "Ann",
//   age: 5
// };

// person.myFunc({ daughterName: "Jessy", fatherName: "Michael", daughterAge: 5 });

// console.log(person);
// console.log(person.firstname);
// console.log(person.daughter.name);

// const arr = ["John", "Nick", "Bob", "Michael", "Merry"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "Bob") {
//     console.log(arr[i] + " is my brother");
//     continue;
//   }
//   console.log(arr[i]);
// }

// while (i <= 10) {
//   i++;
//   console.log(i);
// }

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i > 10);
// const name = "John";
// const age = 30;
// const prof = "developer";

// function personES5() {
//   console.log(
//     "My name is " + name + ", I am " + age + " years old and I am a " + prof
//   );
// }

// personES5();

// const personES6 = () => {
//   console.log(`My name is ${name}, I am ${age} years old and I am a ${prof}`);
// };

// personES6();

// const person = (
//   firstname = "John",
//   lastname = "Smith",
//   profession = "developer"
// ) => {
//   console.log(`I am ${firstname} ${lastname} and I am a ${profession}`);
// };

// person("Nick", "Doe", "designer");

// const numbers1 = [1, 2, 3, 4];
// const numbers2 = [5, 6, 7, 8];

// let numbers3 = [];

// numbers3 = numbers3.concat(numbers1);

// numbers3.push(10);

// numbers3 = numbers3.concat(numbers2);

// console.log(numbers3);

// const numbers4 = [10, ...numbers1, 20, ...numbers2, 30];

// console.log(numbers4);

// let names = ["Jane", "Bob", "Alex", "Ann"];

// let namesCopy = [...names];

// names.push("John");

// console.log(names);
// console.log(namesCopy);

// const a = function(x, y, ...rest) {
//   console.log(rest);
//   console.log(x + y + rest[0] + rest[1]);
// };

// a(10, 20, 30, 40);

// const family = (lastname, ...names) => {
//   names.forEach(name => {
//     console.log(`${name} ${lastname}`);
//   });
// };

// family("Smith", "Nick", "Jane", "Bob", "Jessica");

// const arr = [10, 20, 30, 40, 50, 60];

// const ten = arr[0];
// const twenty = arr[1];

// const [ten, twenty, ...items] = arr;

// console.log(ten, twenty, ...items);

// const person = {
//   firstname: "John",
//   lastname: "Smith",
//   age: 30
// };

// // const firstname = person.firstname;
// // const lastname = person.lastname;

// // const { age, firstname, lastname } = person;

// // console.log(age, firstname, lastname);

// const aboutMe = ({ firstname, lastname, age }) => {
//   console.log(`I am ${firstname} ${lastname} and I am ${age} years old`);
// };

// aboutMe(person);
