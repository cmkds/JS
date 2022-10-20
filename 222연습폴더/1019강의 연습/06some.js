// 배열의 요소 중 하나라도 판별식을 통과하면 True
// 모든 요소가 통과하지 못하면 거짓
// 빈배열은 항상 false

const arr = [1,2,3,4,5]

// 1
let aa = function (elem) {
  return elem % 2 ===0  
}
let ne = arr.some(aa)
console.log(ne)

// 2
ne = arr.some(function (elem) {
  return elem % 2 ===0  
})
console.log(ne)

// 3
ne = arr.some((elem) =>{
  return elem % 2 ===0  
})
console.log(ne)

// 4
const result = arr.some((elem) => elem %2 ===0)
console.log(result)