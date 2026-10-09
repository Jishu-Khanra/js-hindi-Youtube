// Array

const myArr = [0, 1, 2, 3, 4]
//console.log(myArr[0])//0

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);//1

// Array methods

//myArr.push(6)
//console.log(myArr);//[0, 1, 2, 3, 4, 6]
//myArr.push(7)//[0,1,2,3,4,6,7]
//myArr.pop()//[0,1,2,3,4,6]


//myArr.unshift(9)
//console.log(myArr)//[9,0,1,2,3,4]

//myArr.shift()
//console.log(myArr)//[0,1,2,3,4]

//console.log(myArr.includes(9))//false
//console.log(myArr.indexOf(9))//-1
//console.log(myArr.indexOf(3))//4

const newArr = myArr.join()

//console.log(myArr)//[0,1,2,3,4]
//console.log(newArr)//0,1,2,3,4
//console.log(typeof newArr)//string

//+++++++++++++++ slice, Splice ++++++++++++++++++++++++


console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1)//A[0,1,2,3,4]//[1, 2]
console.log("B ",myArr)//B[0,1,2,3,4]

const myn2 = myArr.splice(1, 3)
console.log("C", myArr)//[0, 4]
console.log(myn2)//[1,2,3]
