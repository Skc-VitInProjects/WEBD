const student = {
     name : "skand",
     age : 21,
     eng : 95,
     math : 93,
     phy : 97,
     getAvg(){
          let avg = (this.eng + this.math +  this.phy)/3;
          console.log(avg);
     },
     getInfo(){
           console.log(`the name of student is ${this.name}`);
     }
};

student.getAvg();
student.getInfo();

//this keyword 
function moreAboutThis(){
     console.log(this);
}
moreAboutThis();

//try & catch block
try{
     console.log(a);
}
catch{
     console.log("a is not defined ..");
}

console.log("Hello , next line is executed");

//Miscellaneus Topics
//Arrow Functions
const sum = (a,b) => {
     console.log(a+b);
};

sum(4 , 9);

const diff = () => {
     let a= 6;
     let b= 17;
     console.log(a-b);
};

diff();

const cube = (n) =>{
    return n*n*n;  
};

console.log(cube(6));

//Arrow Function --> implicit return
const mul = (a,b) =>(
     a*b    //implicit return (already known that the value will return itself)
);

console.log(mul(6,8));

//set timeout function
//setTimeout(function , timeout)
console.log("Using timeout function");

setTimeout(() => {
     console.log("Apna college");
} , 2000);

console.log("setTimeout function will execute after this line");

//setInterval
// let id = setInterval(() => {
//      console.log("Copyright !!");
// }, 3000);

// console.log(id);  

//this with Arrow Functions
const info = {
     name: "Skand",
     age: 23,
     marks : 80,
     prop : this, //global scope

     getName: function(){
          console.log(this);  //calling obj ka this --> info
          //this refers to getName , getname ka scope is "info"
          return this.name;  
     },

     getMarks : () => {
         console.log(this);  //obj ke parent ka this (info ke parent ka this) --> window
         //this refers to getMarks, getMarks ka parent info , info ka scope is "window"
         return this.marks;
     },

     //this refers to setTimeout , setTimeout ka parent getInfo1 , getInfo1 ka scope is info
     getInfo1 : function(){
          setTimeout(()=>{     
               console.log(this);  //info --> (parent ka this , getInfo1 is parent , uska this hai info)
          },1000);
     },

     //this refers to setTimeout , setTimeout ka scope is Window
     getInfo2 : function(){
          setTimeout(function(){
               console.log(this);   //window --> calling obj ka this (getInfo2 ka this)
          },1000);
     }
};

console.log(info.getName());
console.log(info.getMarks());

info.getInfo1();
info.getInfo2();  

//Practice Question
//q.1
const square = (n) => (
     n*n
);
console.log(square(8));

//q.2

let id = setInterval(() => {
     console.log("Hello World");
},2000);

setTimeout(() =>{
     clearInterval(id);
},10000);

