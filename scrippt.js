// JavaScript remains the same as the previous example
const animateButton = document.getElementById('animateButton');
const animatedElement = document.querySelector('.animatedElement');

animateButton.addEventListener('click', () => {
  animatedElement.classList.toggle('bounceAnimation');
});
