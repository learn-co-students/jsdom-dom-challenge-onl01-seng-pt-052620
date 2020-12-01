let num;

function begin() {
    num = setInterval(numCount, 1000);
}

begin();

function myNodes(bool){
    let myNodeList = document.getElementsByTagName('button');

    for (let i = 0; i < myNodeList.length; i++)
    {
        if (myNodeList[i].id == 'pause')
        {
            continue;
        }
        myNodeList[i].disabled = bool;
    }
}

function numCount() {
    let countElem = document.getElementById('counter');
    let countStart = document.getElementById('counter').textContent;

    countElem.innerText = parseInt(countStart, 10) + 1;
}


function pauseCount() {
    
    let restartCount = document.getElementById('pause');
    

    if (restartCount.textContent == 'resume') {
        this.innerText = 'pause';
        myNodes(false);
        begin();
    }
    else {
        this.innerText = 'resume';
        clearInterval(num);
        myNodes(true);
    }
    
}

function minusCount() {
    let countElem = document.getElementById('counter');
    let numDiff = document.getElementById('counter').textContent;
    
    countElem.innerText = parseInt(numDiff, 10) - 1;
}

function addCount() {
    let countElem = document.getElementById('counter');
    let numAdd = document.getElementById('counter').textContent;
    
    countElem.innerText = parseInt(numAdd, 10) + 1;
}




let amountLikes = {};
document.getElementById('pause').addEventListener('click', pauseCount);
document.getElementById('minus').addEventListener('click', minusCount);
document.getElementById('plus').addEventListener('click', addCount);
document.getElementById('heart').addEventListener('click', function(e) {

    let currentNum = document.getElementById('counter').innerText;
    amountLikes[currentNum] ? (amountLikes[currentNum] += 1) : (amountLikes[currentNum] = 1)

    let likedList = document.querySelector('.likes');
    likedList.innerText = "";

    for(let number in amountLikes) {
        let newList = document.createElement('LI');
        newList.innerText = (`${number} is liked ${amountLikes[number]}  times`);
        likedList.appendChild(newList);
        console.log(amountLikes);
    }
    
});



document.getElementById('comment-form').addEventListener('click', function(e) {
    let textBox = document.getElementById('comment-input').value;
    
    let node = document.createElement('P');
    let textNode = document.createTextNode(textBox);
    node.appendChild(textNode);
    document.querySelector('div').appendChild(node);

    e.preventDefault();
}, false);