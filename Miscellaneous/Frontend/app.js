// const stu1 = {
//      name: "Adam",
//      age: 25,
//      marks: 95,
//      getMarks: function(){
//         return this.marks;
//      }
// };

// const stu2 = {
//      name: "Evans",
//      age: 24,
//      marks: 99,
//      getMarks: function(){
//           return this.marks;
//      }
// };

// const stu3 = {
//      name: "Casey",
//      age: 26,
//      marks: 94,
//      getMarks: function(){
//           return this.marks;
//      }
// };


//Object prototypes in OOPS
//String.prototype , Array.prototype

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

arr1.sayHello = () => {
     console.log("Hello! , I am array");
};

arr2.sayHello = () => {
     console.log("Hello! , I am array");
};
//arr1.sayHello() === arr2.sayHello() , false 
//This leads to multiple creation of copy

//Factory Function : A function that creates objects
function PersonMaker(name , age) {
     const person = {
          name: name,
          age: age,
          talk() {
               console.log(`Hi , I am ${name}`);
          }
     };

     return person ;
};

let p1 = PersonMaker("Skand", 34);   
console.log(p1);
console.log(p1.talk());     //copy-1

let p2 = PersonMaker("Angad", 23);
console.log(p2);
console.log(p2.talk());     //copy-2

//p1.talk() === p2.talk() , false  , 
// this is a disadvantage of factory functions 
//this leads to Multiple creation of copies

//New Operator
//Constructor - doesn't return anything and start with capital letter
function Person(name , age){
   this.name = name;
   this.age = age;
};

Person.prototype.talk = function(){
     console.log(`My name is ${this.name}`);
};

let p3 = new Person("Satwik" , 34);
console.log(p3);
console.log(p3.talk());

let p4 = new Person("Sanskar" , 29);
console.log(p4);
console.log(p4.talk());

//here, p3.talk() === p4.talk() , true ---> as they point to same Prototype


class Person1 {
     constructor(name , age){
          this.name = name;
          this.age = age;
     }

     talk() {
          console.log(`Hi , my name is @${this.name}`);
     }
}  

let p5 = new Person1("Ananya", 21);
console.log(p5);

let p6 = new Person1("Satya", 22);
console.log(p6);

//p5.talk() === p6.talk() , true : as they point to same prototype

//Inheritance
class Info {
     constructor(name , age ){
        this.name = name;
        this.age = age;  
     }

     talk(){
          console.log(`Hi , I am ${this.name}`);
     }
}
class Student2 extends Info {
     constructor(name , age , marks){
          //this.name = name;
          //this.age = age;
          console.log("Student class constructor is called");

          super(name, age);  //parent class constructor is being called
          this.marks = marks;

     }

    // talk(){
       //   console.log(`Hi , I am ${this.name}`);
    // }
}

let stu1 = new Student2("Arihant" , 23 , 98);
console.log(stu1);
console.log(stu1.talk());

class Teachers extends Info {
     constructor(name , age , subject){
         // this.name = name;
         // this.age = age;
         console.log("Teachers class constructor is called");

         super(name , age ); //parent class cconstructor is being called
         this.subject = subject;
     }

    // talk(){
        //  console.log(`hi , I am ${this.name}`);
   //  }
}

let t1 = new Teachers("Arti" , 45 , "hindi");
console.log(t1);
console.log(t1.talk());

//example inheritance
class Mammal{
     constructor(name){
          this.name = name;
          this.type = "warm-blooded";
     }

     eat(){
          console.log("I am eating");
     }
}

class Dog extends Mammal {
     constructor(name){
          super(name);
     }

     bark(){
          console.log(`wooff...`);
     }
}

class Cat extends Mammal{
     constructor(name){
          super(name);
     }

     meow(){
          console.log(`meoww...`);
     }
}

let d1 = new Dog("Mongrel");
console.log(d1);
console.log(d1.bark());
console.log(d1.eat());

let c1 = new Cat("Billa");
console.log(c1);
console.log(c1.meow());
console.log(c1.eat());