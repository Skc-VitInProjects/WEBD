//Q.1
let arr = [20, 40 , 67 , 80 , 12];

let arrayAvg = (arr) =>{
   let sum = 0;
   for(let i = 0 ; i < arr.length ; i++){
       sum+= arr[i];
   }
   let avg = (sum)/arr.length;
   return avg;
}

console.log(arrayAvg(arr));

//Q.2
let isEven = (n) => {
     if(n%2 == 0){
          return true;
     }
     return false;
}

console.log(`the num ${8} is even : ${isEven(8)}`);
console.log(`the num ${9} is even : ${isEven(9)}`);

//Q.3
const object = {
     message : "Hello, Skand",
     logMessage(){
          console.log(this.message); //this refers to calling object scope --> logMessage ka scope is object
     }
};

setTimeout(object.logMessage , 1000); 
//undefined , (because logMessage() ki jagah logMessage ko call kiya hai)

//Q.4
let length = 4 ;
function callback(){
     console.log(this.length);  //this refers to callback function scope i.e 4
}

const object1 = {
   length: 5,
   method(callback){
      callback();
   }
}

object1.method(callback , 1, 2);