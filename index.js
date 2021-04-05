
var myButton = document.getElementById("btn")
var myTitle = document.getElementById("title")
var counter = 0


myButton.addEventListener("click", function(){
    myTitle.textContent = "I'm learning Javascript"
    myButton.textContent = counter
})