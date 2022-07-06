var n=require("readline-sync");
const num=n.question("enter number: ");
const i=1;
// s=0
while (i<=num){
    var c=0;
    var j=1;
    while (j<i){
        if (i%j==0){
           c=c+j
        j+=1
        }
    }
    if (c==i){
       // l.append(i)
       // s+=i
       // print(l)
       print(i)
    i+=1
    }   

}




