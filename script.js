const imageContainers = document.querySelectorAll('.image-container');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (imageContainers[0].classList.contains('visible')) {
        imageContainers[0].classList.toggle('visible');
        imageContainers[1].classList.toggle('visible');
    }
    else if (imageContainers[1].classList.contains('visible')) {
        imageContainers[1].classList.toggle('visible');
        imageContainers[2].classList.toggle('visible');
    }
    else if (imageContainers[2].classList.contains('visible')) {
        imageContainers[2].classList.toggle('visible');
        imageContainers[3].classList.toggle('visible');
    }
    else if (imageContainers[3].classList.contains('visible')) {
        imageContainers[3].classList.toggle('visible');
        imageContainers[0].classList.toggle('visible');
    }
});

previousButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (imageContainers[0].classList.contains('visible')) {
        imageContainers[0].classList.toggle('visible');
        imageContainers[3].classList.toggle('visible');
    }
    else if (imageContainers[1].classList.contains('visible')) {
        imageContainers[1].classList.toggle('visible');
        imageContainers[0].classList.toggle('visible');
    }
    else if (imageContainers[2].classList.contains('visible')) {
        imageContainers[2].classList.toggle('visible');
        imageContainers[1].classList.toggle('visible');
    }
    else if (imageContainers[3].classList.contains('visible')) {
        imageContainers[3].classList.toggle('visible');
        imageContainers[2].classList.toggle('visible');
    }
});


function makeAllImagesInvisible() {
    imageContainers.forEach(imageContainer => {
        imageContainer.classList.remove('visible');
    })
}

function makeAllDotsInactive() {
    dots.forEach(dot => {
        dot.classList.remove('active');
    })
}


dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        makeAllImagesInvisible();
        makeAllDotsInactive();
        imageContainers[index].classList.toggle('visible');
        dot.classList.toggle('active');
    })
})

let indexValue = 0;
function slideShow() {
    setTimeout(slideShow, 2500);
    for (let i = 0; i < imageContainers.length; i++) {
        imageContainers[i].classList.remove('visible');
        dots[i].classList.remove('active')
    }
    indexValue++;
    if (indexValue > imageContainers.length) { indexValue = 1 }
    imageContainers[indexValue - 1].classList.add('visible');
    dots[indexValue - 1].classList.add('active');
}
slideShow();

/* nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    for (i = 0; i < imageContainers.length; i++) {
        if (i === imageContainers.length - 1) {
            if (imageContainers[i].classList.contains('visible')) {
                imageContainers[i].classList.toggle('visible');
                imageContainers[0].classList.toggle('visible');
            }
        }
        else if (imageContainers[i].classList.contains('visible')) {
            imageContainers[i].classList.toggle('visible');
            imageContainers[i + 1].classList.toggle('visible');
        }
    }
}); */

function showFirstImage() {
    document.querySelector('.image-container:first-of-type').classList.toggle('visible');
}

//showFirstImage();