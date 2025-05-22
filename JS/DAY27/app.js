//1. For random cat facts
let btn1 = document.querySelector(".button1");

btn1.addEventListener("click" ,async()=>{
     let fact = await getFacts();
     console.log(fact); 
     
     let p = document.querySelector("#result1");
     p.innerText = fact;
});

let url1 = "https://catfact.ninja/fact";

async function getFacts(){
    try{
       let res = await axios.get(url1);
       return res.data.fact;
    } 
    catch(error){
       console.log(`Error is : ${error}`);
       return "NO FACT FOUND";
    }
}

//2. For dog API 
let btn2 = document.querySelector(".button2");

btn2.addEventListener("click" , async() => {
   let link = await getPics();
   console.log(link);

   let img = document.querySelector("#result2");
   img.setAttribute("src",link);

});

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getPics(){
     try{
          let res = await axios.get(url2);
          return res.data.message;
     }
     catch(error){
          console.log(`Error is : ${error}`);
          return "NO Image FOUND";
     } 
}

//3. sending Headers with Axioms
const url3 = "https://icanhazdadjoke.com/";

async function getJokes(){
    try{
     //this is the header
      const config = {headers: {Accept: "application/json"} };  //this converts data into json
      let res = await axios.get(url3 , config);
      console.log(res.data);  //we are getting data in form of html , but we need it in json format (so we have to use headers (type : value))
    }  
    catch(error){
      console.log("Error is ---", error);
    }
}

getJokes();

//4. Axioms --> Updating Query Strings
let url4 = "http://universities.hipolabs.com/search?name=";

let btn3 = document.querySelector(".button3");

btn3.addEventListener("click", async() => {
     let country = document.querySelector("input").value;
     console.log(country);

     let colleges = await getColleges(country);
     
     show(colleges);
}); 

async function getColleges(country){
   try{
     let res = await axios.get(url4 + country);
     return res.data ;
   }
   catch(error){
     console.log("Error is :",error);
     return [];
   }
}

function show(colleges){
     let list = document.querySelector("#list");
     list.innerText = "";
     
     for(college of colleges){
        console.log(college.name);

        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);  
     }
}
 