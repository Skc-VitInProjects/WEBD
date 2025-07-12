const mongoose = require("mongoose");

//Schema
const chatSchema = new mongoose.Schema({
    from : {
      type : String,
      required : true
    }, 
    to : {
     type : String,
     required : true
    },
    msg : {
     type : String,
     maxLength : 50
    },
    created_at : {
     type: Date,
     required : true
    }
});

//models
const Chat = mongoose.model("Chat" , chatSchema);

//exporting the models to index.js
module.exports = Chat;