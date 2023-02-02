var nameError =document.getElementById('name-error');
var phoneError =document.getElementById('phone-error');
var emailError =document.getElementById('email-error');
var messageError =document.getElementById('message-error');
var submitError =document.getElementById('submit-error');

function validatename(){
    var name = document.getElementById('contact-name').value;
    if(name.length ==0){
        nameError.innerHTML='name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatephone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML= 'phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML='phone num should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML= 'only digits please.';
        return false;
    }

    phoneError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateemail(){
    var email = document.getElementById('contact-email').value;
    
    if(email.length==0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z]*[@][A-Za-z]*[\.][a-z]/)){
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}    
function validatemessage(){
    var message = document.getElementById('contact-message').value.trim();
    var required= 10;
    var left = required - message.length;
    if(message.length == 0){
        messageError.innerHTML = 'message is required';
        return false;
    }
    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateform(){
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage()){
        submitError.style.display='block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000)
        return false;
    }
}
