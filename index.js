// Iteration 1: Names and Input
// 1.1 Create a variable hacker1 with the driver's name.
let hacker1= "jose Luis"
// 1.2 Print "The driver's name is XXXX".
console.log("The Driver´s name is "+ hacker1)
// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "garmin"
// 1.4 Print "The navigator's name is YYYY".

console.log("The navigator's name is " + hacker2)


// Iteration 2: Conditionals

// 2.1. Depending on which name [is longer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length), print:
//   <br>
//     - `The driver has the longest name, it has XX characters.` or <br>
//     - `It seems that the navigator has the longest name, it has XX characters.` or <br>
//     - `Wow, you both have equally long names, XX characters!`.

let fulano= hacker1.length;
let mengano= hacker2.length;

if(fulano > mengano){
    console.log(`The driver has the longest name, it has ${fulano} characters.`)

} else if(fulano > mengano) {
       console.log(`It seems that the navigator has the longest name, it has ${mengano} characters.`)
} else {
    console.log(`Wow, you both have equally long names, XX characters!`)
}


// Iteration 3: Loops
