// Sample Input: if i give input 2 it needs to give characters a and b because 95 is the ascii character of a, and 96 is the ascii character of b. Loop needs to run from 95 to those many times that user entered.
// Input 3
// Output: a b c
let n=require("readline-sync");
let choose_ascii=(n.question("enter number: "));
var ascii_char=95+choose_ascii
for (var i=95;i<=ascii_char;i++){
    console.log(chr(i),end="")
}

