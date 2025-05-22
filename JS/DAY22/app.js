// Selecting Elements
//getElementById
let imgObj = document.getElementById("mainImg");
console.dir(imgObj);

//getElementByClassName
let smallImages = document.getElementsByClassName("oldImg");

for(let i = 0 ; i < smallImages.length ; i++){
    console.dir(smallImages[i]);
    console.dir(smallImages[i].src);
}

//getElementByTagName
let tag = document.getElementsByTagName("p");
console.dir(tag);

//Query Selectors -> we generally prefer this for selection
let bx= document.querySelector(".boxLink");
console.dir(bx);

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));

console.dir(document.querySelectorAll("p"));

console.dir(document.querySelector("div a"));


//Using properties And Methods
let para = document.querySelector("p");
console.dir(para.innerText);  //displays text how it is displayed on screen
console.dir(para.innerHTML);  //displays text with complete html markup
console.dir(para.textContent);  //displays text without complete html markup

//manipulating styles
let links = document.querySelectorAll(".box a");

for(let i = 0 ; i < links.length ; i++){
     links[i].style.color = "purple";
}

