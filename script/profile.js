

// Profile Section */


function logIn(){
    let changeContent = document.getElementById('changeContent');
    changeContent.innerHTML = `

    <div class="login-container">
         <span>User Login</span>
    </div>

    <form action="./profile.html" method="GET" id="login_form">
        <div class="inputText_1">
            <label for="lemail">Email - <span id="lemailError" class=""></span></label>
            <input type="email" id="lemail" name="lemail" placeholder="Enter Your Email"/>
        </div>

        <div class="inputText_1">
            <label for="lpass">Password - <span id="lpassError" class=""></span></label>
            <input type="password" id="lpass" name="lpass" placeholder="Enter Your Password"/>
        </div>
    
        <div class="submitBtn_1">
            <input onclick="loginForm()" type="submit" value="Log-In"/>
        </div>

       
    </form>  
    `
}

function loginForm(){
    document.getElementById("login_form").addEventListener('submit',function(event){

        let isValid= true;

        let lemail = document.getElementById('lemail').value;
        let lpass = document.getElementById('lpass').value;
      


        let lemailError = document.getElementById("lemailError");
        let lpassError = document.getElementById("lpassError");

        lemailError.textContent = "";
        lpassError.textContent =  "";

        
        if(!/\S+@\S+\.\S+/.test(lemail)){
            lemailError.textContent = "Required";
            lemailError.classList.add('redAlert')
            isValid = false;
        }else{          
            if(lemail != `${sessionStorage.getItem('uemail')}`){
                lemailError.innerHTML = "Register First";
                lemailError.classList.remove('greenAlert');
                lemailError.classList.add('redAlert');
                isValid = false;
            }else{
                if(lemail == `${sessionStorage.getItem('uemail')}`){
                    lemailError.innerHTML = "Verified";
                    lemailError.classList.add('greenAlert');
                }else{
                    lemailError.innerHTML = "Register First..";
                    lemailError.classList.add('redAlert');
                    isValid = false;
                }
                
            }
        }
       
        let minLength = 8;
     
    
        // Check if the password meets the criteria
        if (lpass.length < minLength) {
            lpassError.textContent = "Required 8 characters.";
            lpassError.classList.add('redAlert');
            isValid = false;
        }else {
            if(lpass == `${sessionStorage.getItem('upass')}`){
                lpassError.classList.remove('redAlert');
                lpassError.textContent = "Valid Password !!!";
                lpassError.classList.add('greenAlert');
                isValid = true;
            }else{
                lpassError.textContent = "Invalid Password !!!";
                lpassError.classList.add('redAlert');
                isValid = false;
             
            }
        }
        
        if(!(isValid)){
            event.preventDefault()
        }else{
       
            alert(`🙋 Welcome! ${lemail} You're Now Logged In. 👋`);

        }
        
    })
}

function register(){
    let changeContent = document.getElementById('changeContent');
    changeContent.innerHTML = `

    <div class="registration-container">
        <span>User Registeration</span>
    </div>

    <form action="./profile.html" method="GET" id="registration_form">
        <div class="inputText_2">
            <label for="uname">Name - <span id="unameError" class=""></span></label>
            <input type="text" id="uname" name="uname" placeholder="Enter Your Name"/>
        </div>

        <div class="inputText_2">
            <label for="uemail">Email - <span id="uemailError" class=""></span></label>
            <input type="email" id="uemail" name="email" placeholder="Enter Your EmailId"/>
        </div>

        <div class="inputText_2">
            <label for="uphone">Phone - <span id="uphoneError" class=""></span></label>
            <input type="tel" id="uphone" name="username" placeholder="Enter Your Phone"/>
        </div>

        <div class="inputText_2">
            <label for="upass">Password - <span id="upassError" class=""></span></label>
            <input type="password" id="upass" name="email" placeholder="Enter Your Password" />
        </div>

        <div class="submitBtn_2">
            <input onclick="registrationValid()" type="submit" value="Register"/>
        </div>
    </form>  
    
    `
}

function registrationValid(){
    document.getElementById('registration_form').addEventListener('submit',function(event){

        let isValid = true;

        let uname = document.getElementById("uname").value;
        let uemail = document.getElementById("uemail").value;
        let uphone = document.getElementById("uphone").value;
        let upass = document.getElementById("upass").value;

       

       sessionStorage.setItem('uname',uname);
       sessionStorage.setItem('uemail',uemail);
       sessionStorage.setItem('uphone',uphone);
       sessionStorage.setItem('upass',upass);
   

       

        let unameError = document.getElementById("unameError");
        let uemailError = document.getElementById("uemailError");
        let uphoneError = document.getElementById("uphoneError");
        let upassError = document.getElementById("upassError");


        
        unameError.textContent = "";
        uemailError.textContent = "";
        uphoneError.textContent = "";
        upassError.textContent = "";

       
        if(uname.trim() === ""){
            unameError.textContent = "Required";
            unameError.classList.add('redAlert');
            isValid = false;
        }else{
            unameError.innerHTML = "Success";
            unameError.classList.remove('redAlert');
            unameError.classList.add('greenAlert');
        }

        if(!/\S+@\S+\.\S+/.test(uemail)){
            uemailError.textContent = "Required";
            uemailError.classList.add('redAlert');
            isValid = false;
        }else{
            uemailError.innerHTML = "Valid";
            uemailError.classList.remove('redAlert');
            uemailError.classList.add("greenAlert");
        }
       
        if(uphone.trim() === ''){
            uphoneError.textContent = "Required";
            uphoneError.classList.add('redAlert');
            isValid = false;
        }else{
            uphoneError.innerHTML = "Succss";
            uphoneError.classList.remove('redAlert');
            uphoneError.classList.add('greenAlert');
        }


        let minLength = 8;
         // Check if the password meets the criteria
         if (upass.length < minLength) {
            upassError.textContent = "Required 8 Character";
            upassError.classList.add('redAlert');
            isValid = false;  
        }else {
            upassError.textContent = "Password is valid!"; 
            upassError.classList.add('greenAlert');

        }
        
        if(!(isValid)){
            event.preventDefault();
        }else{
            alert(`Congratulations! ${uname} You're Successfully Registered.🤗`)
        }

    })
}
 


// Profile -: 




let profileName = document.getElementById('profile-name');
profileName.innerHTML = `${sessionStorage.getItem('uname')}`

// if(profileName == sessionStorage.getItem('uname')){  
//     profileName.innerHTML = `${sessionStorage.getItem('uname')}`
// }else if(profileName == null){
//     profileName.innerHTML = "Log in to see your name.";
// }


let profileEmail = document.getElementById('profile-email');
profileEmail.innerHTML = `${sessionStorage.getItem('uemail')}`

// if(profileEmail == sessionStorage.getItem('uemail')){
//     profileEmail.innerHTML = `${sessionStorage.getItem('uemail')}`
// }else{
//     profileEmail.innerHTML = `Log in to see your email.`
// }


let profilePhone = document.getElementById('profile-uphone');
profilePhone.innerHTML = `${sessionStorage.getItem('uphone')}`

// if(profilePhone == sessionStorage.getItem('uphone')){
//     profilePhone.innerHTML = `${sessionStorage.getItem('uphone')}`
// }else{
//     profilePhone.innerHTML = `Log in to See your phone no.`
// }


let profileStatus = document.getElementById('profile-status');
profileStatus.innerHTML = `${sessionStorage.getItem('status')}`

// if(profileStatus == sessionStorage.getItem('status')){
//     profileStatus.innerHTML = `${sessionStorage.getItem('status')}`
// }else{
//     profileStatus.innerHTML = "Pending"
// }



let profilePeople = document.getElementById('profile-people');
profilePeople.innerHTML = `${sessionStorage.getItem('people')}`

// if(profilePeople == sessionStorage.getItem('people')){
//     profilePeople.innerHTML = `${sessionStorage.getItem('people')}`
// }else{
//     profilePeople.innerHTML = `Reserve First`;
// }



let profileTime = document.getElementById('profile-time');
profileTime.innerHTML = `${sessionStorage.getItem('time')}`

// if(profileTime == sessionStorage.getItem('time')){
//     profileTime.innerHTML = `${sessionStorage.getItem('time')}`;
// }else{
//     profileTime.innerHTML = `Resrve First`;
// }


let profileDate = document.getElementById('profile-date');
profileDate.innerHTML = `${sessionStorage.getItem('date')}`

// if(profileDate == sessionStorage.getItem('date')){
//     profileDate.innerHTML = `${sessionStorage.getItem('date')}`
// }else{
//     profileDate.innerHTML = `Reserve First`;
// }






