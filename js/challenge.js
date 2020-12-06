let count = 0;
let setCounter = document.getElementById("counter");
let likeCounter = {}
const buttonPause = document.querySelector("#pause")
const buttonPlus = document.querySelector("#plus")
const buttonMinus = document.querySelector("#minus")
const buttonHeart = document.querySelector("#heart")
const likesList = document.querySelector('ul.likes')

let likeCounterNum = count;


function increaseLikes(){
    if(likeCounter[likeCounterNum] > 1) {
        let newLikeCount = likeCounter[likeCounterNum] += 1;
        likesList.querySelector(`#num${likeCounter[likeCounterNum]}`).innerText = `Number ${likeCounter[likeCounterNum]} has ${newLikeCount} likes`
        return newLikeCount;
    } else {
        let newLike = document.createElement('li');
        newLike.id = count;
        newLike.innerText = `Number ${count} has 1 like`;
        likesList.appendChild(newLike);
        return 1;       
    }
}


document.addEventListener("DOMContentLoaded", function() {

    // function myCounter() {
    //     document.getElementById("counter").innerHTML = count++;
    // }
    function increaseCounter() {
        setCounter.innerHTML = count += 1;
         // counter++;
     }

     function decreaseCounter() {
        setCounter.innerHTML = count -= 1;
    }


    myIntervalTimer = setInterval(increaseCounter, 1000)



    buttonPause.addEventListener("click", function() {
        if(myIntervalTimer != null) {
            clearInterval(myIntervalTimer)
            myIntervalTimer = null;
            buttonPause.innerHTML = "Resume Counter"
        }else {
            myIntervalTimer = setInterval(increaseCounter, 1000);
            buttonPause.innerHTML = "Pause";
        }
            
    })

    buttonPlus.addEventListener("click", function() {
        increaseCounter();
    })

    buttonMinus.addEventListener("click", function() {
        decreaseCounter();
    })

    buttonHeart.addEventListener("click", function() {
        increaseLikes();
    })






    




  });

const commentForm = document.querySelector("#comment-form")
const newList = document.createElement("ul")
// const counter = document.querySelector("#counter")
// const counterInt = parseInt(counter)

let commentList = document.querySelector("#list").appendChild(newList)

// function counterUp() {
//     const counterInt = parseInt(counter)
//     if (counterInt < 1000) {
//         counterInt++
//         console.log(counterInt) 
//     }
// }


commentForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const newComment = document.getElementById("comment-input").value

    const commentItem = document.createElement("li")
    commentItem.innerText = newComment

    commentList.appendChild(commentItem)

    commentForm.reset()

})



