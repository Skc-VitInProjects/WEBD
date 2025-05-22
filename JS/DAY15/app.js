console.log("Hello World!");
console.log("first javascript code");

let a= 5;
let b= 9;
let sum = a+b;
console.log("sum is :",sum);

//template literals 
let penPrice = 10;
let eraserPrice = 5;
console.log("The total price is :",penPrice+eraserPrice);
console.log(`The total price in ruppes ${penPrice+eraserPrice}`);

//operators in JS
//Arithmetic Operators(+ , - , * , / , % , **)
let a1= 10;
let b1 = 5;
console.log(a1+b1);

//Unary OperTORS(++ , --)
console.log(a1++);
console.log(a1);

//Assignment Operators(= , += , -= , /= , *=)
let x = ++a1;
console.log(`the value of x is : ${x}`);

//Comparison operators ( > , < , >= < , <= , == , !=)
let age = 23 ;
console.log(age > 18);
console.log(age != 18);

let n = 5;
let str = '5';
console.log(n==str);  
console.log(n===str);

//conditional statements
//if-else , nested if-else , switch

if(age >=18){
     console.log("ready to drive");
}else if(age >5 && age <=12){
     console.log("ride bicycle");
}else{
     console.log("learn to drive")
}

let color = "red";

//traffc light system
if(color === "red"){
     console.log("stop !");
}
if(color === "green"){   
     console.log("go !");
}
if(color === "yellow"){
     console.log("ready !")
}

//practice questions
let size = "M";
if(size === "XL"){
     console.log("price is Rs. 250");
}
else if(size === "L"){
     console.log("price is 200");
}
else if(size === "M"){
     console.log("price is Rs. 100")
}
else{
     console.log("price is Rs. 50")
}

//nested if -else 
let marks = 30 ;

if (marks >=33){
     console.log("Pass")
     if(marks >= 80){
          console.log("S");
     }else{
          console.log("A")
     }
}else{
     console.log("Fail")
     console.log("Better luck next time !")
} 

// practice question
// question 1
let str1 = "ant";

if(str1.length >3 && str1[0]==='a'){
     console.log("the string is a good string ");
}
else{
     console.log("not a good string")
}

//question 2
let num = 12 ;

if ((num%3 === 0 ) && (num+1 == 15) || (num-1 == 11)){
     console.log("safe");
     
}else{
     console.log("unsafe");
}

// truthy or falsy values
if(true){
     console.log("true value");
}else{
     console.log("false value");
}

if(""){   //if will only run when condition is true
     console.log("i am true")
}
else{
     console.log("i am false");
}

//switch
let gender = "female";

switch(gender){
     case "male": console.log("Mard !!");
     break;

     case "female": console.log("Aurat !!");
     break;

     case "LGBTQ+" : console.log("Hizda !!");
     break;   
     
     default: console.log("Bhagwan Bharose !!");
}

//practice questions
let day = 10 ;

switch(day){
     case 1 : console.log("Monday");
     break;

     case 2 : console.log("Tuesday");
     break;

     case 3 : console.log("Wednesdy");
     break;

     case 4 : console.log("Thursday");
     break;

     case 5 : console.log("Friday");
     break ;

     case 6 : console.log("Saturday");
     break;

     case 7 : console.log("Sunday");
     break;

     default : console.log("Sunday , Monday dubara yaad kro ");
}

//alert and prompt
alert ("Something is cooking , learning how to use alerts");
console.error("error...... aa gya skand")
console.warn("warning ... aa gyi skand ")

let name4 = prompt("Enter your name ");
console.log (name4);
 

 //.....Assignment..........

 //question 1
 let num1 = 89;
 
 if(num1 % 10 == 0){
     console.log("Good");
 }
 else{
     console.log("Bad");
 }


 //question 2
 let user = prompt("User name ");
 let userAge = prompt("enter age");

let msg = `${user} is ${userAge} years old`;
alert(msg);

//question 3
let quarter = 1;

switch(quarter){
     case 1 : console.log("January , February , March");
     break;

     case 2 : console.log("April , May , June");
     break;

     case 3 : console.log("July , August , September");
     break;

     case 4 : console.log("October , November , December");
     break;

     default: console.log("wrong details ");
}

//question 4
let str2 = "Amanda";

if(str2[0] == 'A' || str[2] == 'a' && str2.length > 5){
     console.log("Golden string");
}else{
     console.log("Not a golden string");
}

//question 5
let n1 = 7 ;
let n2 = 8 ;
let n3 = 12 ;

if(n1 > n2 && n1 > n3){
     console.log(`${n1} is greatest`);
}
else if(n2 > n1 && n2 > n3){
     console.log(`${n2} is the greatest`);
}
else{
     console.log(`${n3} is the greatest`);
}

//question 6
let d1 = 325 ;
let d2 = 47852 ;

if(d1%10 == d2%10){
   console.log("same last digit");
}else{
     console.log("not same last digit");
}

