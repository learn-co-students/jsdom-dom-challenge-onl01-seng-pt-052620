//* A Counter that increases by 1 each second
//* Plus and Minus buttons that increment or decrement the counter
//* A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
//* A comment box that adds comments when submitted
//1. As a user, I should see //the timer increment every //second once the page has //loaded.
//2. As a user, I can manually //increment and decrement the //counter using the plus and //minus buttons.
//3. As a user, I can 'like' an //individual number of the //counter. I should see count //of the number of 'likes' //associated with that number.
//4. As a user, I can pause the //counter, which should 
//
//  * pause the counter
//  * disable all buttons //except the pause button
//  * the pause button should //then show the text "resume."
//
//  When 'resume' is clicked, //it should restart the //counter and re-enable the //buttons.
//5. As a user, I can leave //comments on my gameplay, such //as: "Wow, what a fun game //this is."

/*
## Data
counter(integer)
likeCounter(Object w/keys of numbers & values of how many likes they have) {1: 2, 2: 0, 3: 3}
comments {array of strings}

## Display ( what pieces of html will house are data?)
h1#counter => counter
ul.likes => likesCounter
#list => comments

## Behavior (Events)
DOMContentLoaded => attach Listeners, start counter
click on plus
click on minus
click on heart
click on pause 
click on resume-needs to do something diff. than pause button
submit comment form

##Update Data
incrementCounter()
decrementCounter()
increaseLikes()-needs number when we click on like
pause()
resume()
addComment()
## Display New Data by DOM Manipulation
when we click on plus we call incrementCounter() and update the counter h1 innerText
When we click on minus we call decrementCounter() and update the counter h1 innerText
When we click on the heart we call increaseLikes(number) and update our list of likes (ul.likes)
When we click on pause we call pause(), disable all the buttons (except pause) and relabel the button
as 'resume'
When we click on resume, we call resume(), reenable all the buttons and relabel the button pause 
when we submit the add comment form, we call addComment() and append the comment to divlist

start w/Object Oriented by defining a counter class
*/

class Counter {
    constructor() {
        this.count = 0;
        this.likeCount = {},
        this.counterH1 = document.querySelector('h1#counter')
        this.likesList = document.querySelector('ul.likes')
        this.minusButton = document.querySelector('#minus')
        this.plusButton = document.querySelector('#plus')
        this.heartButton = document.querySelector('#heart')
        this.pauseButton = document.querySelector('#pause')
        this.interval = setInterval(() => this.incrementCount(), 1000) 
    }
    
    //start() {
    //    this.interval = setInterval(() => this.incrementCount(), 1000) 
    //    return this;
    //}

    incrementCount() {
        this.counterH1.innerHTML = this.count += 1;
    }

    decrementCount() {
        this.counterH1.innerHTML = this.count -= 1; //this.counter = this.counter - 1
    }

    increaseLikes() { //needs a number when we click on it, need to know what number, create/update li tag amt of likes this count has
        if (this.likesCount[this.count]) {
            //if we have already liked this then add a number to stored number of likes
            let newLikeCount = this.likesCount[this.count] += 1
            this.likeList.querySelector(`.${this.count}`).innerText = `Number ${this.count} has ${newLikeCount} likes`
            return newLikeCount;

        }else{ //if we havent liked this yet then say we've liked it 1 time
        this.likesCount[this.count] = 1
        let newLike = document.createElement('li') ;
        newLike.class = this.count;
        newLike.innerText = `Number ${this.count} has 1 like` 
        this.likesList.appendChild(newLike);
        return 1; //this line of code handles the like if had not been liked before
        }   
    }

    pause() { //pause & resume
        clearInterval(this.interval)
    }

    resume() {
        this.interval = setInterval(() => this.incrementCount(), 1000) 
    }
} 

document.addEventListener('DOMContentLoaded', function(event){
    Counter.started = new Counter().start();
    attachListeners();
})

function attachListeners() {
    /*click on plus
    click on minus
    click on heart
    click on pause 
    click on resume
    */
   document.addEventListener('click', function(event){
       let target = event.target;
       if(target.matches('#plus')) {
        Counter.started.incrementCount();
       } else if(target.matches('#minus')) {
        Counter.started.decrementCount();
       } else if(target.matches('#heart')) {        //tricky part is how we display them
        Counter.started.increaseLikes();
       } else if(target.matches('#pause')) {
        Counter.started.pause();
       }
   })
}
end 