//Q.1
let arr1 = [5, 6, 8 , 9];
function calAvg(arr){
     let arr2 = arr.map((el) => (el*el));
     console.log(arr2);
     let sum = arr2.reduce((sum , el) => (sum+el));

     return sum/arr2.length;
}
console.log(calAvg(arr1));
console.log("-----------------------")

//Q.2
console.log(arr1);
let arr3 = arr1.map((el) => (el+5));
console.log(arr3);

//Q.3
let strArr = ["skc" , "sam" , "sak" , "sus" , "prn" , "chk"];
console.log(strArr);

let newStr = strArr.map((el) => (el.toUpperCase()));
console.log(newStr);

//Q.4
const doubleAndReturnArgs = (arr4 , ...args) => [
     ...arr4 ,
     ...args.map((el) => el*2)
];
let arr4 = [3, 5, 9 , 0 ,1];
console.log(doubleAndReturnArgs(arr4 , 5, 98 , 23));

//Q.5
const mergeObjects = ((obj1, obj2) => ({...obj1,...obj2}));
const obj1 = {
     name1 : "vinu",
     age : 23, 
     class : 11
};

const obj2 = {
     school : "RPM Academy",
     city : "Gorakhpur",
     Country : "India"
};

console.log(mergeObjects(obj1 , obj2));
