const body = document.querySelector("body");

// 배경이미지의 개수
const IMG_NUMBER = 3;

// 배경이미지를 출력
function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

// 출력할 배경이미지를 랜덤으로 선택
function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number; 
}

function init() {
    const randomNumber = genRandom();

    paintImage(randomNumber);
}

init();