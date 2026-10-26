//let a = 10
//const b = 20
//var c = 30
//{}//scope
//var c = 300//global scope
let a = 300
if(true){// block scope
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER:", a)//INNER:10

}


//console.log(a);//300
//console.log(b);//20
//console.log(c);//30

function one(){
    const username = "jishu"

    function two(){
        const website = "youtube"
        console.log(username)
    }
   // console.log(website)// the two function is done thats why the line not be executed. 

    two()
}

//one()//jishu


if(true){
    const username = "jishu"
    if(username === "jishu"){
        const website = " Instagram"
        // console.log(username + website);// jishu Instagram
    }
   // console.log(website)//error
}

// console.log(username)//error

//++++++++++++++++++++++++ interesting +++++++++++++++++++


addone(5)//6

function addone(num){
    return num + 1
}

// hoisting 
addTwo(5)//error

const addTwo = function(num){
    return num + 2;

}

