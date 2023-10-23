let index = 1
let index2 = 1
const imageArray = document.getElementsByClassName('page__slide')
const imageArray2 = document.getElementsByClassName('page__slide_other')
console.log(imageArray.length)

function shiftForward1(i) {
    let currentSlide = document.getElementById(String(index))
    currentSlide.classList.remove('active')
    if (index == imageArray.length) {
        index = 0
    }
    index += 1
    let newSlide = document.getElementById(String(index))
    newSlide.classList.add('active')
    return index
}

function shiftBackward1(i) {
    let currentSlide = document.getElementById(String(index))
    currentSlide.classList.remove('active')
    if (index == 1) {
        index = imageArray.length + 1
    }
    index -= 1
    let newImage = document.getElementById(String(index))
    newImage.classList.add('active')
    return index
}




function shiftForward2(i) {
    let currentSlide2 = document.getElementById('slide_' + String(index2))
    currentSlide2.classList.remove('active')
    if (index2 == imageArray2.length) {
        index2 = 0
    }
    index2 += 1
    let newSlide2 = document.getElementById('slide_' + String(index2))
    newSlide2.classList.add('active')
    return index2
}

function shiftBackward2(i) {
    let currentSlide2 = document.getElementById('slide_' + String(index2))
    currentSlide2.classList.remove('active')
    if (index2 == 1) {
        index2 = imageArray2.length + 1
    }
    index2 -= 1
    let newImage2 = document.getElementById('slide_' + String(index2))
    newImage2.classList.add('active')
    return index2
}