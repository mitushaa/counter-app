
var myButton = document.getElementById("btn")
var myTitle = document.getElementById("title")
var counter = 0


myButton.addEventListener("click", function(){

    counter = counter + 2

    myButton.textContent = counter
})