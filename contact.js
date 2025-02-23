
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
})

//regex pour verifier si l'email est valid ou non
function isValidEmail(email){
    let chaine=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return chaine.test(String(email).toLowerCase());
    }
//pour verifier si les champs sont rempli par l'utilisateur ou non (dans ce cas on affiche les messages d'erreur)
function validation() {
    let name = document.getElementById('username').value;
    let email = document.getElementById('mail').value;
    let sujet = document.getElementById('sujet').value;
    let message = document.getElementById('message').value;

    let errorName = document.getElementById('err_name');
    let errorMail = document.getElementById('err_mail');
    let errorSujet = document.getElementById('err_sujet');
    let errorMessage = document.getElementById('err_message');

    isValid = true;
    errorName.innerHTML = "";
    errorMail.innerHTML = "";
    errorSujet.innerHTML = "";
    errorMessage.innerHTML = "";

    if (name === ""){
        errorName.innerHTML = "you forgote to fill in your username.";
        isValid = false;
    }

    if (email === ""){
        errorMail.innerHTML = "you forgote to fill in your mail."
        isValid = false;
    }else if(!isValidEmail(email)){
        errorMail.innerHTML = "sorry, your mail is not valid, try again."
        isValid = false;
        }

    if (sujet === ""){
        errorSujet.innerText = "you forgote to select one option."
        isValid = false;
    }

    if (message === ""){
        errorMessage.innerHTML = "you forgote to write a message.";
        isValid = false;
    }

    if (isValid){
        alert ("The form has been successfully submitted! <br> thank you !")
    }
}