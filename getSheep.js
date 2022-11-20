const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginButton = document.querySelector("label.login");
const signupButton = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");

signupButton.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
});
loginButton.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupButton.click();
    return false;
});