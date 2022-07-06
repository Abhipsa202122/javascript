const numbers =  [5,4,1] ;
let ans = 0; //Initialize ans with some value
if(numbers.length > 0) ans = numbers[0]; //If array has length >0, use the first value. This will let you handle single length arrays
for(let i = 1; i < numbers.length;i++){
  ans -= numbers[i]; //subtract for every other element
}
console.log(ans);
