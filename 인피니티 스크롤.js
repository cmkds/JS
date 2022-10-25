// - infinite scroll
// - body에 해당하는 text 부분은
    
// `lorem1000` + tab을 통해 생성 가능


<script>
    window.addEventListener('scroll', function(){
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight){

        console.log('바닥이다!')
        
        const div = document.createElement('div')
        div.innerText = "새로운 글이다!"

        const body = document.querySelector('body')
        body.append(div)
      }
 
    })

  </script>