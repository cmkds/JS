// forEach() 는 반환 값이 없다.

const colors = ['red', 'blue', 'green']

// 1. 콜백함수를 밖에서 정의 한것

const printClr = function (color) {
  console.log(color)
}

colors.forEach(printClr)


// 2. 첫번째 인자로 콜백함수가 쏙 들어간다.
//colors 변수를 하나씩 돌면서 각각에다가 이 함수를 적용시킨
//결과를 하나씩 내겠다 라는 것.
//파이썬의 map 과 비슷한 구조
colors.forEach(function (color) {
  console.log(color)
})

// 3. fucntion 지우고 => 표시
colors.forEach((color) =>{
  console.log(color)
})