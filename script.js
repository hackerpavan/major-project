//form validation
// window.alert("sometext");

const form = document.getElementById("form");
const fname = document.getElementById("fname");
const dob = document.getElementById("dob");
// gender
const email = document.getElementById("email");
const number = document.getElementById("number");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zipcode = document.getElementById("zipcode");
const event = document.getElementById("event");
const restrictions = document.getElementById("restrictions");
const tshirtSize = document.getElementById("tshirt");


// Get the current date
const currentDate = new Date();
// Format the current date as YYYY-MM-DD
const formattedDate = currentDate.toISOString().split('T')[0];
dob.value = formattedDate


form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
})
const sendData = (sRate, count) => {
    if(sRate === count){
        // alert("Registration successfull")
        const toast = document.getElementsByClassName("toast");
        toast[0].classList.add("show")
          
    }
}
const successMsg = () =>{
    let inputClass = document.getElementsByClassName("input__box");
    // console.log(inputClass);
    var count = inputClass.length - 1;
    for (let i = 0; i < inputClass.length; i++) {
        if (inputClass[i].className === "input__box success") {
            var sRate = 0 + i;
            // console.log(sRate);
            sendData(sRate, count);
        } else{
            return false;
        }
        
    }
}



const isEmail = (email) => {
    var atSymbol = email.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = email.lastIndexOf(".");
    if (dot <= atSymbol + 3) return false;
    if (dot === email.length - 1) return false;
    return true;
}
function validateGender() {
    // Get all radio buttons with name "gender"
    const genderOptions = document.querySelectorAll('input[name="gender"]');

    // Initialize a variable to track if any radio button is checked
    let checked = false;

    // Loop through each radio button
    genderOptions.forEach(option => {
        // If a radio button is checked, set the checked variable to true
        if (option.checked) {
            checked = true;
            setSuccessMsg2(genderOptions)
        }else if(!checked) {
            setErrorMsg2(genderOptions, "Please select a gender.")
            // alert("Please select a gender.");
        }
    });

}
function validate() {
    const fnameVal = fname.value.trim();
    const dobVal = dob.value;
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const streetVal = street.value.trim();
    const cityVal = city.value.trim();
    const stateVal = state.value;
    const zipcodeVal = zipcode.value.trim();
    const eventVal = event.value;
    const restrictionsVal = restrictions.value.trim();
    const tshirtSizeVal = tshirtSize.value;
    // gender validation 
    validateGender()

    // name validation
    if (fnameVal === "") {
        setErrorMsg(fname, "Name cannot be blank")
    } else if (fnameVal.length <= 2) {
        setErrorMsg(fname, "Name min 3 char")
    } else {
        setSuccessMsg(fname)
    }

    
    // email validation
    if (emailVal === "") {
        setErrorMsg(email, "Email cannot be blank")
    } else if (!isEmail(emailVal)) {
        setErrorMsg(emailVal, "Not a valid email")
    } else {
        setSuccessMsg(email)
    }

    // phone validation
    if (numberVal === "") {
        setErrorMsg(number, "Phone Number cannot be blank")
    } else if (numberVal.length != 10) {
        setErrorMsg(number, "Not a valid phone Number")
    } else if(!/^\d+$/.test(numberVal)){
        setErrorMsg(number, "Not a valid phone Number")
    } else {
        setSuccessMsg(number)
    }

    // street address validation
    if (streetVal === "") {
        setErrorMsg(street, "street address cannot be blank")
    } else if (streetVal.length <= 4) {
        setErrorMsg(street, "street address min 5 char")
    } else {
        setSuccessMsg(street)
    }

    // city validation
    if (cityVal === "") {
        setErrorMsg(city, "Name cannot be blank")
    } else if (cityVal.length <= 2) {
        setErrorMsg(city, "Enter a valid city name")
    } else {
        setSuccessMsg(city)
    }

    // state validation
    if (stateVal === "") {
        setErrorMsg(state, "Please select a state.")
        state.focus();
    } else {
        setSuccessMsg(state)
    }

    // zipcode validation
    if (zipcodeVal === "") {
        setErrorMsg(zipcode, "zipcode cannot be blank")
    } else if (zipcodeVal.length >= 7) {
        setErrorMsg(zipcode, "Enter a valid zipcode")
    } else if (zipcodeVal.length <= 4) {
        setErrorMsg(zipcode, "Enter a valid zipcode")
    } else if (!/^\d+$/.test(zipcodeVal)) {
        setErrorMsg(zipcode, "Enter a valid zipcode")
    } else {
        setSuccessMsg(zipcode)
    }
    // event validation
    if (eventVal === "") {
        setErrorMsg(event, "Please select a event.")
        event.focus();
    } else {
        setSuccessMsg(event)
    }

    // restriction validation
    if (restrictionsVal === "") {
        setErrorMsg(restrictions, "Dietary restriction cannot be blank")
    } else if (restrictionsVal.length <= 50) {
        setErrorMsg(restrictions, "Dietary restriction is more then 50 char")
    } else {
        setSuccessMsg(restrictions)
    }
    // tshirt size validation
    if (tshirtSizeVal === "") {
        setErrorMsg(tshirtSize, "Please select a t-shirt size.")
        tshirtSize.focus();
    } else {
        setSuccessMsg(tshirtSize)
    }

    // dob validation
    // Parse the date of birth value to create a Date object
    const dobDate = new Date(dobVal);
    // Get the current date
    const currentDate = new Date();
    // Calculate the age in milliseconds
    const ageInMillis = currentDate - dobDate;
    // Convert age to years
    const ageInYears = ageInMillis / (1000 * 60 * 60 * 24 * 365.25);
    
    // Check if age is less than 16 years
    if (ageInYears < 16) {
        // If less than 16 years, display an error message
        setErrorMsg(dob, "You must be at least 16 years old.");
        return false; // Return false to indicate validation failure
    } else {
        // If age is 16 or older, remove any existing error message
        setSuccessMsg(dob);
        // return true; // Return true to indicate validation success
    }
    // call success function for toast 
    successMsg();
}


function setErrorMsg(input, errMsg) {
    const formControl = input.parentElement
    const small = formControl.querySelector("small")
    formControl.className = "input__box error"
    small.innerText = errMsg
}
function setSuccessMsg(input) {
    const formControl = input.parentElement
    formControl.className = "input__box success"
}

// for gender 
function setErrorMsg2(input, errMsg) {
    const parentElement = input[0].closest('.gender-details'); // Get the common parent element
    parentElement.getElementsByClassName('input__box')[0].classList.add("error")
    const small = parentElement.querySelector("small");
    small.innerText = errMsg;
}
function setSuccessMsg2(input) {
    const parentElement = input[0].closest('.gender-details'); // Get the common parent element
    parentElement.getElementsByClassName('input__box')[0].classList.add("success")
    parentElement.getElementsByClassName('input__box')[0].classList.remove("error")

}


