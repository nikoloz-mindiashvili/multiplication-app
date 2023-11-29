const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (event)=> {
    const x = (event.pageX - btnEl.offsetLeft)
    const y = (event.pageY - btnEl.offsetTop)

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
})

const questionEl = document.getElementById("question")
questionEl.innerText = `What is ${num1} multiplied by ${num2}?`


let score = JSON.parse(localStorage.getItem("score"))
if (score < 0){
    score = 0
}

const inputEl = document.getElementById("input")
const formEl = document.getElementById("form")
const scoreEL = document.getElementById("score")
scoreEL.innerText = `score: ${score}`

const correctAns = num1 * num2

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}