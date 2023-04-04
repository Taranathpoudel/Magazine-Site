const imageContainer = document.getElementById('image-container');
const images = imageContainer.getElementsByTagName('img');

let currentIndex = 0;
const totalImages = images.length;

function changeImages() {
  const nextIndex = (currentIndex + 1) % totalImages;
  const currentImage = images[currentIndex];
  const nextImage = images[nextIndex];
  
  currentImage.style.display = 'none';
  nextImage.style.display = 'block';
  
  currentIndex = nextIndex;
  
  if (currentIndex === 0) {
    setTimeout(changeImages, 5000); // pause for 5 seconds
  } else {
    setTimeout(changeImages, 1000); // continue animation after 1 second
  }
}

changeImages();
