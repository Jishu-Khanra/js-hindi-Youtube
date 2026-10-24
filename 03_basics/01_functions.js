function sayMyName(){// function is my keyword, sayMyName is my reference and when we use parenthesis()thats mean execute
    console.log("j");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("u");

}

//sayMyName();// j i s h u

//function addTwoNumbers(number1, number2){//(number1 and number2 is your parameters)
 //console.log(number1 + number2);
//}

//addTwoNumbers()//NaN
//addTwoNumbers(3, 4)// 7//(3, 4 this is my arguments)

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result;
    
    //console.log("jishu")// this line never be executed cause functions rules said everything after return statement never be executed.

    return number1 + number2;
}


//const result = addTwoNumbers(3,5);//8

//console.log("Result:", result);//Result: undefined

function loginUserMessage(username = "sam"){// if we defined username will be sam thats mean if we do not push any input the username will be sam
    if(username === undefined){
       console.log("please enter a user name")
       return 
    }
    return `${username} just logged in`
}

//loginUserMessage("jishu")// this is function only return this you donnot say the function to execute the program.

//console.log(loginUserMessage("jishu"))// jishu just logged in
console.log(loginUserMessage())//please enter a user name, undefined
