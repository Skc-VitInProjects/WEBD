// function definition
function hello(){
     console.log("hello");
}

//function calling
hello();

//Q.1
function printPoem(){
     console.log("Only the brave , shall inherit earth");
     console.log("to be continued ....")
}

printPoem();

//Q.2
function dice(){
     let rd = Math.floor(Math.random()*6)+1;
     console.log(`Dice rolled ,the number is ${rd}`);
}

dice();

// function with arguments
function CheckEvenOrOdd(num){
     if(num%2 == 0){
          console.log("Even");
     }else{
          console.log("Odd");
     }
}

CheckEvenOrOdd(6);
CheckEvenOrOdd(13);

function sum(num1, num2){
     console.log(`the result is : ${num1+num2}`);
}

sum(3,8);
sum(12,9);

//Q. 3
function average (num1 , num2 , num3){
     let avg = (num1+num2+num3)/3;
     console.log(`the average is : ${avg}`);
}

average(3,6,4);
average(4,5,3);

//Q. 4
function mulTab (n){
     for(let i= 1 ; i<=10 ; i++){
        console.log(`${n} X ${i} = ${n*i}`);
     }
}

mulTab(15);

//return keyword
function sum(a, b){
     return a+b;
}

let result1 = sum(1,6);
console.log(`the sum is ${result1}`);

let result2 = sum(sum(1,2),7);
console.log(`the sum is ${result2}`);

function isAdult(age){
     if(age >=18){
          return "adult";
     }else{
          return "not adult";
     }
}

console.log(`the person is ${isAdult(12)}`);
console.log(`the person is ${isAdult(28)}`);

//Q.5
function calSum (n){
     let sum = 0;
     for(let i = 1 ; i <= n ; i++){
         sum += i ;
     }
     return sum ;
}

let result = calSum(7);
console.log(`the sum of numbers from 1 to n is : ${result}`);

//Q.6
function concatStr (arr){
    let str = "";
    for(let i = 0 ; i < arr.length ; i++){
        str+=arr[i];
    }
    return str;
}

let arr = ["skand","kumar","choubey"];
let finalStr = concatStr(arr);
console.log(finalStr);

//Scope
let sum1 = 54; //global Scope

function calSum(a , b){
    let sum1 = a+b;  //function Scope
    console.log(sum1);
}

calSum(3,2);   //5 
console.log(sum1);  //54 

//Q.7 --> innerGreet function run nhi hoga , because we have not called it
let greet = "hello"; //global Scope
function changeGreet(){
     let greet = "pranaam"; //function Scope
     console.log(greet);
     function innerGreet(){
          console.log(greet);
     }
}

console.log(greet);  //hello
changeGreet();  //pranaam

//Function Expressions
let sum2 = function(a,b){
     return a+b;
}
let res = sum2(2,6);
console.log(res);

sum2 = function(a,b){
     console.log(a+b);
}
sum2(3,6);

//Higher order functions
function multipleGreet(func,n){
     for(let i=1; i<=n ; i++){
          func();
     }
}

let greet1 =function(){   
   console.log("Hello");
}

multipleGreet(greet1,3);    //calling the function

//Higher order functions -- returns a function
function oddEvenTest(request){
     if(request == "odd"){
          let odd = function(n){
               console.log(!(n%2 == 0));
          }

          return odd ;
     }else if(request == "even"){
          let even = function(n){
               console.log(n%2 == 0);
          }

          return even;
     }else{
          console.log("wrong request");
     } 
}

let func1 = oddEvenTest("odd");
func1(5);

func1 = oddEvenTest("even");
func1(4);

//Methods --> defining functions for objects 
const calculator = {
     sum : function(a,b){
          return a+b;
     },
     sub : function(a,b){
          return a-b;
     },
     mul : function(a,b){
          return a*b;
     },
     div : function(a,b){
          return a/b;
     }
};

console.log(calculator.sum(4,5));
console.log(calculator.div(3,2));

//same way of writing above method code
const calculator1 = {
     add(a,b){
          return a+b;
     },
     sub(a,b){
          return a-b;
     }
};

console.log(calculator1.add(3,7));
console.log(calculator1.sub(3,9));
