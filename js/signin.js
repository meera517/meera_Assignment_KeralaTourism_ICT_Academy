var email = document.getElementById("email")
var emaillab = document.getElementById("emaillabel")
var password = document.getElementById("TextBox1")
var passlab = document.getElementById("passlabel")


email.onfocus = function() {
  emaillab.innerHTML ="Enter your email address"
  emaillab.style.width= "220px"
}
// When the user clicks outside of the password field, hide the message box
email.onblur = function() {
  emaillabel.innerHTML =""

}

function emailValid()
{
// function validate(){
    // var regex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/   **seems some runtime bug
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(email.value ==""){
        emaillab.innerText = "Email cannot be empty"
        emaillab.style.backgroundColor = "brown"
        emaillab.style.width = "200px" 
        email.style.borderColor = "red"
    
        
        return false;
    }
    else if(regex.test(email.value)==false){
        emaillab.innerText = "Please enter a valid email❕"
        emaillab.style.width = "225px"
        emaillab.style.backgroundColor = "rgba(92, 57, 0)"
        email.style.borderColor = "red"
        return false;
    }
    else{
        emaillab.innerText = "Email is Validated"
        emaillab.style.width = "150px"
        emaillab.style.backgroundColor = "green"
        email.style.borderColor = "green"
        return true;
        
        

    }
};



var passwordTextBox = document.getElementById("psw");


var togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#psw');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type1 = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type1);
  // toggle the eye / eye slash icon
  this.classList.toggle('bi-eye');
});




//new srengthCode 01/09/2021
var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
  document.getElementById("Progress").style.visibility = "visible";
  passlab.innerHTML = "Enter your Password"
  passlab.style.width ="200px"
  passlab.style.backgroundColor ="rgb(92, 57, 0)"
  
}
  function passField(){
  var passwordScore = 0;
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  // if(myInput.value.trim()==""){
  //   return false;
  // }
  if(myInput.value.match(lowerCaseLetters)) {  
    // letter.classList.remove("invalid");
    // letter.classList.add("valid");
    passwordScore += 20;
    
  } else {
    // letter.classList.remove("valid");
    // letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    // capital.classList.remove("invalid");
    // capital.classList.add("valid");
    passwordScore += 20;
  } else {
    // capital.classList.remove("valid");
    // capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    // number.classList.remove("invalid");
    // number.classList.add("valid");
    passwordScore += 20;
    
  } else {
    // number.classList.remove("valid");
    // number.classList.add("invalid");
    
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    // length.classList.remove("invalid");
    // length.classList.add("valid");
    passwordScore += 20;
  } else {
    // length.classList.remove("valid");
    // length.classList.add("invalid");
    
  }



var strength = "";
// var backgroundColor = "red";

if (passwordScore >= 80) 
{
  strength = "Ready to Submit✔️";
  // backgroundColor = "green";
  passlab.style.backgroundColor = "white"
  passlab.innerHTML = ""
  passlab.style.color = "black"
  myInput.style.borderColor = "green"

  

}
else if (passwordScore >= 40) 
{
  strength = "";
  // backgroundColor = "Orange";
  passlab.style.backgroundColor = "white"
  passlab.style.color = "black"
  myInput.style.borderColor = "red"


}
else if (passwordScore >= 20) 
{
  strength = "";
  passlab.style.backgroundColor = "white"
  passlab.style.color = "black"
  // backgroundColor = "maroon";
  myInput.style.borderColor = "red"
  passlab.innerHTML ="please enter a valid email"

}
else 
{
  strength = "Password cannot be empty";
  backgroundColor = ""
  passlab.style.backgroundColor = "brown"
  passlab.style.width= "230px"
  passlab.style.color = "white"
  myInput.style.borderColor = "red"

//          
  
}   


document.getElementById("passlabel").innerHTML = strength;
passwordTextBox.style.backgroundColor = backgroundColor;
} 
function validate(){
  let a = emailValid();
  let b = passField();
  return a && b;
}        

// 
 
         
       


