// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element  == 5){
       // console.log("5 is best number");
    }
    // console.log(element);//0 1 2 3 4  5 is best number 5 6 7 8 9
}

// console.log(element)// error

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and inner loop ${i} `) 
       // console.log(i + '*' + j + '=' + i * j);
    }
    
}
 
let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)// 3

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);// flash batman superman
}


// break and continue

for (let index = 0; index <=20; index++) {
    if(index == 5){
       // console.log(`Detected 5`)// 1 2 3 4 Detected 5
        break;
    }
   // console.log(`value of i is ${index}`)
    
}

for (let index = 0; index <= 20; index++) {
    if(index == 5){
       // console.log(`Detected 5`);//1 2 3 4 Detected 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20
        continue;
    }
    // console.log(`value of i is ${index}`);
    
}