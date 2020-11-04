//falsy all false value bellow
//0
//""
//undefined
//null
//NaN
//false

//Truthy all true value bellow
//true
// "0", " ", [], {}



const age = 1; // true -if variable equal 1 or something without 0 then it's true.
const age2 = 0; //false -If variable equal 0 then it's false

const name = "" //false  -If dosen't have any thing in string. then it's false
const name2 = "solaiman" //true  - If have any text or space on string coat then it's true

let names2= null; // false -if there variable equal null then it's false
let names3= NaN; // false not a number .
let names = 10;
if( names || names == 0){
    console.log("Condition is true");
}else{
    console.log("Condition is false");
}