// map 이랑 똑같은 조건인데
// 거기서 true인 애들만 걸러 준다.

// 객체를 요소로 가지는 배열
const products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit'},
  { name: 'carrot', type: 'vegetable'},
  { name: 'apple', type: 'fruit'},
]


// 1
let fruitFilter = function (product) {
  return product.type === 'fruit' 
  //객체의 속성값은 .으로 접근할 수 있다.
}

let newArry = products.filter(fruitFilter)

console.log(newArry)

// 2 콜백함수 인자에 넣기

newArry = products.filter(function (product) {
  return product.type === 'fruit' 
})

console.log(newArry)

//3 function 지우고 화살표 표시

newArry = products.filter((product) => {
  return product.type === 'fruit' 
})

console.log(newArry)