let btnColor = document.querySelectorAll(".btn")

btnColor.forEach((color) => {
    color.addEventListener("click" , (event) => {
        let tamplateColor = event.target.dataset.color
        document.documentElement.style.setProperty('--theme-color' , tamplateColor)
    })
})