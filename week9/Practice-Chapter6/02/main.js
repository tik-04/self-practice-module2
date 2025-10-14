const keylogDom = document.getElementById("keyLog")
const keyInputDom = document.getElementById("keyInput")

keyInputDom.addEventListener("keydown", (event) => {
    const newNode = document.createElement("p")

    newNode.textContent = `Your press: ${event.key}`

    if (event.key == "Enter") {
        newNode.style.color = "blue"
    }

    keylogDom.appendChild(newNode)

})



