// 모든 요소가 주어진 판별 함수를 통과하면 참
// 하나라도 통과하지 못하면 거짓
// 빈 배열은 항상 true

const arr = [1,2,3,4,5]

// 1
let aa = function (elem) {
  return elem % 2 ===0  
}
let ne = arr.every(aa)
console.log(ne)

// 2
ne = arr.every(function (elem) {
  return elem % 2 ===0  
})
console.log(ne)

// 3
ne = arr.every((elem) =>{
  return elem % 2 ===0  
})
console.log(ne)

// 4
const result = arr.every((elem) => elem %2 ===0)
console.log(result)