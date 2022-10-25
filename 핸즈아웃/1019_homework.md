# homework

1.

```javascript
1 F
유효 범위도 var는 함수스코프 / let, const는 블록 스코프로 다르고.
var는 재선언 재할당이되고
let은 재선언이 안되고 재할당만 된다.
const 는 재선언 재할당 모두 안된다. 

2 F
타입연산자 typeof 에서
undefined는 undefined 로 나오는데
null 은 object 으로 나온다. 이는 자바스크립트의 설계상 버그이다.
 
3 F
for ... in 문은 배열의 객체의 속성을 순회한다. 요소에 활용하는 경우 순서가 뒤바뀔수 있고 값이 제대로 표시 안될 수 있다.
배열의 각 요소를 순회하고 싶으면 for ... of 를 사용해야한다.
 
4 F
타입이 같은 지 비교하는 것은 === 연산자이다. ==은 타입을 암묵적으로 변환하여 같은지 비교한다.


```





2.

```javascript
const numbers = [1,2,3,4,5]
```



1)

```javascript
for (number of numbers) {
  console.log(number)
}
```

2)

```javascript
const newLst =[]
for (number of numbers){
  newLst.push(number+10)
}
console.log(newLst)
```

3)

```javascript
const newLst2 =[]
for (number of numbers){
  if (number % 2 === 1) {
    newLst2.push(number)
  }
}
console.log(newLst2)
```

4)

```javascript
let a = 0
for (number of numbers){
  a += number
}
console.log(a)
```









