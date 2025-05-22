const express = require("express");
const app = express();

//extra line 1
const path = require("path");


const port = 8080;

//using ejs
//we don't need to require ejs , because express ne internally ejs ko require kar liya hai

app.set ("view engine", "ejs");  

//extra line 2
app.set("views" , path.join(__dirname , "/views"));

app.get ("/" , (req, res) => {

     res.render("home.ejs");   //sending a file in response
});

app.get("/hello" , (req, res) => {
    res.send("hello");   //sending string in response
});


//passing data to ejs
app.get("/rolldice" , (req , res) => {
     
    //res.render("rolldice.ejs");

    let diceVal = Math.floor(Math.random() * 6) + 1;  
    res.render("rolldice.ejs" , {num : diceVal}); //passing the object
});

app.listen(port , ()=> {
     console.log(`listening on port ${port}`);
});