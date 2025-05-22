//showing the use of require 
//here we use module.export to create objects , then we export those objects


//mathematical functions
const sum = (a , b) => (
     a+b
);

const mul = (a , b) => (
     a*b
);

const g = 9.8;

const PI = 3.14;

//module.exports = 123;

let obj = {
     sum: sum ,
     mul: mul,
     PI: PI,
     g: g,
};

module.exports = obj;