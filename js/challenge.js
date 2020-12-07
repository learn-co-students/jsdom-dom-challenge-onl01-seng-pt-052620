class Counter {
    constructor() {
      //Similar to initialize. We're keeping track of data. These steps occur at the time when the object is created. 
      this.count = 0;
      this.likesCount = {}; //Object
      this.counterH1 = document.querySelector("h1#counter"); //Storing references
      this.likesList = document.querySelector("ul.likes");
      this.minusButton = document.querySelector("#minus");
      this.plusButton = document.querySelector("#plus");
      this.heartButton = document.querySelector("#heart");
      this.pauseButton = document.querySelector("#pause");
      this.interval = setInterval(() => this.incrementCounter(), 1000); //Starts the counter 
    }
    /*
    We use the .this keyword so we have access to the variables because they are attached to the object. 
    In other methods we call on the counter will be able to refer to these values.  
    Updating the Data will update the DOM, whenever incrementCounter gets called it will update the count attribute (the actual data)
    and then update the DOM node as well. The benefit is, the value of this.count is going to be the value inside of the h1. 
    We don't have to pull the value out of the DOM in order to increment it and put it back in. This is because the data is already in the counter. 
    We're incrementing the data and then update the DOM based on the update of the data. 
    */
    incrementCounter() {
      this.counterH1.innerHTML = this.count += 1;
    }
  
    decrementCounter() {
      this.counterH1.innerHTML = this.count -= 1;
    }
  
    increaseLikes() {
      //We need this method to also create/update an li tag displaying the number of likes that this.count has
      if (this.likesCount[this.count]) {
        //We're looking in the likes list for an li that has a class of that number, once we have that we want to set the inner HTML to the number, : and updated count.
        // If we've already liked this number, then add a like to the stored number of likes
        // Find the li displaying that number and update it
        let newLikeCount = (this.likesCount[this.count] += 1);
        this.likesList.querySelector(
          `#num${this.count}`
        ).innerText = `Number ${this.count} has ${newLikeCount} likes`;
        return newLikeCount;
      } else {
        // If we haven't liked this number yet, then say we've liked it 1 time. (known as memoization)
        // Add an li to ul.likes containing the number and the like count.
        this.likesCount[this.count] = 1;
        let newLike = document.createElement("li");
        newLike.id = `num${this.count}`;
        newLike.innerText = `Number ${this.count} has 1 like`;
        this.likesList.appendChild(newLike); //updating the DOM
        return 1;
      }
    }
    pause() {
      clearInterval(this.interval); //Stops incrementing the counter
      this.minusButton.disabled = true;
      this.plusButton.disabled = true;
      this.heartButton.disabled = true;
      this.pauseButton.innerText = "resume";
      this.pauseButton.id = "resume";
    }
  
    resume() {
      this.interval = setInterval(() => this.incrementCounter(), 1000);
      this.minusButton.disabled = false;
      this.plusButton.disabled = false;
      this.heartButton.disabled = false;
      this.pauseButton.innerText = "pause";
      this.pauseButton.id = "pause";
    }
  }
  
  class CommentsList {
    constructor() {
      this.comments = [];
      this.list = document.querySelector("#list");
      this.commentInput = document.querySelector("#comment-input");
    }
  
    addComment() {
      let comment = this.commentInput.value; //Retrieves the value of the comment 
      this.comments.push(comment); //Adding the comment to the empty array 
      let p = document.createElement("p");  //Creating a paragraph element 
      p.innerText = comment; //Assigning the innerText of the element to the comment
      this.list.appendChild(p); //Adding the comment to the list using the appendChild method (adds to the DOM) 
      this.commentInput.value = "";  //After you submit the comment it clears on the leave a comment field.  
    }
  }
  // functional version of JS class:
  // function Counter() {
  //   this.counter = 0;
  //   this.likesCounter = {};
  // }
  
  // Counter.prototype.start = function() {
  //   this.interval = setInterval(this.incrementCounter, 1000)
  // }
  
  document.addEventListener("DOMContentLoaded", function (event) {
    //Create a new counter and start it
    Counter.started = new Counter();
    CommentsList.active = new CommentsList();  //In order for a constructor to be called, we need to create a new instance. We can call it anything we want, it doesn't have to be .active  This will allow us when we attach event listeners to target the instance that has the method.  We use this with .addComment
    attachListeners();
  });
  
  function attachListeners() {
    /*
    click on plus
    click on minus
    click on heart
    click on pause
    click on resume
    */
    document.addEventListener("click", function (event) {
      //One event listener with conditional logic
      let target = event.target;
      if (target.matches("#plus")) {
        Counter.started.incrementCounter(); //linked to starting the counter ??
      } else if (target.matches("#minus")) {
        Counter.started.decrementCounter();
      } else if (target.matches("#heart")) {
        Counter.started.increaseLikes();
      } else if (target.matches("#pause")) {
        Counter.started.pause();
      } else if (target.matches("#resume")) {
        Counter.started.resume();
      }
    });
  
    document.addEventListener("submit", function (event) {
      let target = event.target;
      if (event.target.matches("#comment-form")) { 
        event.preventDefault();  //Prevents default behavior but does not clear out the form ??
        CommentsList.active.addComment();
      }
    });
  }
  