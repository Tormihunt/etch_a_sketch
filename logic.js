const container = document.querySelector("#container")
const slider = document.querySelector("#slider")

let sliderValue = document.querySelector("#slider").value
let numberOfPixels = slider.value

let horizontalIndex = 0
let verticalIndex = 0


//creates the grid-canvas 
function createGrid() {
    numberOfPixels = document.querySelector("#slider").value
    horizontalIndex = 0
    while (horizontalIndex < numberOfPixels) {
        const divHorizontal = document.createElement("div")
        container.appendChild(divHorizontal)
        divHorizontal.style.display = "flex"
        divHorizontal.style.flexDirection = "column"
        divHorizontal.style.flexGrow = "1"
        divHorizontal.style.aspectRatio = "1/1"
        divHorizontal.setAttribute("id", horizontalIndex + ".0")
            verticalIndex = 0
            while (verticalIndex < numberOfPixels) {
                const divVertical = document.createElement("div")
                divHorizontal.appendChild(divVertical)
                divVertical.style.borderStyle = "dotted"
                divVertical.style.borderWidth = "1px"
                divVertical.style.aspectRatio = "1/1"
                divVertical.setAttribute("id", horizontalIndex + "." + verticalIndex)
                verticalIndex++
            }
        horizontalIndex++
    }
}

createGrid()
slider.addEventListener("click", () => {
    container.textContent = ""
    createGrid()
})

//Is left click held down or not
let mousedownHeld = false
container.addEventListener("mousedown", () => {
        mousedownHeld = true
})
container.addEventListener("mouseup", () => {
        mousedownHeld = false
})


//choose random color
let randomColor = "blue"
function getRandomColor() {
    const hexadecimalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    function getRandomNumber() {
        return Math.floor(Math.random()*16)
    }
    randomColor = "#"
    for (let i = 0; i < 6; i++) {
        randomColor += hexadecimalArray[getRandomNumber()]
    }
    return randomColor
}


const checkbox = document.querySelector("#checkbox")

//When holding left click, draws with color picker's value
const colorPicker = document.querySelector("#colorPicker")
container.addEventListener("mouseover", (event) => {
    if (mousedownHeld == true) {
        if (checkbox.checked) {
            target = event.target
            target.style.backgroundColor = getRandomColor()
        }
        else {
            target = event.target
            target.style.backgroundColor = colorPicker.value
        }


    }
})

colorPicker.addEventListener("input", () => {
    slider.style.accentColor = colorPicker.value
})
