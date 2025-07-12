const express = require("express");
const app = express();

//now for mongoose
const mongoose = require("mongoose");

const path = require("path");

//importing the chat.js
const Chat = require("./models/chat.js");

//requiring method overide
const methodOverride = require("method-override");

//making use of views
app.set("views" , path.join(__dirname, "views"));
app.set("view engine" , "ejs");

app.use(express.static(path.join(__dirname, "public")));  //css file ko access krne ke liye
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
main()
  .then(() => {
     console.log("Connection successfull");
  })
  .catch(err => console.log(err));

async function main() {
     await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//inserting in Chat
// let chat1 = new Chat({
//   from: "neha",
//   to: "priya",
//   msg: "Send me your exam sheets",
//   created_at: new Date()
// }); 

// chat1.save()
//    .then((res) => {
//     console.log(res);
//    }).catch((err)=> {
//       console.log("Some error in chat");
//    });

app.get("/" , (req , res) => {
  res.send(" root is Working");
});

//Index Route --> Show all chats
app.get("/chats" , async(req , res) => {
   let chats = await Chat.find();
   console.log(chats);

   //res.send("Working"); 
   res.render("show.ejs" , {chats});
});

//New Route --> adding new message
app.get("/chats/new" , (req , res)=> {
   res.render("new.ejs");
});

//Create Route --> adding the new message to db
app.post("/chats" , (req, res) => {
    let {from , to , msg} = req.body;
    
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date()
    });

    newChat.save()
        .then((res) => {
          console.log(" new Chat saved");
        })
        .catch((err) => {
          console.log("Error : chat not saved")
        });

    //console.log(newChat);
     res.redirect("/chats");
});  

//Edit Route
app.get("/chats/:id/edit" , async(req, res) => {
    let {id} = req.params;

    let chat = await Chat.findById(id);
    res.render("edit.ejs" , {chat});
});

//Update Route
app.put("/chats/:id", async(req, res)=>{
   let {id} = req.params;

   let {msg : newMsg} =req.body;

   let updatedChat = await Chat.findByIdAndUpdate(id , {msg: newMsg } , {runValidators: true , new: true});

   console.log(updatedChat);
   res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id" , async(req , res) => {
   let {id} = req.params;

   let deletedChat = await Chat.findByIdAndDelete(id);

   console.log(deletedChat);
   res.redirect("/chats");

});

app.listen(8070 , ()=> {
  console.log("Server is listening on port 8070");
});
