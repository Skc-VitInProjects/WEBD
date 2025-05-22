//DOM events--> onclick , onmouseenter
let btn = document.querySelector("button");

console.dir(btn);

btn.onclick = function(){
     console.log("button was clicked"); 
};

function sayHello(){
     alert("Hello !");
}

btn.onclick = sayHello;   
//we have not written sayHello() , because this means we are executing the function before passing to the btn.onclick 

btn.onmouseenter = function(){
    console.log("This means you want to click on the button");
}

let btns = document.querySelectorAll(".btn1");

for(btn1 of btns){   //only sayName fnction will work , because at particular time only one property can be used, so to avoid it we use event listner
     btn1.onclick = sayHello;
     btn1.onclick = sayName;
}

function sayName(){
     console.log("Apna College");
}

//Event Listener --> we can only set one property at a time while using DOM events, but if we want to set multiple properties at a time , we have to use event listener

for(btn1 of btns){
     btn1.addEventListener ("click", function(){
          console.log("We are using event Listener");
     });

     btn1.addEventListener("click",sayName);

     btn1.addEventListener("dblclick", function(){
          console.log("We are double clicking");
     });
}

//Doing an activity
let newBtn = document.querySelector(".btn2");
let myDiv = document.querySelector(".myDiv");
let h1 = document.querySelector("h1");

newBtn.addEventListener("click",function(){
    let randomColor = getRandomColor();
    
    h1.innerText = randomColor; 
    myDiv.style.backgroundColor = randomColor;

    console.log("color updated");
});

function getRandomColor(){
     let red = Math.floor(Math.random()*255);
     let blue = Math.floor(Math.random()*255);
     let green = Math.floor(Math.random()*255);

     let color = `rgb(${red} , ${blue} , ${green})`;
     return color;
}

//Event listeners for elements
let p =document.querySelector("p");
p.addEventListener("click" , function(){
   console.log("parah was clicked");
});

let div = document.querySelector(".box");
div.addEventListener("mouseenter" , function(){
    console.log("mouse inside the box .....aaaahhha");
});


//"THIS" in event listeners
let btn3 = document.querySelector(".btn3");
btn3.addEventListener("click" , function(){
    console.log(this);
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
});

//Keyboard Events
let btn4 = document.querySelector(".btn4");

btn4.addEventListener("dblclick" , function(event){
    console.log(event);
    console.log("button clicked to learn and test")
});

let inp1 = document.querySelector(".enter1");
inp1.addEventListener("keydown" , function(){
   console.log("You pressed the key for me");
});

let inp2 = document.querySelector(".enter2");
inp2.addEventListener("keyup" , function(){
   console.log("Fired when key is released");
});

let inp3 = document.querySelector(".enter3");
inp3.addEventListener("keyup" , function(event){
   console.log("key = " ,event.key);
   console.log("code = ",event.code);
});

let inp4 = document.querySelector(".enter4");
inp4.addEventListener("keyup" , function(event){
     if(event.code == "ShiftLeft"){
          console.log("Player turned left");
     }
     else if(event.code == "ShiftRight"){
          console.log("Player turned right");
     }
     else{
          console.log("kha jaun chutiye");
     }
});

//form events
let form1 = document.querySelector(".form1");
form1.addEventListener("submit" , function(){
    console.log("Congrats you registered for the event");
});

let form2 = document.querySelector(".form2");
form2.addEventListener("submit", function(event){
   event.preventDefault();  //does not allow the page to get submitted
   console.log("CONGRATS !!")
});

//extracting form data
let form3 = document.querySelector(".form3");
form3.addEventListener("submit" , function(event){
    event.preventDefault();

    let passInp = document.querySelector(".passInp");
    console.log(passInp);
    console.dir(passInp.value);

    let pass = this.elements[0];
    console.log(pass.value);
});

//More Events
let user1 = document.querySelector("#user1");
user1.addEventListener("change" , function(event){
   event.preventDefault();

   console.log("input changed");
   console.log("final value = ", this.value);
});

let user2 = document.querySelector("#user2");
user2.addEventListener("input" , function(event){
   event.preventDefault();

   console.log("input changed for");
   console.log("final value = ", this.value);
});
