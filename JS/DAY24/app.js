//Event Bubbling

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click" , function(){
//      console.log("div was clicked");
// });

// ul.addEventListener("click" , function(event){
//      event.stopPropagation(); //div will not allowed to function
//      console.log("ul was clicked");
// });

// for(li of lis){
//      li.addEventListener("click" , function(event){
//           event.stopPropagation(); //it stops the parent element from propagation --> i.e ul and div will not be allowed to function
//           console.log("li was clicked");
//      });
// }

// -------------------------------------------



//TO - DO APP
let btn = document.querySelector("button");
let ul1 = document.querySelector(".ul1");
let inp = document.querySelector("input");

btn.addEventListener("click" , function(){
     let item = document.createElement("li");
     ul1.appendChild(item);
     item.innerText = inp.value ;
     inp.value = "";

     let delBtn = document.createElement("button");
     item.appendChild(delBtn);
     delBtn.innerText = "Delete";
     delBtn.classList.add("delBtn");

     console.log("Task has been added");
});


// let delBtns = document.querySelectorAll(".delBtn");

// for (task_del of delBtns){
//      task_del.addEventListener("click", function(){
//           let par = this.parentElement;
//           par.remove();

//           console.log("Task deleted !!");
//      });
// }


//Event Delegation
ul1.addEventListener("click" , function(event){
     
     //event.target -- tells us which element is triggering the event i.e. li / button
     if(event.target.nodeName == "BUTTON"){
         let listItem = event.target.parentElement;
         listItem.remove();
         console.log("Deleted task");
     }
});

