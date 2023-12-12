document.getElementById("reservationForm").addEventListener('submit',function(event){

   


let isValid = true;

    let people = document.getElementById('people').value;
    let time = document.getElementById('time').value;
    let date = document.getElementById('date').value;
    let status = 'confirm';


    let peopleError = document.getElementById('peopleError');
    let dateError = document.getElementById('dateError');
    let timeError = document.getElementById('timeError');

    peopleError.textContent = "";
    dateError.textContent = "";
    timeError.textContent = "";

    let logIn = sessionStorage.getItem('uemail');
   

    if(logIn == null){
        alert("Access Restricted: Please Log In to Continue. 🚫");
        isValid = false;
    }else{
        sessionStorage.setItem('people',people);
        sessionStorage.setItem('time',time);
        sessionStorage.setItem('date',date);
    }


    if(people.trim() == ''){
        peopleError.innerHTML = "Required";
        peopleError.classList.add('redAlert');
        isValid = false
    }else{
        peopleError.innerHTML = "Success";
        peopleError.classList.remove('redAlert');
        peopleError.classList.add('greenAlert');
    }

    if(date.trim() == ''){
        dateError.innerHTML = "Required";
        dateError.classList.add('redAlert');
        isValid = false;
    }else{
        dateError.innerHTML = "Success";
        dateError.classList.remove('redAlert');
        dateError.classList.add('greenAlert');
    }

    if(time.trim() == ''){
        timeError.innerHTML = "Required";
        timeError.classList.add('redAlert');
        isValid = false;
    }else{
        timeError.innerHTML = "Success";
        timeError.classList.remove('redAlert');
        timeError.classList.add('greenAlert');    
    }




    if(!(isValid)){
        event.preventDefault()
    }else{
        sessionStorage.setItem('status',status);
        alert(`Congragulation 🥳 Reservation Successfully Done For 🧑‍🤝‍🧑 ${people} on 🗓️ ${date} and time is ${time} ⏱️`) 
       
    }
})





