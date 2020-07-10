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
const imagesLengthInitial = images.length;
let imagesReserved = [];

/*Сразу делим исходный массив пополам и половину переводим в резерв*/
for (i = 0; i < imagesLengthInitial / 2; i++) {
    imagesReserved.push(images[0]);
    images.shift();

}

/*
console.log(images);
console.log(imagesReserved);
*/
const pictures = document.querySelector('.pictures');
const button = document.querySelector('.button');

function getImage() {

    let i = Math.floor(images.length * Math.random());
    /*console.log(i);*/
    /*выбираем из images*/
    let image = images[i];
    /*записываем его в начало резервного массива*/
    imagesReserved.unshift(images[i]);
    /*удаляем его из images*/
    images.splice(i, 1);
    /*записываем в images последний элемент из резервного*/
    images.push(imagesReserved[imagesReserved.length - 1]);
    /*стираем последний элемент резервного*/
    imagesReserved.pop();
    console.log(images);
    return image;
}


function writeNewImage() {
    let imageTempo = document.createElement('img');
    imageTempo.setAttribute('src', `${getImage()}`);
    imageTempo.classList.add('pictures__item');
    let topInitial = Math.floor(300 * Math.random());
    let leftInitial = Math.floor(600 + 800 * Math.random());

    imageTempo.style.top = `${topInitial}px`;
    imageTempo.style.left = `${leftInitial}px`;
    /*console.log(`${Math.floor(600 * Math.random())}px`);*/
    pictures.insertAdjacentElement("beforeend", imageTempo);

    function addNewProperties() {
        imageTempo.classList.add('pictures__item_new');
        imageTempo.style.transform = `translate(${100-leftInitial}px, ${100-topInitial}px) rotate(5deg)`;
        imageTempo.addEventListener('transitionend', function() { imageTempo.remove(); });


    }
    setTimeout(addNewProperties, 1000);


    /*let items = document.querySelectorAll('.pictures__item');

    if (items.length > 10) {
        items[0].remove();
    }*/
}
/*
function clearField() {
    let items = document.querySelectorAll('.pictures__item');
    items[0].addEventListener('transitionend', function() {
        console.log('te' + items[0]);
        items[0].remove();
    });
}
*/



let keepGoing = false;
setInterval(function() {
    if (keepGoing) {
        writeNewImage();
        /* clearField();*/
    }
}, 1000);

button.addEventListener('mouseover', function() { keepGoing = true; });
button.addEventListener('mouseout', function() { keepGoing = false; });
