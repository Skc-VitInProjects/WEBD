//Question 1
let arr = [1 ,2 , 3, 4 , 5 , 6 , 3 ,2];
let num =2 ;
for(let i = 0 ; i < arr.length ; i++){
     if(arr[i] == num){
          arr.splice(i,1); //splice
     }
}
console.log("New array");
console.log(arr);

//Question 2
let number1 = 287152;
let count=0 ;
let copy = number1;
while(number1 > 0){
    count++;
    number1 = Math.floor(number1/10);
}
console.log("total digits are",count);

//Question 3
let number = 287152;
let oriNum = number;
let sum = 0 ;
while(number > 0){
   let last = number%10;
   sum += last;
   number = Math.floor(number/10);
}

console.log("The sum is :",sum);

//Question 4
let n = prompt("ENTER THE NUMBER");
if(n==0){
     console.log("the factorial is 1")
}
let prod = 1;
while(n >=1){
     prod = prod*(n);
     n--;
}
console.log("the factorial is",prod);

//Question 5
let arr1 = [5 , 7 , 9 , 45 , 67 , 22, 99];
let lar = 0 ;
for(let i =0 ; i < arr1.length ; i++){
     if(arr1[i] > lar){
          lar = arr1[i];
     }
}
console.log("largest is",lar);