// creating an account
// withdrawing money
// depositing money
// checking balance

function createAnAcc(n) {
    return {
        name: n,
        balance: 10000

    }
}
let acc1 = createAnAcc("John");
console.log(acc1);

function withdrawMoney(acc, amount) {
    if (acc.balance < amount) {
        return "Insufficient funds";
    } else {
        acc.balance -= amount;
        console.log(`The withdrawl amount is ${acc.balance}`);

    }
}
withdrawMoney(acc1, 1000);



function depositMoney(acc, amount) {
    acc.balance += amount;
    console.log(`The amount to deposit is ${acc.balance}`);
    // return acc.balance;
}
depositMoney(acc1, 500);

function checkBalance(acc) {
    // return acc.balance;
    console.log(`The amount available in your account is -> ${acc.balance}`);

}

checkBalance(acc1);



// Write a function calculateDiscount that takes two 
// parameters: price and discount (with a default value of 10). The function should 
// return the final price after applying the discount. 

function calculateDiscount(price, discount = 10){
    return price - (price * discount / 100);

}

console.log(calculateDiscount(1000));

// ----------------------------------------------------------------------------------------------------------------//
// Create a function mergeArrays that takes two arrays as parameters and returns a new 
// array that combines both arrays using the spread operator. 

function mergeArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// ----------------------------------------------------------------------------------------------------------------//

// Write a function logArguments that takes any number of arguments and logs them to 
// the console. Use rest parameters to collect the arguments. 


function logArguments(...args){
    console.log(args);
}

logArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ----------------------------------------------------------------------------------------------------------------//

// Create a function createMessage that takes a default message and an indefinite 
// number of names. The function should return an array of personalized messages for 
// each name. 

function createMessage(message, ...names){
    return names.map(name => `${message} ${name}`);          //OR
    // for(let i = 0; i < names.length; i++){
    //     console.log(`${message} ${names[i]}`);
    // }
}

console.log(createMessage('Hello', 'Aditya', 'Raj', 'Rahul', 'Rohit'));



// ----------------------------------------------------------------------------------------------------------------//

//Define a function sum that takes three numbers as parameters and returns their sum. Use 
// the spread operator to call this function with an array of numbers.

function sum(a, b, c){
    return a + b + c;
}

const numbers = [1, 2, 3];
console.log(`the sum of the following numbers is - ,${sum(...numbers)}`);

// ----------------------------------------------------------------------------------------------------------------//

// Write a function createUserProfile that takes three 
// parameters: username, age (defaulting to 25), and country (defaulting to "Unknown"). 
// Return an object with these properties. 


function createUserProfile(username, age = 25, country = "Unknown"){
    return {
        username,
        age,
        country
    }

}

console.log(createUserProfile("Aditya", 20, "India"));

// what is call back function?
// A callback function is a function that is passed as an argument to another function.
// When the function is executed, the callback function is called within the function.
// This allows the function to perform some action on the data passed to it.
// Callback functions are commonly used in asynchronous programming to handle the results of asynchronous operations, such as fetching data from a server or reading a file.


// What is a map array?
// The map() method creates a new array by calling a function on each element of the original array.
// The map() method takes a callback function as an argument and applies it to each element of the array.
// The callback function can take up to three arguments: the current element, the index of the current element, and the array being mapped.
// The map() method returns a new array with the results of the callback function applied to each element of the original array.
//example:-
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((number) => number * number);
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]


const numberss = [1,2,3, 4];
const doubles = numberss.map(num => num * 2);
console.log(doubles);

//what is innerHTML?
// The innerHTML property sets or returns the HTML content (inner HTML) of an element.

