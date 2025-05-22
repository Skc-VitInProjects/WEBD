let msg = "  good morning  ";
console.log(msg);

//1.  ------string methods------------
//trim method
let newMsg=msg.trim();
console.log(newMsg);

//let pass = prompt("Set your password ");
//console.log(pass.trim());

//toUpperCase
let name1 ="skand";
console.log(name1);

let n2 = name1.toUpperCase();
console.log(n2);

// index of
let str="IloveCoding";
console.log(str.indexOf("o"));

//slice
console.log(str.slice(1,5));
console.log(str.slice(0));
console.log(str.slice(-5));

//replace
console.log(str.replace("love", "likes"));

//repeat
let str1 = "cat";
console.log(str1.repeat(3));

//practiceQuestions
let msg1 = "help!";
console.log(msg1.trim());
console.log(msg1.trim().toUpperCase());

let n1 = "ApnaCollege";
console.log(n1.slice(4,9));
console.log(n1.indexOf("na"));
console.log(n1.replace("Apna","Our"));

let n3 = n1.slice(4);
console.log(n3);
console.log(n3.replace("l","t"));
console.log(n1.slice(4).replace("l","t").replace("l","t"));

//arrays
let students = ["skand", "virat", "rajat"];
console.log(students[1]);
students[3] = "kartik";
console.log(students);
students[0]="saksham";
console.log(students);
console.log(students.length);
console.log(typeof(students));

let info = ["Ram", 2000 , 9.56];
console.log(info);
console.log(info[0][2]);
console.log(info[0].length);

let empArr = [];
console.log(empArr);

info[6]= "#2345";
console.log(info);

//2.  --------array methods--------
let cars = ["audi" , "bmw", "maruti" , "xuv"];
console.log(cars);
cars.push("toyota");  //add to end
console.log(cars);
cars.unshift("creta");   //add to start
console.log(cars);   

cars.pop();
console.log(cars);
cars.shift();
console.log(cars);

//practice Ques
let month = ["january" , "july" , "march" , "august"];
month.shift();
month.shift();
month.unshift("june");
month.unshift("july");
console.log(month);

//includes , indexOf
console.log(cars.indexOf("maruti"));
console.log(cars.includes("mahindra"));

//concat
let bike = ["yamaha" , "hero" , "tvs" , "bajaj"];
console.log(bike);
console.log(cars.concat(bike));

//reverse
console.log(bike.reverse());

//slice
console.log(bike.slice(2,4));
console.log(bike.slice(-1));
console.log(bike.slice());

//splice
let colors = ["red" , "yellow" , "blue" , "orange" ,"pink" ,"white"];
colors.splice(3,2,"#1","#2");
console.log(colors);

colors.splice(0,0,"@123","1@3");
console.log(colors);

//sort
let days = ["monday" , "sunday" , "wednesday" , "tuesday"];
console.log(days.sort());

let squares = [25 , 16 , 4 , 49 , 36 , 9];
console.log(squares.sort());

//practice Ques
let month1 = ["january" , "july" , "march" , "august"];
month1.splice(0,1)
month1.splice(1,0,"june");
console.log(month1);

let course = ["c" , "c++" , "html" , "javascript" , "python" , "java" , "c#" , "sql"];
console.log(course.reverse().indexOf("javascript")); 

//const array
const array = [1 , 2 , 3]; 
array.push("56");
console.log(array);

// array = [2,4 ,6, 5];
// console.log(array);

//nested arrays 
let nums = [[2 , 4] , [3 , "Skand" , 6] , [4 , 8]];
console.log(nums);
console.log(nums[1][1]);

// practice Questions
let tic = [["X"," " ,"O"] , [" " , "X", " "] , ["O" ," " , "X"]];
console.log(tic);

// Assignemnt 
// Q.1
let arr1 = [7 , 9, 0 , -2];
console.log(arr1.slice(0,3));

// Q.2
console.log(arr1.slice(1,4));

// Q.3
let str2 = "";
if(str2.length === 0){
     console.log("empty");
}else{
     console.log("not empty");
}

// Q.4
let str4 = "SkaaaND" ;
let idx = 2;
if(str4[idx] == str4[idx].toLowerCase()){
     console.log("char is in lowercase");
}else{
     console.log("char is not in lowercase");
}

// Q.5
let str3 = "  hello , amulya   "
console.log(str3.trim());

// Q.6
let arr2 = ["amul" , "shree dhee" , "paras"];
console.log(arr2.includes("mother diary"));


