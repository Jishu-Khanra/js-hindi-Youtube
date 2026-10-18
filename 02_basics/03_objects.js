//singelton
//Object.create(constractor type)

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Jishu",
    "full name": "JISHU KHANRA",
   [mySym]: "myKey1",
    age:18,
    location:"Arambag",
    email:"jishukhanra@gmail.com",
    isLoffedinDays:false,
    lastLoginDays:["Monday","Saturday"]
    
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "jishu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "jishu@microsoft.com"
//onsole.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());