document.addEventListener("DOMContentLoaded", () => {

    const counterNode = document.getElementById("counter");
    
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const likeButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const commentButton = document.getElementById("submit");
    let counter = setInterval(incrementCounter, 1000);
    let counterNumber = parseInt(counterNode.innerHTML.trim(), 10);
    
    
    plusButton.addEventListener("click", incrementCounter);
    minusButton.addEventListener("click", decrementCounter);
    likeButton.addEventListener('click', likeCounter);
    pauseButton.addEventListener("click", pauseAction);
    commentButton.addEventListener('click', event => {
        event.preventDefault();
        let input = document.getElementById("comment-input");
        let commentsNode = document.getElementById("list");
        let newComment = document.createElement("li");
        newComment.innerText = input.value;
        commentsNode.appendChild(newComment);
        input.value = "";
    });

    function incrementCounter() {
        counterNumber++;
        counterNode.innerHTML = counterNumber.toString();
    };

    function decrementCounter() {
        let counterNumber = parseInt(counterNode.innerHTML.trim(), 10);
        counterNumber--;
        counterNode.innerHTML = counterNumber.toString();
    };

    const likes = [];

    function likeCounter() {
        const commentsSection = document.getElementById("likes");
        if (likes.includes(counterNumber)) {
            likes.push(counterNumber);
            const oldComment = document.getElementById(`${counterNumber}`);
            const totalLikes = likes.filter(num => num == counterNumber).length;
            oldComment.innerText = `${counterNumber} has been liked ${totalLikes} times`;
        } else {
            likes.push(counterNumber);
            const newComment = document.createElement('li');
            newComment.innerText = `${counterNumber} has been liked 1 time`;
            newComment.id = counterNumber;
            commentsSection.appendChild(newComment);
        };
    };

    function pauseAction() {
        clearInterval(counter);
        pauseButton.innerHTML = "resume";
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        commentButton.disabled = true;
        pauseButton.addEventListener("click", resumeAction);
    };

    function resumeAction() {
        pauseButton.innerHTML = "pause";
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        commentButton.disabled = false;
        counter = setInterval(incrementCounter, 1000);
        pauseButton.removeEventListener("click", resumeAction);
    };

});