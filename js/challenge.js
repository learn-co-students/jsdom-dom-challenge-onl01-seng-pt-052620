const counter = document.getElementById("counter")
function decrementCounter() {
   let minus=  document.getElementById("minus")
   minus.addEventListener("click", () => {
    counter.innerText =  parseInt(counter.innerText) - 1
   } )
}
decrementCounter()

function incrementCounter() {
    let plus=  document.getElementById("plus")
    plus.addEventListener("click", () => {
     counter.innerText =  parseInt(counter.innerText) + 1
    } )
 }

 incrementCounter()


 let start = setInterval( () => {
    counter.innerText =  parseInt(counter.innerText) + 1
  }, 1000)

  

  function pauseCounter(){
      let pause = document.getElementById("pause")
      pause.addEventListener("click",() =>{ 
          if (pause.className == "stopped") {
              pause.className = ""
              document.getElementById("minus").disabled = false;
              document.getElementById("plus").disabled = false;
              document.getElementById("heart").disabled = false; 
              document.getElementById("submit").disabled = false;
              pause.innerHTML = "pause"
              start = setInterval( () => {
                counter.innerText =  parseInt(counter.innerText) + 1
              }, 1000)

          }
          else {
              clearInterval(start)
              document.getElementById("minus").disabled = true;
              document.getElementById("plus").disabled = true;
              document.getElementById("heart").disabled = true; 
              document.getElementById("submit").disabled = true;
              pause.innerHTML = "restart"
              pause.className = "stopped"
            
          } 
          
          
          
      })
  }

  pauseCounter()





  let button = document.getElementById("submit")
    button.addEventListener("click", (e) => {
      e.preventDefault()
     let comment= document.getElementById("comment-input").value
     let comment2= document.createElement("li")
     comment2.innerHTML = comment
     let list = document.getElementById("list")
     list.appendChild(comment2)
    })


    let heart = document.getElementById("heart")
    let favNumbers = []
    heart.addEventListener("click",() => {
    let like = counter.innerHTML
     if  (favNumbers.includes(like) === false) {
         favNumbers.push(like)
        let heart1= document.createElement("li")
        heart1.id = like 
        heart1.innerHTML = `Number ${like}, has been liked 1 time`
        let heartList = document.querySelector(".likes")
        heartList.appendChild(heart1)
     }

    else {
       favNumbers.push(like)
       let heartCount =  document.getElementById(like)
       let totalCount= favNumbers.filter(e => e == like).length
       heartCount.innerHTML = `Number ${like}, has been liked ${totalCount} times`

    }



     
    })
    

    

