const mongoose = require("mongoose");

main()
  .then(() => {
     console.log("Connection successfull");
  })
  .catch((err) => {
     console.log(err);
  })

  async function main(){
     await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
  }


  //Schema
//   const bookSchema = new mongoose.Schema({
//      title: {
//           type: String,
//           required: true,
//      },
//      author: {
//           type: String,
//      },
//      price: {
//           type: Number,
//      },
//   });

  const bookSchema = mongoose.Schema({
     title: {
          type: String,
          required: true,
     },
     author: {
          type: String,
     },
     price: {
          type: Number,
          min: [1 , "please enter a valid price"]   //error handling is done 
     },
     discount: {
          type: Number,
          default: 0
     },
     genre: [String],
     category: {
          type: String,
          enum: ["fiction" , "non-fiction"]
     }
  });

  //Models
  const Book = mongoose.model("Book" , bookSchema);

  //Insertion
//   let book1 = new Book({
//       title: "Mathematics XII",
//       author: "RD Sharma",
//       price: 800
//   });

//   book1.save().
//      then((res) => {
//       console.log(res);
//   }).catch((err) => {
//      console.log(err);
//   });

// let book2 = new Book({
//      title: "The Art Of War",
//      author: "Sun Tzu",
//      price: 250,
//      discount: 55,
//      genre: "Strategy",
//      category: "non-fiction"
// });

// book2.save()
//    .then((res) => { 
//       console.log(res);
//    })
//    .catch((err) => {
//      console.log(err);
//    }); 

//Validation in Updation
Book.findByIdAndUpdate("686ea3103a0283e09879de32" , {price: -340} , {runValidators: true})
   .then((res) => {
     console.log(res);
   }).catch((err) => {
     console.log(err.errors.price.properties.message); //price is category
   });


