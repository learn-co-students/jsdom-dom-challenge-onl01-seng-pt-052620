const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
let span = document.createElement("span");

let time = 0;
let isPaused = false;

minus.addEventListener("click", function() {
    counter.innerText = `${time --}`;
});

plus.addEventListener("click", function() {
    counter.innerText = `${time ++}`
});

heart.addEventListener('click', appendLike);

pause.addEventListener('click', function() {
    if (pause.innerText === 'pause') {
        pause.innerText = 'resume';
        buttons.forEach(function(el) { 
            el.disabled = true;
        });
        isPaused = !isPaused;
    } else {
        pause.innerText = 'pause';
        buttons.forEach(function(el) { 
            el.disabled = false;
        });
        isPaused = !isPaused;
    }
});

function appendLike(e) {
    let likes = document.querySelector('.likes');
    let currentTime = counter.innerText;
    span.innerHTML++;
    let li = document.getElementById(currentTime)

    if(li) {
        let text = li.innerText;
        let textArray = text.split(" ");
        let number = Number(textArray.slice(-2,-1));
        li.innerHTML = `${currentTime} has been liked ${number + 1} times`;
    } else {
        let li = document.createElement('li');
        li.setAttribute("id",currentTime)
        likes.appendChild(li);
        li.innerHTML = `${currentTime} has been liked 1 time`;
    }
};

function runCounter() {
    if (isPaused == false) {
        time++;
        counter.innerText = `${time}`;
        span.innerHTML = 0;
    }
}

submit.addEventListener('click', appendComment);

function appendComment(event) {
    event.preventDefault();
    let list = document.getElementById('list');
    let p = document.createElement('p');
    list.appendChild(p);
    let content = document.getElementById('comment-input');
    p.innerHTML = `${content.value}`;
    content.value = '';
}