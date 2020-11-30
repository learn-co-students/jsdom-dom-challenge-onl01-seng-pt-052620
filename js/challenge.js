// what you need
let counter_id = document.getElementById("counter")
let counter = 0
let life = true
// timer increment per second
let timer = setInterval(function () {
    if (life === true) {
        counter_id.innerHTML = counter
        counter += 1;
    }}, 1000);

// override timer with plus and minus buttons
// needs
let plus_id = document.getElementById("plus")
let minus_id = document.getElementById("minus")

plus_id.addEventListener("click", function () {
    counter += 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1
});

minus_id.addEventListener("click", function () {
    counter -= 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1
});

//like counter 
// needs
let heart_id = document.getElementById("heart")

heart_id.addEventListener("click", function () {
    let like = document.querySelector(".likes")
    // If no likes, make a list
    if (document.getElementById(`Li${counter}`) == null) {
        let li = document.createElement("li");
        li.setAttribute("id", `Li${counter}`)
        li.innerHTML = `${counter} have this many likes:1`
        like.appendChild(li)
    }
    else {
        //   if there is a list, add a like for that number
        let li = document.getElementById(`Li${counter}`)
        let splitted = parseInt(li.innerHTML.split(":")[1]) + 1
        li.innerHTML = `${counter} have this many likes:${splitted}`
        like.appendChild(li)
    }

});
// make it all pause
let pause_id = document.getElementById("pause")

pause_id.addEventListener("click", function () {
    if (life) {
        pause_id.innerHTML = "resume"
        life = false
        document.getElementById("minus").disabled = true;
        document.getElementById("plus").disabled = true;
        document.getElementById("heart").disabled = true;
        document.getElementById("submit").disabled = true;
        clearInterval(counter)
    }
    else {
        pause_id.innerHTML = "pause"
        life = true
        document.getElementById("minus").disabled = false;
        document.getElementById("plus").disabled = false;
        document.getElementById("heart").disabled = false;
        document.getElementById("submit").disabled = false;
    };

    // user can leave comments
    comment_id.addEventListener("submit", function (a) {
        //stop default action of submit button
        a.preventDefault();
        var comment = document.querySelector('input#comment-input').value
        var commentsList = document.querySelector('.comments')
        var p = document.createElement("p");
        var node = document.createTextNode(comment)
        p.appendChild(node);
        commentsList.appendChild(p);
        document.querySelector('input#comment-input').value = ''
    });
});
