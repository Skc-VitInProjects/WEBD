const express = require("express");
const path = require("path");

const app = express();

// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");

//express-session is a npm package
const session = require("express-session");
//connect-flash 
const flash = require("connect-flash");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//express-session creates a middleware
const sessionOptions = {
     secret: "mysupersecretstring",
     resave: false,
     saveUninitialized: true,
};


//making use of session , flash
app.use(session(sessionOptions));
app.use(flash());


//-----middleware-----

app.use((req , res , next) => {
     res.locals.successMsg = req.flash("success");
     res.locals.errorMsg = req.flash("error");
     next();
});

app.get("/register", (req, res) => {
     let { name = "anonymous" } = req.query;  // ?name=skand
     req.session.name = name;

     //     //console.log(req.session);
     //     console.log(req.session.name);
     //     res.send(name);                      //sends skand
     if (name === "anonymous") {
          req.flash("error", "user not registered");
     } else {
          req.flash("success", "user registered successfully");  //key is -- success and user registerd successfully is -- message
     }

     res.redirect("/hello");
});

app.get("/hello", (req, res) => {
     //res.send(`hello, ${req.session.name}`);  //hello skand

     //console.log(req.flash("success"));

     res.render("page.ejs", { name: req.session.name });
     // res.render("page.ejs" , {name: req.session.name , msg: req.flash("success")});
});

app.get("/reqcount", (req, res) => {
     if (req.session.count) {  //agar baar specific route ko request bhejenge, then it will keep on updating
          req.session.count++;
     } else {              //nhi toh reinitialize with 0
          req.session.count = 1;
     }

     res.send(`you sent a request ${req.session.count} times`);
});

app.get("/test", (req, res) => {
     res.send("test successfull");
});

app.listen(3000, () => {
     console.log("server is listening to port: 3000");
});






