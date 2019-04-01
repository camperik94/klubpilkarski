const slideList = [{
        img: "img/boisko.jpeg",
        text: 'Pierwszy tekst'
    },
    {
        img: "img/boisko2.jpeg",
        text: 'Drugi tekst'
    },
    {
        img: "img/boisko3.jpeg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
// Interfejs
const time = 5000;
let active = 0;

// Implementacje

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
let indexInterval = setInterval(changeSlide, time);