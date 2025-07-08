const { faker } = require("@faker-js/faker");

const mysql = require("mysql2");

const express = require("express");  //importing express
const app = express();

const path = require("path");

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname, "/views"));


const methodOverride = require("method-override");

app.use(methodOverride("_method")) ;
app.use(express.urlencoded({extended: true}));

// let createRandomUser = () => {
//   return {
//     userId: faker.string.uuid(),
//     username: faker.internet.username(), // before version 9.1.0, use userName()
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//   };
// };

// console.log(createRandomUser());

// let getUser = () => {
//      return {
//           Id: faker.string.uuid(),
//           username: faker.internet.username(),
//           email: faker.internet.email(),
//           password: faker.internet.password()
//      };
// };

// console.log(getUser());



// Create the connection to database --> by MySQL2 Package
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',  //name of database created in WEBD_Connection
  password: 'root'
});

//let q = "SHOW TABLES";

// try {
//   connection.query(q , (err , result) => {
//      if(err) throw err;
//      console.log(result);  //result is in form of array
//   });
// }catch(error){
//      console.log(err);
// }



//Inserting a new data in user table

// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// //let user = ["123" , "123_newuser" ,"abc@gmail.com" ,"abc"];

// let users = [["654" , "654_newuser" ,"pqr@gmail.com" ,"pqr"],
//              ["789" , "789_newuser" ,"xyz@gmail.com" ,"xyz"]];

// try {
//   connection.query(q , [users] ,(err , result) => {
//      if(err) throw err;
//      console.log(result);  //result is in form of array
//   });
// }catch(err){
//      console.log(err);
// }



// //Inserting in bulk
// let getRandomUser = () => {  // this creates a fake data
//    return [
//       faker.string.uuid(),
//       faker.internet.username(),
//       faker.internet.email(),
//       faker.internet.password()
//    ];
// };

// let q = "INSERT INTO user (id, username, email, password) VALUES ?" ;

// let data = [];

// for(let i = 0 ; i <=100 ; i++){
//    //console.log(getRandomUser());  //returns a fake data

//    data.push(getRandomUser());
// }

// try {
//   connection.query(q , [data] ,(err , result) => {
//      if(err) throw err;
//      console.log(result);  //result is in form of array
//   });
// }catch(err){
//      console.log(err);
// }

//connection.end();  //this closes the connection




//ROUTING 
//it shows the no. of users (HOME ROUTE)
app.get("/" , (req , res) => {
    //res.send("welcome to home page");

    let q = `SELECT count(*) FROM user`;

    try{
      connection.query(q , (err, result) => {
          if(err) throw err;
          //console.log(result);
          //console.log(result[0]);
          let count = result[0]["count(*)"];
          console.log(count); 

          //res.send(result[0]["count(*)"]);
          res.render("home.ejs",{count});
      });
    }catch(err){
      console.log(err);
      res.send("Some error in database");
    }
});


//shows user details (SHOW ROUTE)
app.get("/user" , (req, res) => {
   //res.send("success");

   let q = `SELECT id,username,email FROM user`;

   try{
      connection.query(q, (err, users) => {
         if(err) throw err;
         
         console.log(users);
         res.render("show.ejs" , {users});
      });
   }catch(err){
        console.log(err);
        res.send("Some error occured");
   }
});


//EDIT ROUTE
app.get("/user/:id/edit" , (req,res) => {
     let {id} = req.params;

     let q = `SELECT * FROM user WHERE id = '${id}'`;

     try{
        connection.query(q , (err, result) => {
           if (err) throw err;

           let user = result[0];
           //console.log(result);
           res.render("edit.ejs" , {user});
        });
     }catch(err){
           res.send("some error occured");
     } 
});



//UPDATE ROUTE
app.patch("/user/:id" , (req,res) => {
   //res.send("updated"); 
   let {id} = req.params;
   let {password: formPass ,username: newUsername} = req.body;

     //step1--> SELECTION OF USER WITH ID
     let q = `SELECT * FROM user WHERE id = '${id}'`;

     try{
        connection.query(q , (err, result) => {
           if (err) throw err;

           let user = result[0];

           //step2
           if(formPass != user.password){  
             res.send("pass incorrect")
           }else{
              //step3
              let q2 = `UPDATE user SET username = '${newUsername}' WHERE id ='${id}'`;
              
              connection.query(q2 , (err, result) => {
                 
                    if(err) throw err;     
                    res.redirect("/user");
              });
            }
        });
     }catch(err){
           res.send("some error occured");
     } 
});


app.listen("8080" , () => {
   console.log("Server is listening to port 8080");
});


