const imageContainers = document.querySelectorAll('.image-container');
const previousButton = document.querySelector('.previous');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let imageCounter = 0;


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

//add eventlisteners on dots

dots.forEach((dot, index) => {
    dot.addEventListener('click', (e) => {
        makeAllImagesInvisible();
        makeAllDotsInactive();
        imageContainers[index].classList.toggle('visible');
        dot.classList.toggle('active');
        imageCounter = index;
    })
})


//add eventlisteners on next button

nextButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (imageCounter === imageContainers.length - 1) {
        if (imageContainers[imageCounter].classList.contains('visible')) {
            makeAllImagesInvisible();
            imageContainers[0].classList.toggle('visible');
            imageCounter = -1;
        }
    }
    else if (imageContainers[imageCounter].classList.contains('visible')) {
        makeAllImagesInvisible();
        imageContainers[imageCounter + 1].classList.toggle('visible');
    }
    imageCounter++;
    makeAllDotsInactive();
    dots[imageCounter].classList.add('active');
});


//add eventlisteners on previous button

previousButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (imageCounter === 0) {
        if (imageContainers[imageCounter].classList.contains('visible')) {
            makeAllImagesInvisible();
            imageContainers[imageContainers.length - 1].classList.toggle('visible');
            imageCounter = imageContainers.length;
            console.log(imageCounter);
        }
    }
    else if (imageContainers[imageCounter].classList.contains('visible')) {
        makeAllImagesInvisible();
        imageContainers[imageCounter - 1].classList.toggle('visible');
    }
    imageCounter--;
    makeAllDotsInactive();
    dots[imageCounter].classList.add('active');
    
});

/* function showFirstImage() {
        document.querySelector('.image-container:first-of-type').classList.toggle('visible');
        dots[imageCounter].classList.add('active');
    } */

//showFirstImage();


//add automatic slideshow functionality

function slideShow() {
    setTimeout(slideShow, 5000);
    makeAllImagesInvisible();
    makeAllDotsInactive();
    imageCounter++;
    if (imageCounter > imageContainers.length) { imageCounter = 1 }
    imageContainers[imageCounter - 1].classList.add('visible');
    dots[imageCounter - 1].classList.add('active'); 
}
slideShow();
