const mongoose = require('mongoose');

// let url = "https://localhost:8080/users"; 
//mongoose.connect('mongodb://127.0.0.1:27017/test');   //test is the database name

main()
  .then((res) => {
     console.log("connection successful");
})
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Schema
const userSchema = new mongoose.Schema({
     name: String,
     email: String,
     age: Number,
});

//Models
const User = mongoose.model("User" , userSchema);
//const User1 = mongoose.model("Employee", userSchema);

//....................


//Insert in DB
//Insert One
// const user1 = new User({
//         name: "Adam" , 
//         email: "adam@yahoo.in",
//         age: 48 
// });

// user1.save();


// const user2 = new User({
//         name: "Eve",
//         email: "eve@yahoo.in",
//         age: 48
// });

// user2.save()
//   .then((res) => {
//      console.log(res);
// })
//   .catch((err) => {
//      console.log( err );
// });


//Insert Multiple
// User.insertMany([
//    {name: "Tony" , email: "tony@gmail.com", age: 50},
//    {name: "Peter" , email: "peter@gmail.com" ,age: 30},
//    {name: "Bruce" , email: "bruce@gmail.com" ,age: 47}
// ])
//   .then((res) => {
//     console.log(res);
//   });

//FIND
// User.find()
//   .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.find({age : {$gte: 48}})
//    .then((data) => {
//      console.log(data);
//    }).catch((err) => {
//      console.log(err);
//    });

// //FindOne
// User.findOne({age : {$gt : 49}})
//    .then((data) => {
//      console.log(data);
//    }).catch((err) => {
//       console.log(err);
//    });

// //FindById
// User.findById("686e795387369b44a292b33b")
//    .then((res) => {
//      console.log(res);
//    }).catch((err) => {
//      console.log(err);
//    });

// //UPDATE
// //updateOne
// User.updateOne({name: "Bruce"} , {name: "Hulk"})
//    .then((res) => {
//       console.log(res);
//    }).catch((err) => {
//       console.log(err);
//    });

// //UpdateMany
// User.updateMany({name : "Eve"} , {name: "EVA"})
//    .then((res) => {
//      console.log(res);
//    })
//    .catch((err) => {
//     console.log(err);
//    });


// //FindOne And Update
// User.findOneAndUpdate({name: "Bruce"} , {name: "HulkGreen"} , {new: true})
//    .then((res) => {
//      console.log(res);
//    })
//    .catch((err) => {
//      console.log(err);
//    });



//DELETE
//DeleteOne
// User.deleteOne({name: "Adam"})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//DeleteMany
// User.deleteMany({name: "EVA"})
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//FindByIdAndDelete
User.findByIdAndDelete("686e795387369b44a292b33e")
   .then((res) => {
     console.log(res);
   }).catch((err) => {
     console.log(err);
   });