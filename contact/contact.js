const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
form.addEventListener("submit",e => {
    e.preventDefault();
    validation();
});
function validation(){
    const usernameValue = username.value.trim();
    //trim method removes the whitespace from both ends of a string
    const emailValue = email.value.trim();
    if(usernameValue===""){
        setError(username,"Please fill in the required field.");
    }else{
        setSuccess(username);
    }
    


    
    if(emailValue===""){
        setError(email,"Please fill in the required field.");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "The e-mail address entered is invalid.");

    }else{
        setSuccess(email);
    }



}
function setError(element, message){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    errorDisplay.style.color="red";
    errorDisplay.style.fontSize="12px";
}

function setSuccess(element){
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
};
function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());}
