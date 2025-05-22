//forEach--> prints eachElement one by one
let arr = [1 , 2, 3 , 4, 5];

function print(el){
     console.log(el);
}

arr.forEach(print);  //approach 1
arr.forEach(function(el){   //approach 2
     console.log(el);
});

let arr1 = [{
     name: "Skand",
     marks: 95
},
{
     name: "Sita",
     marks: 95.7
},
{
     name: "awank",
     marks: 98
}];

arr1.forEach((student)=>{
     console.log(student.marks);
});

arr1.forEach((student) => {
     console.log(student.name);
});

//Map --> stores each element into another array
let num = [1 , 2, 4, 6 ,9];
let num1 = num.map((n) =>{
     return n**2;
});

console.log(num1);

let arr2 =[ {
      name: "Skc",
      marks: 22
},
{ 
     name : "Svk",
     marks : 56
},
{
     name: "Sat",
     marks: 34
}
];

let gpa= arr2.map((el) => {
     return el.marks/10;
});

console.log(gpa);

//Filter --> if condition is true , elements are stores to another array
let arr3 = [2, 4, 1 , 5, 6, 2 , 7 , 8 , 9];
let even = arr3.filter((num)=> (
      (num % 2 == 0)   //condition returns true
));

console.log(even);

//every--> returns true if every element satisfies the condition
let arr4 = [1, 2, 3, 4];
let check1 = arr4.every((el) => {
     return el%2 == 0 ;
});
console.log(check1);

let arr5 = [2 , 8 , 20 ,46 , 80];
let check2 = arr5.every((el) => {
     return el%2 == 0 ;
});
console.log(check2);

//some--> returns true if some elements satisfies the condition
let arr6 = [6 ,8 , 9 ,11];
let check3 = arr6.some((el) => {
     return el%2 != 0 ;
});
console.log(check3);

//Reduce --> reduces the array to single element
let arr7= [1, 2, 3, 4];
let ans = arr7.reduce((res,el) => {
     return res + el ;
});
console.log(ans);

//Question
let nums = [2, 4, 73 ,3, 9 , 34, 8];
let maxIs = nums.reduce((max,el)=>{
     if(el > max){
          return el;  //store el inside max
     }else{
          return max; 
     }
});
console.log(maxIs);

//Practice Questions
//Q.1
let arr8 = [100, 45, 70 , 69 , 80 , 40];
let check4 = arr8.every((el) => ( el % 10 == 0));
console.log("is all num divisible by 10",check4);

//Q.2
let minIs = arr8.reduce((min,el) =>{
     if(el < min){
          return el;
     }
     return min;
});
console.log(`The min is ${minIs}`);

//Default parameters
function sum(a, b=9){
     return a+b;
}
console.log(sum(4));
console.log(sum(6,8));

//Spread --> expands the arrays, strings into multiple values
console.log(..."Skandisaboy");

let arr9 = [8, 7 , 89 , 78];
console.log(Math.min(...arr9));

//Spread - (with array literals)
let arr10 = [3, 7, 2 , 9 , 23];
let newArr = [...arr10];
console.log(newArr);

let chars = [..."skandkumarchoubey"];
console.log(chars);

let evenNum = [2, 4, 6, 8, 10];
let oddNum = [3, 5, 7, 9, 11];

let finalNum = [...evenNum , ...oddNum];
console.log(finalNum);

//Spread - (with object literals)
const data = {
     email:"skc@123@gmail.com",
     password: "#122klmp"
}

let newData = {...data , id: 234};
console.log(newData);

let arr11 = [19, 27 , 32, 43, 54 , 43];
let obj1 = {...arr11};
console.log(obj1);

//Rest ---> it bundles multiple values into single array
function sum(...args){
     return args.reduce((add,el) =>  add+el);
}

let arr12 = [4, 7,9 , 34, 43];
console.log(sum(...arr12));

function min(...args){
     return args.reduce((min, el) => {
          if(el < min){
               return el;
          }
          return min;
     });
}

console.log(min(...arr12));

//Destructuring
let names = ["tony" , "bruce" , "steve" , "peter"];
let [winner , runnerup , ...others] = names;
console.log(winner , runnerup);
console.log(winner);

//Destructuring-(Objects)
const info = {
     nameInfo : "Tiger",
     password : "skand@123",
     subjects : ["hindi" , "english" , "math" , "Itihaas"],
     age : 20,
     class : 8
};

const {nameInfo : name1 , password : pass , city ="Mumbai" , ...other} = info;
console.log(name1);
console.log(pass);
console.log(city);