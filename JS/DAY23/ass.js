//Q.1
let h3 = document.querySelector("h3");

//mouseout --> when we move the cursor , changes happen
h3.addEventListener("mouseout", ()=>{
   console.log("Something happend")
});

//keypress
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("keypress" , function(){
     console.log("keypress");
});

//scroll and load


//Q.2
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function(){
     btn1.classList.add("prop1");
     console.log("Color changed");
});

//Q.3
let inp1 = document.querySelector(".inp1");
inp1.addEventListener("keyup" , function(){
     let h2 = document.querySelector("h2");

     h2.innerHTML = inp1.value ;
     console.log("name is updating");
});


