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
// 3.1 Print the characters of the driver's name, separated by space, and [in capital letters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase), i.e., `"J O H N"`.

let patata = hacker1.toUpperCase().split('').join(" ");

let str="";
for ( i = 0; i < hacker1.length; i++) {
  str += hacker1[i].toUpperCase()+ " "
}


console.log(patata);
console.log(str);



//   3.2 Print all the characters of the navigator's name in reverse order, i.e., `"nhoJ"`.



let str2="";

for (i = hacker2.length -1 ; i >= 0 ; i--){
    str2 += hacker2[i].toUpperCase();
}

console.log(str2)


//   3.3 Depending on the [lexicographic order](https://en.wikipedia.org/wiki/Lexicographical_order) of the strings, print: <br>

let tomate= hacker1.localeCompare(hacker2)

if(tomate < 0){
    console.log(`The driver's name goes first.`)
} else if (tomate > 0){
    console.log(`Yo, the navigator goes first, definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

// - `The driver's name goes first.` <br>
// - `Yo, the navigator goes first, definitely.` <br>
// - `What?! You both have the same name?`

