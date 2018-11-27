// Form Blur Event Listeners - so that its dynamic and you don't have to hit sumbit to check if its entered correctly
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name = document.getElementById('name');
    // variable to match, starts with a -z lower & uppercase, between 2 and ten for easier testing purposes, $ to end exp
    const re = /^[a-zA-Z]{2,10}$/;

    // if not testing than passing in input value then adding is-invalid to page
    // if it is not invalid, than removing that
    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    //  based on US zip code plus optional -4 ie zip: 60622-1234
    //  0 - 9, size of five, () means grouped, checking for the optional 4 #'s, ? means optional
    // pretty cool testing it out, if Chrome saved past zip codes addresses, it will bring them up right away on something you built in a few minutes!
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    // email can be formatted anyway sample123@gmail.com
    // (email address in any format) + literal @ (group can be 2 - 5, ie .com, or .me - .media) + 
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    // want to accept all possible phone input options, a longer expressions w/practical use to catch phone numbers entered in any format
    // optional () w/ three digits, optional: dash, decimal or space, three digits, optional in between, four digits
    const phone = document.getElementById('phone');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }

}