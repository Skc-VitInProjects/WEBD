const express = require("express");
const app = express();
const port = 8045;

app.get("/register" , (req , res) => {
     let {user , password} = req.query; //form ka data

     res.send(`standard GET response. Welcome ${user}!`);
});

//to get information of the data we entered in form , while using POST request , we use
app.use(express.urlencoded({extended: true})); 
//yeh express ko urlencoded data samjhane mein madad karega

//yeh express ko json data samjhane mein madad karega
app.use(express.json());

app.post("/register" , (req , res) => {

     let {user , password} = req.body;  //we can see the data entered in form , here in the terminal
     res.send(`standard POST response. Welcome ${user}`);
});

app.listen(port , ()=> {
     console.log(`listening to port ${port}`);
});