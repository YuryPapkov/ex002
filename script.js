let images = ['./images/101.jpg',
    './images/102.jpg',
    './images/103.jpg',
    './images/104.jpg',
    './images/105.jpg',
    './images/106.jpg',
    './images/107.jpg',
    './images/108.jpg',
    './images/109.jpg',
    './images/110.jpg',
    './images/111.jpg',
    './images/112.jpg',
    './images/113.jpg',
    './images/114.jpg',
]
const pictures = document.querySelector('.pictures');
let button = document.querySelector('.button');

function getImage() {
    /*console.log(images.length);*/
    let i = Math.floor(images.length * Math.random());
    /*console.log(i);*/
    let image = images[i];
    /*console.log(image);*/
    return image;
}


function writeNewImage() {
    let imageTempo = document.createElement('img');
    imageTempo.setAttribute('src', `${getImage()}`);
    imageTempo.classList.add('pictures__item');
    imageTempo.style.top = `${Math.floor(300 * Math.random())}px`;
    imageTempo.style.left = `${Math.floor(600 + 800 * Math.random())}px`;
    /*console.log(`${Math.floor(600 * Math.random())}px`);*/
    pictures.insertAdjacentElement("beforeend", imageTempo);

    function addNewProperties() {
        imageTempo.classList.add('pictures__item_new');
        imageTempo.style.top = '200px';
        imageTempo.style.left = '100px';

    }
    setTimeout(addNewProperties, 10);
    let items = document.querySelectorAll('.pictures__item');
    if (items.length > 10) {
        items[0].remove();
    }
}
let keepGoing = false;
setInterval(function() {
    if (keepGoing) {
        writeNewImage();
    }
}, 1000);

button.addEventListener('mouseover', function() { keepGoing = true; });
button.addEventListener('mouseout', function() { keepGoing = false; });
