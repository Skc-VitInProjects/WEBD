const mongoose = require('mongoose');

main()
.then(()=>  console.log("successfull connection"))
.catch((err) => console.log(err));

async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

//Approach 2
const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,

});


const customerSchema = new mongoose.Schema({
     name: String,
     orders: [
          {
               type: mongoose.Schema.Types.ObjectId,  //populate
               ref: "Order"    //name of collection
          }
     ]
});



//Middlewares

// customerSchema.pre("findOneAndDelete" , async() => {
//      console.log("PRE MIDDLEWARE");
// });

customerSchema.post("findOneAndDelete", async(customer) => {
     // console.log("POST MIDDLEWARE");
     
     if(customer.orders.length){
          let res = await Order.deleteMany({_id: {$in: customer.orders}});
          console.log(res);
     }
});


const Order = mongoose.model("Order" , orderSchema);

const Customer = mongoose.model("Customer", customerSchema);


// const addOrders = async() => {
//      let res = await Order.insertMany([
//          {item:"Samosa", price: 12},
//          {item: "Chips" , price: 10},
//          {item: "Chocolate" , price: 40}
//     ]);

//     console.log(res);
// };

// addOrders();

const addCustomer = async() => {
     // let cust1 = new Customer({
     //     name: "Rahul",
     // });

     let newCust = new Customer({
          name: "Kavi"
     });

     let newOrder = new Order({
          item: "soup",
          price: 35
     });

     newCust.orders.push(newOrder);

     await newOrder.save();
     await newCust.save();

     console.log("added new customer");

     // //find the orders from database
     // let order1 = await Order.findOne({item : "Chips"});
     // let order2 = await Order.findOne({item: "Chocolate"});


     // //push the orders inside the database
     // cust1.orders.push(order1);
     // cust1.orders.push(order2);

     // let res = await cust1.save();

     // console.log(res);

};

//addCustomer();


//Functions
const findCustomer = async() => {
    // let result = await Customer.find({});
    let result = await Customer.find({}).populate("orders");
    console.log(result);
};

findCustomer();


//deletion
const delCust = async() =>{
    let data = await Customer.findByIdAndDelete("68b3eb6d16ba791201659db6");
    console.log(data);
}

delCust();