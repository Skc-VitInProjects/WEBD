//Async function
//1. async keyword
async function greet() {   //returns a promise
     return "hello , how r u ?"; 
}

greet()
  .then((result)=>{
     console.log("Promise resolved : I am fine");
     console.log(result);
  })
  .catch((error)=>{
     console.log("Promise rejected : Some error -> ",error);
  });

let demo = async () => {
     //throw "404 page not found , sorry";
     return "300M";
}

demo()
  .then((result)=> {
     console.log("Promise resolved : followers");
     console.log(result);
  })
  .catch((error)=> {
     console.log("Error found > rejected : ", error);
  });

//2. await keyword
function getNum(){
     return new Promise((resolve , reject) => {   
          setTimeout(()=>{
               let num = Math.floor(Math.random() * 10) + 1;
               console.log(num );
               resolve();
          }, 1000);
     });
}

async function demo1(){
     await getNum(); //jb tk await waali call complete nhi hogi tb tk uske baad waali call execute nhi hoga
     await getNum();
     await getNum();
     await getNum();
     await getNum();
     getNum();
     getNum();
}

demo1();

//handling the rejection
let h1 = document.querySelector("h1");
 
function colorChange (color , delay){
   return new Promise((resolve , reject) => {
     setTimeout(()=> {
          let num = Math.floor(Math.random() * 10)+1;
          if(num > 3){
               reject("promise rejected !!");
          }

          h1.style.color = color ;
          console.log(`color changed to ${color}`);
          resolve("color changed !");
      }, delay);
   });
}

async function demo2(){
     try{
          await colorChange("red" , 1000);
          await colorChange("blue" , 1000);
          await colorChange("yellow" , 1000);
          await colorChange("green" , 1000);
          await colorChange("orange" , 1000);
     }
     catch (error){
         console.log("error caught :",error);
     }
}

demo2();