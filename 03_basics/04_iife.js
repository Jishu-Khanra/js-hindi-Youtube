// Immediately Invoked Function Expressions(IIFE)
// definatin :- jo function imediately execution ho jai and  global scope ke polution se problem hota hai kahi ber usse bachne ke liye hum iife use karte hai
(function chai(){

    // named iife
    console.log(`DB CONNECTED`);
})();// DB CONNECTED

//()// function defination()// execution call


( (name) => {
    // unnamed iife
     console.log(`DB CONNECTED TWO ${name}`)
} ) ('jishu')// DB CONNECTED TWO jishu
