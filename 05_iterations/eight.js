// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval){
    // console.log(`acc: ${acc} and currval: ${currval}`);// acc: 0 and currval 1, acc: 1 and currval: 2, acc:3 and currval:3
    // return acc + currval
  //  return acc + currval
//}, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

//console.log(myTotal);// 6


const shoppingcart =[
 {
    itemName: "js course",
    price:2999
},
{
    itemName: "py course",
    price:1999
},
{
    itemName:"",
    price:5999
},
{
    itemName:"data science course",
    price:12999
}
]

const priceToPay = shoppingcart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);// 23996