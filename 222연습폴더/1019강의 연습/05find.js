const avengers = [
  { name : 'Tony Stark', age: 45},
  { name : 'Steve Rogers', age: 32},
  { name : 'Thor', age: 40},
]

// 배열의 각 요소에 대해 콜백 함수를 한번씩 실행하면서
// 조건을 만족하는 첫번째 요소를 반환한다.
// 찾는 값이 배열에 없으면 undefined를 반환한다.

// 1
const avenger = avengers.find((avenger) => {
  return avenger.name === 'Tony Stark'
})

console.log(avenger)

// 2
const avenge = avengers.find((avenger) => avenger.name === 'Tony Stark')

console.log(avenge)