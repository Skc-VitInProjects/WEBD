const express = require("express");
const path = require("path");   //extra line 1

const app = express();

const port = 7500;

app.set("views" , path.join(__dirname , "/views"));   //extra line 2

app.set("view engine" , "ejs");

/*app.get("/ig/:username" , (req , res) => {
     let {username } = req.params;  //takes parameters
     console.log(username);
     res.render("insta.ejs" , {user : username}); //passes as an object

}); */

//Instagram page with ejs
app.get("/instagram/:username" , (req , res) => {
     let {username}= req.params;

     const instaData = require("./views/data.json");  
     const data = instaData[username];   //dogs or cats   
     // console.log(data);

     if(data){
          res.render("insta.ejs", {data});  //passing obj
     }else{
          res.send("Sorry , No account Found");
     }
});

app.listen(port , ()=> {
     console.log(`listening on port ${port}`);
});