// Dates

let myDate = new Date()
//console.log(myDate.toString())// todays date, time and day
//console.log(myDate.toDateString())  // today day date(fri oct 09 2026)
//console.log(myDate.toISOString())  //2026-10-09T02:20:20.739z
//console.log(myDate.toJSON())  //2026-10-09T02:20:20.739z
//console.log(myDate.toLocaleDateString()) // 10/9/2026
//console.log(myDate.toLocaleString())  // 10/9/2026, 2:20:20 AM

//console.log(myDate.toUTCString()) // Fri, 09 oct 2026 02:20:20 GMT 
 
//console.log(typeof myDate) //object


//let myCreatedDate = new Date(1946, 0, 23)
//console.log(myCreatedDate.toDateString())// Wed jan 23 1946

//let myCreatedDate = new Date(1946, 0, 23)//1/23/1946,12:00:00 AM
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString())//1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

//console.log(myTimeStamp) //1791513730267(mili second)
//console.log(myCreatedDate.getTime())//1673654400000
//console.log(Math.floor(Date.now()/1000))//1791513879(seconds)

let newDate = new Date()
//console.log(newDate)//2026-10-09T02:49:07.985z
//console.log(newDate.getMonth() + 1)// 10(its october)
//console.log(newDate.getDay())//5(friday)

newDate.toLocaleString('default',{
    weekday:"long"
})