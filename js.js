var option = document.querySelector(".option")
var toogleBtn = document.querySelector(".toogle-icon")
var optionHidden = document.querySelectorAll(".show")
var buyBtn = document.querySelectorAll(".buy-btn")
var ticket = document.querySelector(".ticket")
var closeBtn = document.querySelector(".close")
for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener("click", function () {
        ticket.style.display = "block"
    })
}
closeBtn.addEventListener("click",function(){
    ticket.style.display = "none"

})
function myFunction() {
    if (option.className == "option") {
        option.className += " option-toggle"

        for (let i = 0; i < optionHidden.length; i++) {
            optionHidden[i].style.display = "block"
        }
    }
    else {
        option.className = "option"
        for (let i = 0; i < optionHidden.length; i++) {
            optionHidden[i].style.display = "none"
        }
    }
}