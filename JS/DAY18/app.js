// Objects Literals 
let delhi = {
     population : "23lakh",
     area : "23sqkm"
};
console.log(delhi);
console.log(typeof(delhi));

const student = {
     name1 : "Skand",
     age : 22,
     marks : 94,
     city : "Gorakhpur"
};
console.log(student);
console.log(typeof(student));

const item ={
     price: 100.99,
     discount:50,
     colors : ["red" , "pink"]
};
console.log(item);

//Thread / twitter post
const post = {
     username : "skand@123",
     content : "This is my #post",
     likes: 150,
     reposts: 5,
     tags: ["@apnacollege" , "@delta"]
}
console.log(post);

// get values
console.log(post.content);
console.log(post["reposts"]);

const obj = {
     1: "a",
     2: "b",
     true: "c",
     null: "d",
     undefined: "e"
};
console.log(obj);

// add_update values --> add , update , delete
const info= {
     name: "skc",
     age:23,
     marks: 95,
     city: "Gorakhpur"
};
console.log(info);


info.city = "Mumbai";
console.log(info);

info.job = "freelancer";
console.log(info);

info.marks = "A";
console.log(info);

delete info.marks;
console.log(info);

//object of objects
const classInfo = {
     skand : {
          age: 22,
          city : "Gorakhpur"
     },
     shivansh : {
          age: 22,
          city: "Kannauj"
     },
     ved : {
          age : 23,
          city : "Nagpur"
     }
};
console.log(classInfo);

//Array of objects
const classInfo1 = [
     {
          name: "Skand",
          age: 23,
          grades : "A"
     },  
     {
          name: "Satyam",
          age : 21,
          grades : "A"
     },  
     {
          name : "Ravi",
          age : 19,
          grades : "O"
     }
];
console.log(classInfo1);

//Random Integers
let num = Math.random();   //step 1
num = num * 10;    //step 2
num = Math.floor(num);    //step 3
num += 1;    //step 4
console.log(num);

let randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);

//Questions
//Q.1
let rd1 = Math.floor(Math.random()*100)+1;
console.log(rd1);
//Q.2
let rd2 = Math.floor(Math.random()*5)+1;
console.log(rd2);

let rd3 = Math.floor(Math.random()*5)+20;
console.log(rd3);

//Guessing game 
let n = prompt("Enter the max number");
let guess = prompt("Guess it !!");
const rd = Math.floor(Math.random()*n)+1;

let trial = 1;
const maxTry = 5;
while(trial <= maxTry){
     
     if(guess == "quit"){
          console.log("Ending the game here !");
          console.log("Better luck next time")
          break;
     }else if(guess < rd ){ 
               console.log(trial,"try","Enter number greater than",guess);
               if(trial < maxTry){
                    guess = prompt("guess Again !");
               }
     }else if(guess > rd ){
             console.log(trial,"try","Enter num less than",guess);
             if(trial < maxTry){
               guess = prompt("guess Again !");
             }
     }else if(guess == rd){
              console.log(trial,"try","Victory !!" , "the number was",rd);
              break;
     }
     trial++;
}

if(trial > maxTry){
     console.log("Sorry turns over !! Try next time ");
     console.log("The correct guess was",rd );
}
