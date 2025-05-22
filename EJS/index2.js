const express = require("express");
const path = require("path");

const app = express();

const port = 8001;

app.set("views" , path.join(__dirname , "/views"));

app.set("view engine" ,"ejs");

app.get("/dice" , (req , res) => {
     let diceVal = Math.floor(Math.random() * 6) + 1;
     res.render("cond.ejs" , {num : diceVal});  //passing obj
});


app.get("/ig/:username" , (req , res) => {
    const followers = ["adam" , "steve" ,"bob" , "ryan" , "simon"];
    let {username} = req.params ;
    
    res.render("loops.ejs" , {username , followers});  //passing object

});

app.listen(port , ()=> {
     console.log(`listening to port ${port}`);
});