// Question 1
// Create an array named fruits that contains the following string 
// elements: "apple", "banana", "mango", "orange".

let fruits: string[]=["apple","banana","mango","orange"];
console.log("fruits" , fruits);

//Question 2
// Declare an array named numbers that can contain only number 
// elements and initialize it with the values 10, 20, 30, and 40

let number: string[]=[`10, 20, 30, 40,`];
console.log("number" , number);

// Question 3
// Access the third element of the fruits array and assign it to a 
// variable named thirdFruit.

let fruits1: string[]=["apple" , "banana" , "mango" , "orange"];
console.log(fruits1[3]); 

// Question 4
// Change the second element of the numbers array to 25.

let numbers1: number[]=[10 , 20 , 30 , 40 ,];
numbers1[2] =25; /// change the second element
console.log(numbers1[2]);



// Question 5
// Add the element "grape" to the end of the fruits array using the 
// method.

let fruits2 = ["apple", "banana", "mango" ,"orange"];
fruits2.push("grape"); // add the element to the and of last
 console.log(fruits2); 



// Question 6
// Remove the last element from the fruits array using the 
// method and assign it to a variable named lastFruit.

let fruit3:string[]=["apple", "banana", "mango" ,"orange"];
fruit3.pop(); // remove the last element
console.log( "fruit3" , fruit3);


// Question 7
// Remove the first element from the fruits array using the 
// method and assign it to a variable named firstFruit.

let fruit4:string[]=["apple", "banana" , " mango", "orange"];
fruit4.shift(); // remove the first element
console.log("fruit4" , fruit4);


//Question 8
//Add the element "kiwi" to the beginning of the fruits array 
//using the method.

let fruit5:string[]=["apple", "banana", "mango", "orange"];
fruit5.unshift("kiwi"); //add the element "kiwi" to the beginning
console.log("fruit5" , fruit5);


// Question 9
// Remove 2 elements from the fruits array starting from index 1 
// using the method.

let fruit6:string[]=["apple", "banana", "mango", "orange"]; 
fruit6.splice(1,2)
console.log("friut6" , fruit6);


// Question 10
// Insert the elements "pineapple" and "pear" at index 2 of the 
// fruits array using the method.

let fruit7:string[]=["apple", "banana", "mango", "orange"];
fruit7.splice( 2 , 0 , "pineapple", "pear");
console.log("fruit7" , fruit7);


// Question 11
// Create a new array named citrusFruits that contains the first 
// two elements of the fruits array using the method. 

let fruit:string[]=["apple" ,"banana" , "pineapple" , "pear" , "mango" , "orange"];
 let citrusfruits: string[]=fruit.slice(0, 2);
console.log("citrusfruits" , citrusfruits);


// Question 12
// Create a new array named lastTwoFruits that contains the last 
// two elements of the fruits array using the method.

let fruit9:string[]=["apple" , "banana" , "pear" , "mango" , "orange"];
 let lastTwofruit9:string[]=fruit9.slice(-2);
console.log("lastTwofruit9" , lastTwofruit9);



