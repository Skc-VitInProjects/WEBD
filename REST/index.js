const express = require("express"); 
const path = require("path");

const app = express();

const port = 8010;

//To generate Unique Ids
const { v4: uuidv4 } = require('uuid');

//METHOD-OVERRIDE
const methodOverride = require("method-override");

//To help express to understand about the data
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(methodOverride("_method"));

//Middlewares
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "views"));   //views folder

app.use(express.static(path.join(__dirname , "public")));  //public folder

let posts = [
     {
        id: uuidv4() ,
        username: "ApnaCollege",
        content:  "I love coding!"
     },
     {
        id: uuidv4() ,
        username: "ShraddhaKhapra",
        content: "Hard Work is key to success",
     },
     {
        id: uuidv4() ,
        username: "RahulKumar",
        content: "Got my 1st internship",
     }
];

app.get("/posts" , (req , res) => {
     res.render("index.ejs" , {posts});
});

//fill the form details
app.get("/posts/new" , (req , res) => {
     res.render("new.ejs");
});

//adding a new post after form submittion
app.post("/posts" , (req , res) => {     
     let {username , content} = req.body;
     let id = uuidv4();
     posts.push({id , username , content});  //adding to the array

     //res.send("post requests working");
     res.redirect("/posts");    //by default it will go to get request
});

//to view post by their id
app.get("/posts/:id" , (req , res) => {
   let {id} = req.params;
   let post = posts.find((p) => id === p.id);
   res.render("show.ejs" , {post});
});

//in order to update any post
app.patch("/posts/:id" , (req , res) => {
     let {id} = req.params;
     let newContent = req.body.content;  

     let post = posts.find((p) => id === p.id);
     post.content = newContent;
     console.log(post);

    // res.send("patch request working");
    res.redirect("/posts");  //by default yeh get request par hi jaayega
});

//to edit the post
app.get("/posts/:id/edit" , (req, res) => {
   let {id} = req.params;
   let post = posts.find((p) => id === p.id);

   res.render("edit.ejs" , {post}); 
});

app.delete("/posts/:id", (req , res) => {
   let {id} = req.params;
   posts = posts.filter((p) => id !== p.id);

   //res.send("delete success");
   res.redirect("/posts");
});

app.listen(port , () => {
   console.log(`listening to port : ${port}`);
});