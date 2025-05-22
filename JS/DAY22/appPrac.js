//Q.1
let input =document.createElement("input");
let btn = document.createElement("button");

btn.innerText = "Click me";

let body = document.querySelector("body");
body.append(input);
body.append(btn);

//Q.2
input.setAttribute("placeholder","username");
btn.setAttribute("id","btn");

//Q.3
document.querySelector("#btn").classList.add("prop1");

//Q.4
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
body.appendChild(h1).classList.add("prop2");

//Q.5
let p = document.createElement("P");
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);

