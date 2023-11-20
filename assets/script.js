let increaseBtn = document.getElementById('plus-btn');
let decreaseBtn = document.getElementById('minus-btn');
let counterInput = document.getElementById('count');
let counter = 0;
let productImage = document.getElementById('preview-product');
let images = document.querySelectorAll('.product-gallery img');

increaseBtn.addEventListener('click', function () {
    if (!counterInput.value) {
        counterInput.value = 1;
    } else if (counterInput.value > 1) {
        counter--;
        counterInput.value = counter;
    }
});

decreaseBtn.addEventListener('click', function () {
    if (!counterInput.value) {
        counterInput.value = 1;
    } else if (parseInt(counterInput.value, 9) > 0) {
        counter++;
        counterInput.value = counter;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let images = document.querySelectorAll('.product-gallery img');
    let currentIndex = 0;

    function imageClickHandler() {
        images.forEach(img => img.classList.remove('active'));
        this.classList.add('active');
    }

    images.forEach(img => img.addEventListener('click', imageClickHandler));

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });
    }
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        productImage.src = 'images/image-product-' + (currentIndex + 1)+ '.jpg';
        showImage(currentIndex);
    }
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        productImage.src = 'images/image-product-' + (currentIndex + 1) + '.jpg';
        showImage(currentIndex);
    }

    document.getElementById('nextBtn').addEventListener('click', nextImage);
    document.getElementById('prevBtn').addEventListener('click', prevImage);
});



images.forEach(function(image) {
    image.addEventListener('click', function() {
        showElementName(this);
    });
});

function showElementName(element) {
    element.classList.add('active');
    //let pathName = element.src;
    productImage.src = element.src;
}