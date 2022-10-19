// console.log('hello, javascript')

// 함수 선언식
function name(params) {

}

function add(num1, num2) {
  return num1 + num2
}

console.log(add(2, 7))   // 9

// 함수 표현식
// 함수 표현식은 함수의 이름을 생략한 익명 함수로 정의 가능

// 변수키워드 함수명 = function() {
//   // do something
// }

const sub = function (num1, num2) {
  return num1 - num2
}

console.log(sub(2, 7))

const greeting = function (name = 'Anonymous') {
  return `Hi ${name}`
}

console.log(greeting())


const numbers = [1,2,3,4,5]

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers.length)
console.log(numbers[numbers.length-2])

numbers.reverse()
console.log(numbers)

numbers.push(100)
console.log(numbers)

numbers.pop()
console.log(numbers)


console.log(numbers.includes(1))
console.log(numbers.includes(100))

console.log(numbers.indexOf(3))
console.log(numbers.indexOf(100))

console.log(numbers.join())  // 생략시 쉼표가 기본 값임
console.log(numbers.join(''))
console.log(numbers.join(' '))
console.log(numbers.join('-'))



