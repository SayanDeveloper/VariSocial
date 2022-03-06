// Declrartions
const signIn = document.querySelector(".form-container .for-login");
const signUp = document.querySelector(".form-container .for-sign-up");

// Functions
function signInShow() {
    signUp.style.opacity = "0";
    signUp.style.zIndex = "0";
    setTimeout(() => {
        signIn.style.zIndex = "1";
        signUp.style.display = "none";
        signIn.style.display = "block";
        signIn.style.opacity = "1";
    }, 200);
}

function signUpShow() {
    signIn.style.opacity = "0";
    signIn.style.zIndex = "0";
    setTimeout(() => {
        signUp.style.zIndex = "1";
        signIn.style.display = "none";
        signUp.style.display = "block";
        signUp.style.opacity = "1";
    }, 200);
}