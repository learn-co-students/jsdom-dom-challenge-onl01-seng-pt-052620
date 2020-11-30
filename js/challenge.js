// what you need
let counter_id = document.getElementById("counter")
let counter = 0
// timer increment per second
let timer = setInterval(function () {
    if (true === true) {
        counter_id.innerHTML = counter
        counter += 1;
    }}, 1000);

// override timer with plus and minus buttons
// needs
let plus_id = document.getElementById("+")
let minus_id = document.getElementById("-")

plus_id.addEventListener("click", function () {
    counter += 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) + 1
})

minus_id.addEventListener("click", function () {
    counter -= 1;
    counter_id.innerHTML = parseInt(counter_id.innerHTML) - 1
})