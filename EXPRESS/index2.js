
const express = require("express");

const app = express();

let port = 7000;     //endpoint of network connection

//making request
app.listen(port , () => {  //requesting
     console.log(`app is listening on port ${port}`);
});

//confirmation of request recieved : app.get or app.use can be used
//---------------Routing--------------

//"/" , "/apple" , "/orange" -------> different paths
app.get ("/",(req , res) => {

   //sending response
   res.send("you contacted root path");
});


app.get("/apple" , (req , res) => {
   res.send("you contacted apple path");
});

app.get("/orange" , (req , res) => {
   res.send("you contacted orange path");
});

app.post("/" , (req ,res) => {
     res.send("you sent a post request");
});

//path paramater --> now , there is no need to create multiple app.get function for specific routes
//  -- now single  parameter can be used
app.get("/:username/:id" ,(req , res) => {  //write http://localhost:7000/Skand/23bce10639
    let {username , id} = req.params;  
     console.log(req.params); 
     res.send(`Welcome to the page of @${username} with id #${id}`);
});


//Query Strings
app.get("/search" , (req, res) => { //write http://localhost:7000/search?q="apple" or /search?q="apple"&color="red"
   let {q} = req.query;   //we can also create multiple objects i.e {q , color , cost}

   if(!q){
      res.send("no query sent");
   }
   res.send(`these are the search results for query ${q}`);
});

