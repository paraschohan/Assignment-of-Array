// Question 1
// Create an array named fruits that contains the following string 
// elements: "apple", "banana", "mango", "orange".
var fruits = ["apple", "banana", "mango", "orange"];
console.log("fruits", fruits);
//Question 2
// Declare an array named numbers that can contain only number 
// elements and initialize it with the values 10, 20, 30, and 40
var number = ["10, 20, 30, 40,"];
console.log("number", number);
// Question 3
// Access the third element of the fruits array and assign it to a 
// variable named thirdFruit.
var fruits1 = ["apple", "banana", "mango", "orange"];
console.log(fruits1[3]);
// Question 4
// Change the second element of the numbers array to 25.
var numbers1 = [10, 20, 30, 40,];
numbers1[2] = 25; /// change the second element
console.log(numbers1[2]);
// Question 5
// Add the element "grape" to the end of the fruits array using the 
// method.
var fruits2 = ["apple", "banana", "mango", "orange"];
fruits2.push("grape"); // add the element to the and of last
console.log(fruits2);
// Question 6
// Remove the last element from the fruits array using the 
// method and assign it to a variable named lastFruit.
var fruit3 = ["apple", "banana", "mango", "orange"];
fruit3.pop(); // remove the last element
console.log("fruit3", fruit3);
// Question 7
// Remove the first element from the fruits array using the 
// method and assign it to a variable named firstFruit.
var fruit4 = ["apple", "banana", " mango", "orange"];
fruit4.shift(); // remove the first element
console.log("fruit4", fruit4);
//Question 8
//Add the element "kiwi" to the beginning of the fruits array 
//using the method.
var fruit5 = ["apple", "banana", "mango", "orange"];
fruit5.unshift("kiwi"); //add the element "kiwi" to the beginning
console.log("fruit5", fruit5);
// Question 9
// Remove 2 elements from the fruits array starting from index 1 
// using the method.
var fruit6 = ["apple", "banana", "mango", "orange"];
fruit6.splice(1, 2);
console.log("friut6", fruit6);
// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the 
// fruits array using the method.
var fruit7 = ["apple", "banana", "mango", "orange"];
fruit7.splice(2, 0, "pineapple", "pear");
console.log("fruit7", fruit7);
// Question 11
// Create a new array named citrusFruits that contains the first 
// two elements of the fruits array using the method. 
var fruit = ["apple", "banana", "pineapple", "pear", "mango", "orange"];
var citrusfruits = fruit.slice(0, 2);
console.log("citrusfruits");
// Question 12
// Create a new array named lastTwoFruits that contains the last 
// two elements of the fruits array using the method.
var fruit9 = ["apple", "banana", "pear", "mango", "orange"];
var lastTwofruit9 = fruit9.slice(-2);
console.log("lastTwofruit9");
