const mongoose = require('mongoose');

main()
.then(()=>  console.log("successfull connection"))
.catch((err) => console.log(err));

async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}


const userSchema = new mongoose.Schema({
     username: String,
     addresses: [
          {
               _id: false,
               location: String,
               city: String,
          },
     ]
});

const User = mongoose.model("User" , userSchema);

//One to Few
const addUsers = async() => { //parent
     let user1 = new User({
          username: "sherlockholmes",
          addresses: [{      //child
               location : "221B Baker Street",
               city : "London"
           }]
     })

     user1.addresses.push({location: "P32 WallStreet" , city: "London"});
     let result = await user1.save();
     console.log(result);
};

addUsers();

