let quoteElements = document.getElementsByClassName("text")[0];
let diceButton = document.getElementsByClassName("dice")[0];
let adivenum
console.log(diceButton)
diceButton.addEventListener("click", () => {
    fetch("https://api.adviceslip.com/advice").then((result) => result.json()).then((r) => {
        quoteElements.textContent = '"' + r.slip.advice + '"'
    })
})


