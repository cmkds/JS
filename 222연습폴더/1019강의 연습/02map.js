//배열의 각 요소에 대해 콜백함 수를 한 번씩 실행하고
//forEach 와 달리 콜백 함수의 반환 값들을 요소로 하는
// 새로운 배열을 반환한다.

// forEach + return 이라고 생각하면 된다.

const numbers = [1,2,3,4,5]


// 1
let doubleEle = function (number) {
  return number * 2
}

let newArry = numbers.map(doubleEle)

console.log(newArry)

//2  콜백함수를 인자에 바로 넣기

newArry = numbers.map(doubleEle = function (number) {
  return number * 2
})

console.log(newArry)
//3  function 지우고 화살표 만들기
newArry = numbers.map(doubleEle = (number) => {
  return number * 2
})

console.log(newArry)

//4  중괄호와 리턴 지우기

newArry = numbers.map(doubleEle = (number) => number * 2)

console.log(newArry)