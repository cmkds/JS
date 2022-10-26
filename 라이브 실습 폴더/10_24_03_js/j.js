const obj = {
  num : 10,
  printNum: function(){
    // console.log(this.num)
    const printNum2 = () => {
      console.log(this.num)
    }
    printNum2()
  }
}
obj.printNum()

//화살표 함수로 쓰면 너 함수일때 this 전역으로 찾아
// 동작안하고 상위 오브젝트를 찾는다.

const obj = {
  num : 10,
  printNum: function(){
    // console.log(this.num)
    const printNum2 = function(){
      console.log(this.num)
    }
    printNum2()
  }
}
obj.printNum()
