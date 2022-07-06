var n=require("readline-sync");
var a=n.questionInt("enter no");
var i=0;
var max=0;
var min=0;
while (i<=a){
    if (a[i]<min){
        min=a[i]
        console.log(min);
    }    
    else if (a[i]>max){
        max=a[i]
        console.log(max);
    i++;
    }     
}

