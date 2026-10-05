//primitive


 // 7 types: String, Number ,Boolean,Null,undefined, symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;//undefined

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);//false

 const bigNumber = 4987698487897881114554n



 // Reference(Non primitive)

 //Array ,Objects, Functions 

 const heros = ["shaktiman","naagraj","doga"]//Array

let myObj= {//Object
    name:"jishu",
    age:20,
 }

const myFunction = function(){
   console.log("hello world");
}


console.log(typeof bigNumber)//undefined
console.log(typeof outsideTemp);//object
console.log(typeof scoreValue);//number
console.log(typeof myFunction);//function(bola hoi etake object function)
console.log(typeof anotherId);//Symbol


//pleace read ecma script typeof operator for interview purpose
//link:- //https://262.ecma-international.org/5.1/#sec-11.4.3