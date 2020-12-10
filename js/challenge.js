const state = {
    count: 0,
    paused: false,
    likes: {}
}

const counter = document.getElementById("counter")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const pause = document.getElementById("pause")
const form = document.getElementById("comment-form")
const list = document.getElementById("list")
const likeList = document.querySelector(".likes")
const heart = document.getElementById("heart")

setInterval(() => count(1), 1000)
//an anonymous function that calls count with an argument of 1

function count(num) {
    if (!state.paused){
    state.count += num
    counter.innerText = state.count
    }
}

function like() {
    (state.likes[state.count]) ? state.likes[state.count] ++ : state.likes[state.count] = 1
    renderLikes()
}

function renderLikes() {
    likeList.innerHTML = ""
    Object.entries(state.likes).forEach(likeArray => {
        const second = likeArray[0]
        const likes = likeArray[1]
        renderLike(second, likes)
    })
}

function renderLike(second, likes) {
    const li = document.createElement("li")
    li.innerText = `${second} has been liked ${likes} time${state.likes[second] === 1 ? "" : "s"}.`
    likeList.appendChild(li)
}

function pauseApp() {
    state.paused = !state.paused
    document.querySelectorAll("button").forEach(button => {
        if (button.id !== "pause") {
            button.disabled = !button.disabled
        }
    })
    pause.innerText = state.paused ? "resume" : "pause"
}
//toggle

function addComment(e) {
    e.preventDefault()
    let input = form.comment.value
    const comment = document.createElement("p")
    comment.innerText = input
    list.appendChild(comment)
    form.reset()
}


plus.addEventListener("click", () => count(1))
minus.addEventListener("click", () => count(-1))
heart.addEventListener("click", like)
pause.addEventListener("click", pauseApp)
form.addEventListener("submit", addComment)