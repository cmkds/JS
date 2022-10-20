const myInfo = {
  name: 'jack',
  phoneNumber: '123456',
  'samsung product': {
    buds: 'Buds pro',
    galaxy: 'S99',
  },
}
  //key 중간에 띄어쓰기가 있는 경우는
  // ''로 씌워줘야 한다.
console.log(myInfo.name)
console.log(myInfo.phoneNumber)
console.log(myInfo['name'])
console.log(myInfo['samsung product'])
console.log(myInfo['samsung product'].galaxy)

const obj = {
  name: 'jack',
  greeting() {
    console.log('h1!')
  }
}

console.log(obj.name)
console.log(obj.greeting())
