// 하나의 결과 값을 반환
// 특정 배열을 하나의 값으로 통합해서 계산할 때.
// 총합, 평균
// map, filter등 여러 배열 메서드 동작을 대부분 대체할 수 있음

//첫번째 인자가 누적값임.
const numbers = [90, 80, 70, 100]

// 총합

// 1
let sumNum = numbers.reduce(function (result, number) {
  console.log(result)
  return result+number
})

// sumNum = numbers.reduce(function (result, number) {
//   return result+number
// },0 ) // 배열이 빈배열 일때 이런식으로 초기값을 써줘야한다.
//첫번째 인자는 콜백함수, 두번째 인자 이니셜 밸류

console.log(sumNum)

//2
sumNum = numbers.reduce((result, number) => {
  console.log(result)
  return result + number}, 0)
console.log(sumNum)
//3
avgNum = numbers.reduce((result, number) => result + number , 0) / numbers.length
console.log(avgNum)