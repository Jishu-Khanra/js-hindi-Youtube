const user = {
    username: "jishu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);// here this means current context.
        console.log(this);// sam, welcome to website
    }
}

// user.welcomeMessage()// jishu, welcome to website.
// user.username = "sam"
// user.welcomeMessage()// sam, welcome to website

console.log(this)// {}(empty object)  (browser ke andar jo object hai o he window object)

//function chai(){

  //  let username = "jishu"
   // console.log(this.username);// undefined
//}
//chai() 

//const chai = function (){
    //let username = "jishu"
  //  console.log(this.username)// undefined
//}

// Arrow function 
const chai = () =>{
    let username = "jishu"
    //console.log(this)// {}(empty string)
}
//chai()

// const addTwo = (num1, num2) =>{
 //   return num1  + num2;
// }
//console.log(addTwo(3, 4))// 7

// const addTwo = (num1, num2) => num1 + num2 // implicint return

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "jishu"})// {}{username: 'jishu'}
console.log(addTwo(3, 4))// 7

