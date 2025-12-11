const box = document.querySelector("#box")
const btnStart = document.querySelector("#btnStart")
const btnPrev = document.querySelector("#btnPrev")
const btnReset= document.querySelector("#btnReset")
const emoji = document.querySelector("#emoji")
const counter = document.querySelector("#counter")

let currentValue = 0

const specialEmojis = {
    10: "👌",
    20: "🔥",
    40: "🌟",
    50: "🎉",
    100: "🏁",
}

function updateEmoji() {
    if (specialEmojis[currentValue]) {
        emoji.textContent = specialEmojis[currentValue]
        emoji.classList.remove("opacity-0")
        emoji.classList.add("opacity-100")
    } else {
        emoji.classList.remove("opacity-100")
        emoji.classList.add("opacity-0")
    }
}

btnStart.addEventListener("click", () => {
    currentValue++
    box.style.color ="white"
    box.style.fontSize = "70px"
    box.style.paddingTop = "45px"
    box.style.font = "bold"
    counter.textContent = currentValue
    if([10,20,40,50,100].includes(currentValue)){
        box.style.color = "red"
    } else {
        box.style.color = "white"
    }
    updateEmoji()
})

btnPrev.addEventListener("click", () =>{
     if(currentValue > 0){
        currentValue --
        counter.textContent = currentValue
    }
    box.style.color ="white"
    box.style.fontSize = "70px"
    box.style.paddingTop = "45px"
    box.style.font = "bold"
    counter.textContent = currentValue
    if([10,20,40,50,100].includes(currentValue)){
        box.style.color = "red"
    } else {
        box.style.color = "white"
    }
    updateEmoji()
})

btnReset.addEventListener("click", () => {
    currentValue = 0;
    counter.textContent = currentValue
    updateEmoji()
})