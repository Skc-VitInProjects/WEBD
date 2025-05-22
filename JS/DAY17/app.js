// for loop
for (let i = 0; i < 10; i++) {
     console.log("I love you :", i, "times");
}

for (let j = 1; j <= 15; j++) {
     if (j % 2 != 0) {
          console.log(j, " is odd");
     } else {
          console.log(`${j} is even`);
     }
}

// let m = prompt("Enter your number here ");
// let n = parseInt(m);
// for(let i = 1 ; i <=10 ; i++){
//      console.log(`${n} X ${i} = ${n*i}`);
// }

for (let i = 3; i < 10; i++) {
     console.log("outer loop");
     for (let j = 1; j < 10; j++) {
          console.log(i + j);
          console.log("inner loop");
     }
}

//while loop

let i = 1;
while (i <= 5) {
     console.log("I am inside while loop ", i);
     i++;
}

//Favourite movie
// let guess = prompt("Guess my favourite movie");
// let fav = "Baby";

// while((guess != fav) && (guess != "quit")){
//      console.log("wrong guess");
//      guess = prompt("Guess my favourite movie , try again");
// } 

// if(guess == fav){
//      console.log("Right guess");
// }else{
//    console.log("Quit")  
// }

// break keyword
let j = 1;
while (j <= 5) {

     if (j == 3) {
          break;
     }
     console.log(j);
     j++;
}
console.log("End here ");

let fruits = ["mango", "apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
     console.log(i, fruits[i]);
}

let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
for (let i = 0; i < heroes.length; i++) {
     console.log(`List #${i}`);
     for (let j = 0; j < heroes[i].length; j++) {
          console.log(heroes[i][j]);
     }
}

let student = [["skand", 23], ["akash", 22], ["kavita", 24]];
for (let i = 0; i < student.length; i++) {
     for (let j = 0; j < student[i].length; j++) {
          console.log(student[i][j]);
     }
}

//for of loops

let continent = ["asia", "europe", "north america", "south america", "pangia", "africa", "Antarctica"];
for (region of continent) {
     console.log(region);
}

let states = [["UP", "MP", "UK"], ["Bihar", "Jharkhand", "West Bengal"], ["Jammu & Kashmir", "HP", "Ladakh"]];
for (division of states) {
     for (state of division) {
          console.log(state);
     }
}

//Todo App
let todo = [];
let req = prompt("Please enter your request");

while (true) {
     if (req == "quit") {
          console.log("quiting app");
          break;
     }

     if (req == "list") {
          console.log("-------------------")
          for (let i =0 ; i < todo.length ; i++) {
               console.log(i,todo[i]);
          }
          console.log("-------------------")
     } else if (req == "add") {
          let task = prompt("enter the task");
          todo.push(task);
          console.log("task added")
     } else if (req == "delete") {
          let idx = prompt("please enter the task index");
          todo.splice(idx,1);
          console.log(idx ,"task deleted");
     }else{
          alert("wrong request , proceed with new request");
     }
     req= prompt("Please enter next request");
}
