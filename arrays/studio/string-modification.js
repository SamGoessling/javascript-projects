const input = require('readline-sync');
let str = "LaunchCode";

/*2) Modify your code to accept user input. Query the user to enter the number of letters 
that will be relocated.*/
let num = parseInt(input.question('Enter the number of letters to be relocated: '));
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modifiedStr = str.slice(3) + str.slice(0, 3);

//3) Add validation to your code to deal with user inputs that are longer than the word. 
//In such cases, default to moving 3 characters. 
let errorMsg = '';
if (isNaN(num) || num > str.length) {
    errorMsg = `(Invalid input. Defaulting to moving 3 chars.)`;
    num = 3;
}
//Use a template literal to print the original and modified string in a descriptive phrase.
//Also, the template literal should note the error.
console.log(`By moving the first ${num} characters from "${str}" to its end, we get "${modifiedStr}". ${errorMsg}`);