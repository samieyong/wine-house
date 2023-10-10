// Select Elements
const slideshowContents = document.querySelectorAll('.slideshow-content');
const rightBtn = document.querySelector('.arrow__btn-right');
const leftBtn = document.querySelector('.arrow__btn-left');
const progressText = document.querySelector('.progress__display-text');
const progressCircles = document.querySelectorAll('.progress__display-circle');
const detailsBtn = document.querySelectorAll('.btn-details');
const backBtn = document.querySelectorAll('.btn-back');
const navBtn = document.querySelector('.nav__menu-bars-wrapper');

// Declare Variables
let slideCount = 0;
let rightCount = 0;
let leftCount = 0;
let slideLength = slideshowContents.length - 1;

// Onload Display Transform
slideshowContents[0].style.transform = 'scale(1)';

////// Event Listeners/////

// Slide Show Event Listeners
leftBtn.addEventListener('click', () => {
   if (slideCount === slideLength && rightCount === 0) {
      return;
   } else if (slideCount >= 0 && rightCount > 0) {
      slideshowContents[slideCount - 1].style.left = '0';
      slideshowContents[slideCount - 1].style.transform = 'scale(1)';
      slideshowContents[slideCount].style.transform = 'scale(1.5)';
      rightCount--;
      slideCount--;
      updateProgressDisplayBackward();
   } else {
      slideshowContents[slideCount].style.left = '-150%';
      slideshowContents[slideCount].style.transform = 'scale(1.5)';
      slideshowContents[slideCount + 1].style.transform = 'scale(1)';
      leftCount++;
      slideCount++;
      updateProgressDisplayFarward();
   }
});

rightBtn.addEventListener('click', () => {
   if (slideCount === slideLength && leftCount === 0) {
      return;
   } else if (slideCount >= 0 && leftCount > 0) {
      slideshowContents[slideCount - 1].style.left = '0';
      slideshowContents[slideCount - 1].style.transform = 'scale(1)';
      slideshowContents[slideCount].style.transform = 'scale(1.5)';
      slideCount--;
      updateProgressDisplayBackward();
      leftCount--;
   } else {
      slideshowContents[slideCount].style.left = '150%';
      slideshowContents[slideCount].style.transform = 'scale(1.5)';
      slideshowContents[slideCount + 1].style.transform = 'scale(1)';
      slideCount++;
      updateProgressDisplayFarward();
      rightCount++;
   }
});

// Event Listeners to flip Wine Card
detailsBtn.forEach((btn) => {
   btn.addEventListener('click', () => {
      btn.parentElement.style.transform = 'rotateY(180deg)';
   });
});

backBtn.forEach((btn) => {
   btn.addEventListener('click', () => {
      btn.parentElement.style.transform = 'rotateY(0deg)';
   });
});

//Nav Button
navBtn.addEventListener('click', () => {
   navBtn.parentElement.classList.toggle('change');
});

///// Functions /////
function updateProgressDisplayFarward() {
   progressText.innerHTML = `${slideCount + 1}/${slideLength + 1}`;
   progressCircles[slideCount].style.backgroundColor = '#fff';
   progressCircles[slideCount - 1].style.backgroundColor = 'transparent';
}
function updateProgressDisplayBackward() {
   progressText.innerHTML = `${slideCount + 1}/${slideLength + 1}`;
   progressCircles[slideCount].style.backgroundColor = '#fff';
   progressCircles[slideCount + 1].style.backgroundColor = 'transparent';
}
