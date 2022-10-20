const numbers = [1,2,3,4,5]

//1
for (number of numbers) {
  console.log(number)
}

//2
const newLst =[]
for (number of numbers){
  newLst.push(number+10)
}
console.log(newLst)
//3
const newLst2 =[]
for (number of numbers){
  if (number % 2 === 1) {
    newLst2.push(number)
  }
}
console.log(newLst2)

//4
let a = 0
for (number of numbers){
  a += number
}
console.log(a)