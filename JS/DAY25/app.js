function hello(){
     console.log("inside demo hello function");
     console.log("Hello guys");
}

function demo(){
     console.log("calling hello function");
     hello();
}

console.log("calling demo function");
demo();

//visualising the call stack
function one (){
     return 1;
}

function two(){
     return one() + one();
}

function three(){
     let ans = two() + one();
     console.log(ans);
}

three();

//js is single threaded 

setTimeout(()=>{
     console.log("apna college");
}, 2000);

console.log("hello...");

//callback nesting --->   callback hell
h1 = document.querySelector("h1");

function changeColor(color, delay , nextColorChange){
     setTimeout(()=>{
          h1.style.color = color;
          if(nextColorChange) nextColorChange();   //agar next color change as an argument pass hai tb 
     } , delay );
}

changeColor("red", 1000, () => {
   changeColor("orange", 1000, () => {
     changeColor("green", 1000 , () => {
       changeColor("yellow" , 1000 , () => {
          changeColor("blue" , 1000);
       });
     });
   });
});

//promises in callback hell
function savetoDb (data , success , failure){
  let internetSpeed = Math.floor(Math.random()*10) + 1 ;

  if (internetSpeed > 4){
     success();
  }
  else {
     failure();
  }
}

savetoDb("Skand learns to swim ", ()=>{
     console.log("Success : your data was saved :" , "Skand learns to swim"); 
     savetoDb("New Skill in the Town", ()=>{
          console.log("Success2 : data successfully saved ---> " , "New Skill in the Town");
     }, ()=>{
          console.log("Failure2 : connenction weak");
     });
} , ()=>{
     console.log("Failure : weak connection. data not saved");
});

 
//promises - resolve and reject
function savetoDB (data){
     return new Promise ((resolve , reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
          resolve("success : Data was saved");
        }else{
          reject("failure : weak connection");
        }
     });
}

savetoDB("Skand is a boy");  //calling function

//promise - then and catch methods
savetoDB("Adil Sheikh")    //req = promise object 
   .then(() => {
      console.log("Promise resolved");
   })
   .catch(() => {
       console.log("Promise rejected");
   });

//promise chaining --> using a lot of then() statements
savetoDB("Skand loves to swim")
 .then(()=>{
     console.log("data1 saved. promise resolved") ;
     return savetoDB("Syed modi stadium");
 })
 .then(() => {
     console.log("data2 saved. promise resolved") ;
     return savetoDB("Swimming pool");
  })
  .then(()=>{
     console.log("data3 saved. promise resolved");
  })
 .catch(()=> {
     console.log("promise1 rejected");
 });

//results and errors in promises
savetoDB("Skand is in Gorakhpur")
  .then((result) => {
     console.log("result :", result);
     console.log("1st promise resolved");
     return savetoDB("Gorakhpur is in Uttar Pradesh");
  })
  .then((result) => {
     console.log("result :" , result);
     console.log("2nd promise resolved");
     return savetoDB("UP is in India"); 
  })
  .then((result) => {
     console.log("result :" , result);
     console.log("3rd promise resolved");
  })
  .catch((error) =>{
     console.log("error :" , error);
     console.log("promise rejected");
  });


//refactoring the old code
//h1 heading ka code change kar diya 
//Promise chaining use karenge instead of callback hell

let h2 = document.querySelector("h2");

function changeColor2 (color , delay){
     return new Promise ((resolve , reject) => {
       setTimeout(()=>{
          h2.style.color = color;
          resolve("Color changed !!");
       }, delay);
    });
}

changeColor2("red" , 1000)
  .then(()=>{
     console.log("red color was completed");
     return changeColor2("yellow", 1000);
  })
  .then(() => {
     console.log("yellow color was completed");
     return changeColor2("orange" , 1000);
  })
  .then(() => {
     console.log("orange color was completed");
  })
  .catch(() => {
     console.log("");
  })

  