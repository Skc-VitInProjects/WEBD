//Learning node js
let n = 5;

for (let i = 0 ; i < n ; i++){
     console.log("hello", i);
}

console.log("said hello 5 times , gonna learn node js");



//-------------------------------------------------------


let args = process.argv;

for(let i=2 ; i<args.length ; i++){
    console.log("Pranaam to ",args[i]);
}
 

//After the process.argv written inside js file , 
// we can write anything in terminal at the time of running node script.js 
// (as we are passing argumnents with the file)