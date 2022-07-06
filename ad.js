// let c=require("readline-sync");
// let loop_time=c.question("enter loop time: ");
 
// var maxi=0;
// let lis=[ ]
// for (let i=1;i<=loop_time;i++) {
//    let num=c.question("enter number: ")
//    lis.append(num)
// }
// var maxi=lis[0];
// for (let j=0){   
//    if (maxi[maxi=lis[j]]){
//      console.log(maxi); 
//    }
// }
 
let n=require("readline-sync");
let choose_ascii=(n.question("enter number: "));
var ascii_char=97+choose_ascii
for (var i=97;i<=ascii_char;i++) {
       console.log(chr(i),end="");
}