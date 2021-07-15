const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".sign .container");

const logForm = document.querySelector(".sign-in-form");
const successLogMsg = document.querySelector(".success-msg-box");
const blur = document.querySelector(".blur");
logForm.addEventListener('submit', (e) => {
    e.preventDefault();
    successLogMsg.classList.add('show');
    blur.classList.add('show');
    setTimeout(() => logForm.submit(), 3000);
});

const regForm = document.querySelector(".sign-up-form");
const successRegMsg = document.querySelector(".success-reg-msg-box");
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    successRegMsg.classList.add('show');
    blur.classList.add('show');
    setTimeout(() => regForm.submit(), 3000);
});

signUpBtn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

signInBtn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});