# homework

1.

```javascript
T
자바스크립트는 한번에 한가지일만 처리 가능하다.
```



```js
F
Web API 에서 동작이 완료되면 Task Queue 로 이동하고, 이후 Call Stack 이 비면 Event Loop에 의해서 순차적으로 할당 된다.
```

2. 

```javascript
동기함수
- 자바스크립트는 single threaded 프로그래밍 언어로 한번에 한가지 일밖에 하지 못함.
- 동기적으로 동작을 하면 해당 작업이 끝날때 까지 다른 작업을 하지 못한다.

비동기 함수
- 자바스크립트는 비동기 함수를 만나면 해당 독작을 Web API에서 처리 할 수 있도록 실행 주체를 넘겨준다.
- 이렇게 실행 주체를 넘긴 다음에 자바스크립트는 동작이 완료될 때까지 기다리지 않고 바로 다음 코드를 실행한다.

@@ Web API 에서는 동작이 완료되었다면 해당 함수를 task queue로 할당하고 event loop는 현재 call stack을 바라보다가 call stack 이 비워지면 비동기 함수의 콜백함수를 Web API 에서 처리한 결과
```



3.

```js
a - querySelector

b - addEventListener

c - 'click'
```



