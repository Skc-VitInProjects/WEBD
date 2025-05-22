//Q.1
function findLarge (arr){
     let lar = 0 ;
     for(let i = 0 ; i < arr.length ; i++){
          if(arr[i] > lar){
               lar = arr[i];
          }
     }
     return lar;
}

let arr = [4, 8 ,90 ,3 , 56, 0];
console.log(`the largest in array is ${findLarge(arr)}`);

//Q.2
function unique(str){
     let ans="";
     for(let i = 0 ; i < str.length ; i++){
        if( ans.indexOf(str.charAt(i)) == -1){
             ans += str.charAt(i);
         }
     }
     return ans;
}
let str = "abcdabcdefgggh";
console.log(unique(str));

//Q.3
function longestCountry(list){
      let size = 0 ;
      let country = "";
      for(let i =0 ; i< list.length ; i++){
          if(list[i].length > size){
               size = list[i].length;
               country = list[i];
          }
      }
      return country;
}

let list = ["Australia" , "Germany of hindustan and syria" , "United States Of America"];
console.log(longestCountry(list));

//Q.4
function countVowel (str1){
     let vowel = ["a","e" , "i" , "o" , "u"];
     let count = 0 ;
     for(let i = 0 ; i < str1.length ; i++){
          for(let j=0 ; j < vowel.length ; j++){
               if(str1.charAt(i) == vowel[j]){
                    count++;
               }
          }
     }
     console.log(`the total count of vowels is ${count}`);
}

countVowel("skand");
countVowel("umbrella");

//Q.5
function generateRandom (start,end){
     let rd = Math.floor(Math.random()*(end-start))+start;
     console.log(`the rd b/w ${start} and ${end} is ${rd}`);
}

generateRandom(4,9);

