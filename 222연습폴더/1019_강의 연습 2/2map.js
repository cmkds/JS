const colors = ['red', 'blue','green']

// 함수로 만들어서 forEach 프린트 하기

// const a = function (변수){
//   console.log(변수)
// }

// colors.map(a);

// forEach 안에 함수 넣어서 프린트하기
// colors.map(function (변수){
//     console.log(변수)
// })


// 화살표 함수로 최적화 하기.
const b = colors.map((변수,인덱스,배열) =>{
  return (변수, 배열)
})

console.log(b)