// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num  of arr) {
    // console.log(num);// 1 2 3 4 5 
}

const greetings = "Hello World"
for (const greet of  greetings) {
    // console.log(`Each char is ${greet}`)// H e l l o  W o r l d
}

// Maps

const map = new Map()// map always add unique element

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map)

for (const [key, value] of map) {
   // console.log(key, ':-', value) // IN :- India USA :- United States of America FR :- France
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [Key, value] of myObject) {
  //  console.log(Key, ':-', value) // Error
}

