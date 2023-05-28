const imgs = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
]

const chosenImage = imgs[[Math.floor(Math.random() * imgs.length)]]

const image = document.createElement("img");

image.className = "backGround_Img"
image.src = `img/${chosenImage}`

document.querySelector(".background").appendChild(image)
