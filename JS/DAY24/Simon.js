let gameSeq = [];
let userSeq = [];

let btnsColor=  ["yellow" , "red" , "purple" , "green"]; 

let started = false;
let level = 0;

//step-1 : Game is started
document.addEventListener("keypress" , function(){  //keyboard ki key ko press krenge
     if(started == false){
        console.log("Game Started !!");
        started = true;

        levelUp();
    }
}); 

//step-2 : Flash Buttons And Level Up
let h3 = document.querySelector("h3");

function btnFlash(btn){
   btn.classList.add("flash");

   setTimeout(function(){
      btn.classList.remove("flash");
   },300);
}
 
function levelUp(){
   userSeq = [];

   level++;
   h3.innerText = `Level ${level}`; 

   //random btn choose 
   let randIdx = Math.floor(Math.random() * 3);
   let randColor = btnsColor[randIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   
        // console.log(`${randIdx} and ${randColor}`);
        // console.log(randBtn);

   gameSeq.push(randColor);
   console.log("Game Seq",gameSeq);
   
   btnFlash(randBtn);
}

//Step-3 : Button Event listeners
function userFlash(btn){
   btn.classList.add("userFlash");

   setTimeout(function(){
      btn.classList.remove("userFlash");
   },300);
}

function btnPress(){
   //console.log(this);
   let btn = this;

   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   console.log("User Seq",userSeq);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
   btn.addEventListener("click" , btnPress);
}

//step-4 : Matching game and user Sequence
function checkAns(idx){
      // console.log("curr level : ",level);

   if(gameSeq[idx] === userSeq[idx]){

        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp , 1000);
        }       
   }else{
      h3.innerHTML = `Game Over! <b>Your Score was ${level} </b>.<br>  Press any key to start`;
      
      document.querySelector("body").style.backgroundColor = "red";

      setTimeout(function(){
         document.querySelector("body").style.backgroundColor = "white";
      },150);
   
      reset();
   }
}

//Step-5 : Reset Game , when game is over 
function reset(){
    started = false;
    level = 0 ;

    gameSeq = [];
    userSeq = [];
} 

//Step-6 : Highest Score of User
