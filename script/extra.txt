//NavBar Section 
          
function loadPage(pageName){
    var xhr =  new XMLHttpRequest();
    xhr.open('GET',pageName+'.html',true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.getElementById('content').innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}


document.getElementById('home-link').addEventListener('click',function(){
    loadPage('home')
})
    
document.getElementById('menu-link').addEventListener('click',function(){    
    loadPage('menu')
   
})

document.getElementById('about-link').addEventListener('click',function(){  
    loadPage('about')
})

document.getElementById('contact-link').addEventListener('click',function(){
 
    loadPage('contact')

})

document.getElementById('reservation-link').addEventListener('click',function(){
    loadPage('reservation')
})

document.getElementById('profile-link').addEventListener('click',function(){
    loadPage('profile');

    

})

loadPage('home');



// // Contact Us Form Validation 

// function contactUs(){
//     document.getElementById('contactForm').addEventListener('submit',function(event){

//         let isValid = true;

//         var username = document.getElementById('username').value;
//         var email = document.getElementById('email').value;
//         var phone = document.getElementById('phone').value;
//         var address = document.getElementById('address').value;
//         var textAreaMessage = document.getElementById('textAreaMessage').value;

            

//         var usernameError = document.getElementById('usernameError');
//         var emailError = document.getElementById('emailError');
//         var phoneError = document.getElementById('phoneError');
//         var addressError = document.getElementById('addressError');
//         var textAreaMessageError = document.getElementById("textAreaMessageError");


       
//         usernameError.textContent = '';
//         emailError.textContent = '';
//         phoneError.textContent = '';
//         addressError.textContent = '';
//         textAreaMessageError.textContent = '';


    

       
//         if(username.trim() === ''){
//             usernameError.textContent = "Required";
//             isValid = false;
//         }else{
//             sessionStorage.setItem('username',username)  
//         }

//         if(!/\S+@\S+\.\S+/.test(email)){
//             emailError.textContent = "Required";
//             isValid = false;
//         }else{
//             sessionStorage.setItem('email',email);
//         }
    
    
//         if(phone.trim() === ''){
//             phoneError.textContent = "Required";
//             isValid = false;
//         }else{
//             sessionStorage.setItem('phone',phone);
//         }
    
//         if(address.trim() === ''){
//             addressError.textContent = "Required";
//             isValid = false;
//         }else{
//             sessionStorage.setItem('address',address);
//         }

//         if(textAreaMessage.trim() === ''){
//             textAreaMessageError.textContent = "Required"
//             isValid = false;
//         }
    

//         if(!(isValid)){
//             event.preventDefault();
//         }else{
//             alert(`Thank You ${username}  for Your Valuable Feedback...`);
//         }
//     })
// }


// // Reservation Page Validation 


// function reservation(){
//     document.getElementById('reservationForm').addEventListener('submit',function(event){
    

//         let isValid = true;

//         let people = document.getElementById('people').value;
//         let date = document.getElementById('date').value;
//         let time = document.getElementById('time').value;


//         let peopleError = document.getElementById('peopleError');
//         let dateError = document.getElementById('dateError');
//         let timeError = document.getElementById('timeError');


//         peopleError.textContent = '';
//         dateError.textContent = '';
//         timeError.textContent= '';


//         if(people.trim() === ''){
//             peopleError.textContent = "Required";
//             isValid = false;
//         }

                
//         if (!date.match(/^\d{4}-\d{2}-\d{2}$/)) {
//             dateError.textContent = "Required";
//             isValid = false;
//         } 

                
//         if (!time.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
//             timeError.textContent = 'Required';
//             isValid = false;
//         }


//         if(!(isValid)){
//             event.preventDefault()
//         }else{
//             let msg = `Congragulation Reservation Successfully done for ${people} people on Date ${date}`
//             alert(msg);
//         }
//     })
// }



// // Profile Section */


// function logIn(){
//     let changeContent = document.getElementById('changeContent');
//     changeContent.innerHTML = `

//     <div class="login-container">
//          <span>User Login</span>
//     </div>

//     <form action="index.html" method="GET" id="login_form">
//         <div class="inputText_1">
//             <label for="lemail">Email - <span id="lemailError"></span></label>
//             <input type="email" id="lemail" name="lemail" placeholder="Enter Your Email"/>
//         </div>

//         <div class="inputText_1">
//             <label for="lpass">Password - <span id="lpassError"></span></label>
//             <input type="password" id="lpass" name="lpass" placeholder="Enter Your Password"/>
//         </div>
    
//         <div class="submitBtn_1">
//             <input onclick="loginForm()" type="submit" value="Log-In"/>
//         </div>

       
//     </form>  
//     `
// }

// function loginForm(){
//     document.getElementById("login_form").addEventListener('submit',function(event){

//         let isValid= true;

//         let lemail = document.getElementById('lemail').value;
//         let lpass = document.getElementById('lpass').value;
      


//         let lemailError = document.getElementById("lemailError");
//         let lpassError = document.getElementById("lpassError");

//         lemailError.textContent = "";
//         lpassError.textContent =  "";

        
//         if(!/\S+@\S+\.\S+/.test(lemail)){
//             lemailError.textContent = "Required";
//             isValid = false;
//         }else{
//             if(lemail == "admin@gmail.com"){
//                 lemailError = "Password is Valid"
//             }else{
//                 lemailError.textContent = "Enter Correct Email";
//                 isValid = false;
//             }
//         }
       
//         let minLength = 8;
     
    
//         // Check if the password meets the criteria
//         if (lpass.length < minLength) {
//             lpassError.textContent = "Required 8 characters.";
//             isValid = false;
//         }else {
//             if(lpass == 'admin@123'){
//                 lpassError.textContent = "Valid Password !!!";
//                 isValid = true;
//             }else{
//                 lpassError.textContent = "Invalid Password !!!";
//                 isValid = false;
             
//             }
//         }
        
//         if(!(isValid)){
//             event.preventDefault()
//         }else{
       
//             alert(`Log in Successfully  ${lemail}`);

//         }
        
//     })
// }

// function register(){
//     let changeContent = document.getElementById('changeContent');
//     changeContent.innerHTML = `

//     <div class="registration-container">
//         <span>User Registeration</span>
//     </div>

//     <form  method="GET" id="registration_form">
//         <div class="inputText_2">
//             <label for="uname">Name - <span id="unameError"></span></label>
//             <input type="text" id="uname" name="uname" placeholder="Enter Your Name"/>
//         </div>

//         <div class="inputText_2">
//             <label for="uemail">Email - <span id=uemailError></span></label>
//             <input type="email" id="uemail" name="email" placeholder="Enter Your EmailId"/>
//         </div>

//         <div class="inputText_2">
//             <label for="uphone">Phone - <span id=uphoneError></span></label>
//             <input type="tel" id="uphone" name="username" placeholder="Enter Your Phone"/>
//         </div>

//         <div class="inputText_2">
//             <label for="upass">Password - <span id="upassError"></span></label>
//             <input type="password" id="upass" name="email" placeholder="Enter Your Password" />
//         </div>

//         <div class="submitBtn_2">
//             <input onclick="registrationForm()" type="submit" value="Register"/>
//         </div>

     
//     </form>  
    
//     `
// }

// function registrationForm(){
//     document.getElementById('registration_form').addEventListener('submit',function(event){

//         let isValid = true;

//         let uname = document.getElementById("uname").value;
//         let uemail = document.getElementById("uemail").value;
//         let uphone = document.getElementById("uphone").value;
//         let upass = document.getElementById("upass").value;

//         sessionStorage.setItem("uname",uname);
//         sessionStorage.getItem(uname);
    






//         let unameError = document.getElementById("unameError");
//         let uemailError = document.getElementById("uemailError");
//         let uphoneError = document.getElementById("uphoneError");
//         let upassError = document.getElementById("upassError");

        
//         unameError.textContent = "";
//         uemailError.textContent = "";
//         uphoneError.textContent = "";
//         upassError.textContent = "";

       


//         if(uname.trim() === ""){
//             unameError.textContent = "Required";
//             isValid = false;
//         }

//         if(!/\S+@\S+\.\S+/.test(uemail)){
//             uemailError.textContent = "Required";
//             isValid = false;
//         }
       
//         if(uphone.trim() === ''){
//             uphoneError.textContent = "Required";
//             isValid = false;
//         }


//         let minLength = 8;
//          // Check if the password meets the criteria
//          if (upass.length < minLength) {
//             upassError.textContent = "Required 8 Character";
//             isValid = false;  
//         }else {
//             upassError.textContent = "Password is valid!"; 
//         }
        
  

//         if(!(isValid)){
//             event.preventDefault();
//         }else{
//             alert(`Registration Successfull ${uname}`)
//         }

//     })
// }

    

 