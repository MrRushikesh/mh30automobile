

document.getElementById("contactForm").addEventListener('submit',(event) => {
    let isValid = true;

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let textAreaMessage = document.getElementById('textAreaMessage').value;

    let usernameError = document.getElementById("usernameError");
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
    let addressError = document.getElementById('addressError');
    let textAreaMessageError = document.getElementById('textAreaMessageError');


    usernameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";
    textAreaMessageError.textContent = "";

    if(username.trim() == ""){
        usernameError.innerHTML = "Required";
        usernameError.classList.add("redAlert");
        isValid = false;
    }else{
        usernameError.innerHTML = "Success";
        usernameError.classList.remove('redAlert');
        usernameError.classList.add("greenAlert");
    }

    if(!/\S+@\S+\.\S+/.test(email)){
        emailError.innerHTML = "Required";
        emailError.classList.add('redAlert');
        isValid = false;
    }else{
        emailError.innerHTML = "Success";
        emailError.classList.remove('redAlert');
        emailError.classList.add('greenAlert');
    }
    
    if(phone.trim() == ''){
        phoneError.innerHTML = "Required";
        phoneError.classList.add('redAlert');
        isValid = false;
    }else{
        phoneError.innerHTML = "Success";
        phoneError.classList.remove('redAlert');
        phoneError.classList.add('greenAlert');
    }

    if(address.trim() == ''){
        addressError.innerHTML = "Required";
        addressError.classList.add('redAlert');
        isValid = false;
    }else{
        addressError.innerHTML = "Success";
        addressError.classList.remove("redAlert");
        addressError.classList.add('greenAlert');
    }

    if(textAreaMessage.trim() == ''){
        textAreaMessageError.innerHTML = "Required";
        textAreaMessageError.classList.add('redAlert');
        isValid = false;
    }else{
        textAreaMessageError.innerHTML = "Success";
        textAreaMessageError.classList.remove('redAlert');
        textAreaMessageError.classList.add('greenAlert');
    }

    if(!(isValid)){
        event.preventDefault();
    }else{
        alert("Thank You So Much For Your Valueable Feedback...!!! 👏");
    }
    
})

