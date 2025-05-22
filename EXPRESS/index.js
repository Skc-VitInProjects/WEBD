// .listen : makes a request
//  .use : confirms that a request is recieved
//  res.send : sends the response


//Step-1
const express = require("express");  //express ko install kar liya hai , ab use import kar rhe hain

const app = express();    //yeh hamara function jo bhi return karta hai use hm app mein store kraate hain

console.dir(app);

//step-2
let port = 8080;    //endpoint of network connection 

//------step-3-----
//making connection with the server
app.listen(port , () => {  //requesting
     console.log(`app is listening on port ${port}`);
});

//step-4 --> tells the sent request is recieved
app.use((req , res ) => {
     console.log("request recieved");
     
     // -----step5 --> we use res.send function to send a response 

     //res.send("this is a basic response");        
     // res.send({
     //      name : "apple",
     //      color : "red"
     // });

     let code ="<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>";
     res.send(code);


}); 