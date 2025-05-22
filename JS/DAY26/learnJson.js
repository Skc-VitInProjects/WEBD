let jsonRes = 
       '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';
console.log(jsonRes);

let validRes = JSON.parse(jsonRes);  //changes from json data to js object
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);

//changes from javascript object to Json 
let student = {
     name : "Skand Kumar Choubey",
     marks: 89,
     age: 23
};

let jsonRes2 = JSON.stringify(student);
console.log(jsonRes2);



//making our first API request
let url = "https://catfact.ninja/fact";

fetch(url)
  .then((response) => {
     return response.json();  //parse the data
  })
  .then((data1) => {
     console.log("data1 :",data1.fact);
     return fetch(url);
  })
  .then((response) => {
     return response.json();
  })
  .then((data2) => {
     console.log("data2 :",data2.fact);
  })
  .catch((error) => {
     console.log("Error --:",error);
  }); 

//using fetch with async / await 
let url_link = "https://catfact.ninja/fact";

async function getFacts(){
     try{
          let res1 = await fetch(url_link);
          let data1 = await res1.json();
          console.log("Data1 is :",data1.fact);

          let res2 = await fetch(url_link);
          let data2 = await res2.json();
          console.log("Data2 is :",data2.fact);
     }
     catch(err){
          console.log("Error is --:",err);
     }   
}

getFacts();