const name = "Jishu"
const repoCount = 50
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`jishu-hc-com`)

// console.log(gameName[1]); //i
// console.log(gameName.__proto__);//{}//object


//console.log(gameName.length); // 5
//console.log(gameName.toUpperCase()); //JISHU
//console.log(gameName.charAt(2)); //s
//console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4)
//console.log(newString) // jish

const anotherString = gameName.slice(-5,4)
//console.log(anotherString); // jish

const newStringOne = "      jishu      "
//console.log(newStringOne);//    jishu    .
//console.log(newStringOne.trim()); // jishu(space remove)

const url = "https://jishu.com/jishu%20khanra"
//console.log(url.replace('%20','-')) // https://jishu.com/jishu-khanra

//console.log(url.includes('jishu')) // true
//console.log(url.includes('suman')) // false

console.log(gameName.split(('-'))) // ['jishu','hc','com' ]
