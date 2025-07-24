let express = require("express");
const app = express();

//Middlewares................

// app.use((req, res , next)=> {
//      console.log("Hi , i am a middleware");
//      //the middleware does not allow to go on the routes
//      //for this middleware needs to send a respone or move to next middleware 
//      //But , here neither of the two tasks have been done , that's why the routes are not accessible
//      //to access the routes we need to use the next parameters
     
//      //res.send("middleware finished");

//      next(); //pass control to next middleware
//      console.log("This is after the next()");
// });

// app.use((req, res, next) => {
//      console.log("Hi , i am 2nd middleware");

//      next();
// });

//Utility middleware - logger
app.use((req , res , next) => {
     req.time = new Date(Date.now()).toString();
     console.log(req.method , req.hostname , req.path , req.time);
     next();
});
//We will always write the middlewares in starting of the code

//using middleware for specific path
app.use("/random", (req , res, next) => {
     console.log("I am only for /random");
     next();
});

//middleware for /api 
// app.use("/api" , (req , res , next) =>{
//      let {token} = req.query;   
//      if(token === "give access") { //write  /api?token=give access
//           next();
//      }

//      res.send("ACCESS DENIED");
// });


//Api token as Query
// app.get("/api" , (req , res) => {
//      res.send("Data !!");
// });


//modifying the above code of middleware for /api route 
const checkToken = ("/api" , (req , res , next) =>{
     let {token} = req.query;   
     if(token === "giveaccess") { //write  /api?token=give access
          next();
     }

     res.send("ACCESS DENIED FOR APIS");
     //throw new Error("ACCESS DENIED FOR APIS");
});

app.get("/api" , checkToken , (req , res) => {
     res.send("Data !!");
});

//Error Handling
const checkToken1 = ((req , res , next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
         next();
    }

    throw new Error("ACCESS DENIED !");
    
});

app.get("/wrong" ,checkToken1, (req, res) => {
     console.log("wrong");
});


//Routes........................
app.get("/" , (req, res)=>{
     res.send("Hi , i AM a root");  
});

app.get("/random" , (req , res)=>{
     res.send("this is a random page");
});

//for a route which does not exist
app.use((req , res) => {
     //res.send("Page not found!");
     res.status(404).send("Page not found!");
});

app.listen(8080 , ()=>{
     console.log("Server listening to port - 8080");
});