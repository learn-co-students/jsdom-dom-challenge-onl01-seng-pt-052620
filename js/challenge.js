let counterNode = document.getElementById('counter');

let counter = setInterval( () => {
  counterNode.innerText = parseInt(counterNode.innerText) + 1;
},1000);

function decrementCounter() {
  const userInput = document.getElementById('minus');
  userInput.addEventListener('click', () => {
    counterNode.innerText = parseInt(counterNode.innerText) - 1;
  })
}

function incrementCounter() {
  const userInput = document.getElementById('plus');
  userInput.addEventListener('click', () => {
    counterNode.innerText = parseInt(counterNode.innerText) + 1;
  })
}

function addLikeToNumber() {
  let likedNumbers = [];
  const userInput = document.getElementById('heart');
  userInput.addEventListener('click', () => {
    const currentNumber = document.getElementById('counter').innerText;
    if (likedNumbers.includes(currentNumber) === false) {
      const newListItem = document.createElement('li');
      newListItem.id = currentNumber;
      newListItem.innerText = `${currentNumber} has been liked 1 time`;
      document.querySelector('.likes').appendChild(newListItem);
      likedNumbers.push(currentNumber);
    } else {
      const oldListItem = document.getElementById(currentNumber);
      likedNumbers.push(currentNumber);
      const likedCount = likedNumbers.filter(e => e == currentNumber).length;
      oldListItem.innerText = `${currentNumber} has been liked ${likedCount} times`;
    }
  });
}

function pauseCounter() {
  const userInput = document.getElementById('pause');
  userInput.addEventListener('click', () => {
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const heart = document.getElementById('heart');
    const submit = document.getElementById('submit');
    if (userInput.className != 'stopped') {
      clearInterval(counter);
      userInput.innerText = 'resume';
      userInput.className = 'stopped';
      minus.setAttribute('disabled', '');
      plus.setAttribute('disabled', '');
      heart.setAttribute('disabled', '');
      submit.setAttribute('disabled', '');
    } else {
      counter = setInterval( () => {
        counterNode.innerText = parseInt(counterNode.innerText) + 1;
      },1000);
      userInput.innerText = 'pause';
      userInput.className = '';
      minus.removeAttribute('disabled');
      plus.removeAttribute('disabled');
      heart.removeAttribute('disabled');
      submit.removeAttribute('disabled');
    }
  })
}

function addComment() {

  const userSubmit = document.getElementById('submit');
  const commentSection = document.getElementById('list');
  userSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const userInput = document.getElementById('comment-input');
    const newComment = document.createElement('li');
    newComment.innerText = userInput.value;
    commentSection.appendChild(newComment);
    userInput.value = '';
  })
}

decrementCounter();
incrementCounter();
addLikeToNumber();
addComment();
pauseCounter();