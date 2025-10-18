const save = document.getElementById("saveButton")
const reset = document.getElementById("resetButton")
const bgColorDom = document.getElementById("backgroundColor")
const fontColorDom = document.getElementById("fontColor")
const fontSizeDom = document.getElementById("fontSize")
const body = document.querySelector('body')

//saveButton

let bgColor = localStorage.getItem('bg-color')
let fontColor = localStorage.getItem('font-color')
let fontSize = localStorage.getItem('font-size')


save.addEventListener('click', (event) => {

    localStorage.setItem('bg-color', bgColorDom.value)
    localStorage.setItem('font-color',fontColorDom.value)
    localStorage.setItem('font-size', `${fontSizeDom.value}px`)

    console.log(localStorage)
})

reset.addEventListener('click', (event) => {
    localStorage.clear()
})


document.addEventListener("DOMContentLoaded", (event) => {
  body.style.backgroundColor = localStorage.getItem('bg-color')
  body.style.color = localStorage.getItem('font-color')
  body.style.fontSize = localStorage.getItem('font-size')
});

