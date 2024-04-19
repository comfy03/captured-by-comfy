const showBtn = document.querySelector('.navBtn');
const topNav = document.querySelector('.top-nav');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class = "fas fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class = "fas fa-times"></i>';
    }
});

/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });


// Array of all image URLs - replace with your actual URLs or server API call
document.addEventListener('DOMContentLoaded', function() {
    let loadedImages = 9;
    const imagesPerLoad = 3; // Number of images to load per click
    const totalImages = 15; // Total number of images available
    const moreButton = document.querySelector('.gallery-btn a');

    moreButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Load more images logic
        for (let i = 0; i < imagesPerLoad; i++) {
            if (loadedImages < totalImages) {
                // Create new img element
                const img = document.createElement('img');
                img.src = 'images/gallery ' + (loadedImages + 1) + '.jpg'; // Update the image source path as needed
                // Append to the gallery container
                document.querySelector('.gallery-container .box').appendChild(img);
                loadedImages++;
            } else {
                // If no more images are left, hide the button
                moreButton.style.display = 'none';
                break;
            }
        }
    });
});

  
