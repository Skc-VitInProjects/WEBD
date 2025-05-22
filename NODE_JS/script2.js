//showing the use of imports

//here , we have to write the complete file name alongwith .js description
import {sum , g} from "./math2.js";

//we can also import files 

console.log(sum(79,67));
console.log("The gravity is :", g);
console.log("the product is :" , sum(5,7) * g);

//and , we can also import multiple dependenies as well
import { generate } from "random-words";

console.log(generate());