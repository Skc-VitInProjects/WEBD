const express = require("express");
const path = require("path");

const app = express();

const cookieParser = require("cookie-parser"); 

//app.use(cookieParser());   //middleware 

app.use(cookieParser("secretcode"));   //middleware for signed cookies --> this sends the data as encoded

//------------------------------------------------------------------------------------------
//Root route
app.get("/" , (req , res) => {
     res.send("Welcome to root route");
})


//normal cookies 
app.get("/getCookies" , (req, res)=>{
     res.cookie("reg" , "23bce10639");  //name , value is passed to cookies
     console.dir(req.cookies);
     res.send("sent some cookies");
});


//signed cookies
//send
app.get("/getSignedCookie" , (req, res) => {
     res.cookie("color" , "red" , {signed : true});
     res.send("signed cookie sent!");
});

//verify
app.get("/verify" , (req, res)=> {
    console.log(req.signedCookies);  //this will print both name , value for a signed cookie
    res.send("verified"); 
});








const port = "3001";

app.listen(port , ()=> {
     console.log(`listening to the port ${port}`);
});