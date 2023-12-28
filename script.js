// JavaScript remains the same as the previous example
const showMessageBtn = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

showMessageBtn.addEventListener('click', () => {
  message.classList.toggle('hidden');
});
