//primitive


 // 7 types: String, Number ,Boolean,Null,undefined, symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;//undefined

 const id = Symbol('123')
 const anotherId = Symbol('123')

 //console.log(id === anotherId);//false

 const bigNumber = 4987698487897881114554n



 // Reference(Non primitive)

 //Array ,Objects, Functions 

 const heros = ["shaktiman","naagraj","doga"]//Array

let myObj= {//Object
    name:"jishu",
    age:20,
 }

const myFunction = function(){
   //console.log("hello world");
}


//console.log(typeof bigNumber)//undefined
//console.log(typeof outsideTemp);//object
//console.log(typeof scoreValue);//number
//console.log(typeof myFunction);//function(bola hoi etake object function)
//console.log(typeof anotherId);//Symbol


//pleace read ecma script typeof operator for interview purpose
//link:- //https://262.ecma-international.org/5.1/#sec-11.4.3



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack(Primitive) , Heap(Non-Primitive)


//primitive

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename); //hiteshchoudharydotcom
console.log(anothername);  // chaiaurcode
// cause primitive e orginial value change hoi na stack theke ekta copy dei sei copy ta change hoi tai 2 to alada value represent hochhe.

// non primitive

let userOne = {
   email:"user@gmail.com",
   upi:"user@ybl"
}

let userTwo = userOne
 userTwo.email = "hitesh@google.com"
  
 console.log(userOne.email);//hitesh@gmail,com
 console.log(userTwo.email);//hitesh@gmail,com
 // non-primitive e kono kichu change korle original value te change hoi.
 
