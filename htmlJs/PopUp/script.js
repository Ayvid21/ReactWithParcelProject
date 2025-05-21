const button = document.querySelector('.open-btn');
const popup = document.querySelector('.popup');
const closeIcon = document.querySelector('.close-icon');
const openOverlay = document.querySelector('.overlay');
const subscribeBtn = document.querySelector('.subscribe-btn');
const inputText = document.querySelector('.input');
const errorMsg = document.querySelector('.error-msg');

button.addEventListener('click', () => {
    popup.classList.add('open-popup');
    openOverlay.classList.add('show');
    errorMsg.style.display = 'none';
})

closeIcon.addEventListener('click', () => {
    popup.classList.remove('open-popup');
    openOverlay.classList.remove('show');
})

openOverlay.addEventListener('click', () => {
    popup.classList.remove('open-popup');
    openOverlay.classList.remove('show');
})

subscribeBtn.addEventListener('click', () => {
    const inputValue = inputText.value.trim();
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue);

    if(inputValue.length === 0) {
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Please enter your email ID.';
    } else if(isEmailValid) {
        popup.classList.remove('open-popup');
        openOverlay.classList.remove('show');
        errorMsg.style.display = 'none';
        inputText.value = '';
    } else {
        errorMsg.style.display = 'block';
        errorMsg.textContent = 'Please enter a valid email address.';
    }
})