//usernamre field
let user = document.getElementById("username")
let userlabel = document.getElementById("userlabel")
user.onfocus = function(){
     userlabel.innerHTML ="Enter Your User name⚠️";
     userlabel.style.width ="220px"
}
user.onblur = function(){
  userlabel.innerHTML = ""
}
// user.onkeyup = userName;
function userName(){
  if(user.value.trim()==""){
    userlabel.innerHTML= "Username cannot be empty"
    userlabel.style.backgroundColor = "brown"
    user.style.borderColor="red"
    userlabel.style.width = "230px"
    return false;
  }
  else{
    userlabel.innerHTML = "Perfect🏍️.."
    userlabel.style.width = "180px"
    user.style.borderColor="green"
    return false;
  }
}


// signup.js
var email = document.getElementById("email")
var emaillab = document.getElementById("emaillabel")
var password = document.getElementById("TextBox1")
var passlab = document.getElementById("passlabel")





//email

email.onfocus = function() {
    emaillab.innerHTML ="Enter your email address⚠️"
    emaillab.style.width= "240px"
    // emaillab.style.borderColor = "red"
  }
  // When the user clicks outside of the password field, hide the message box
  email.onblur = function() {
    emaillabel.innerHTML =""
  
  }
  
  
  // email.onkeyup = emailValid;
  function emailValid()
  {
  // function validate(){
      // var regex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/   **seems some runtime bug
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(email.value == ""){
          emaillab.innerText = "Email cannot be empty"
          email.style.borderColor ="red"
          // email.style.border.classList.add('animate__animated', 'animate__bounceOutLeft');
          emaillab.style.backgroundColor = "brown"
          emaillab.style.width = "200px" 
      
          
          return false;
      }
      else if(regex.test(email.value)==false){
          emaillab.innerText = "Please enter a valid email❕"
          email.style.borderColor ="red"
          emaillab.style.width = "225px"
          emaillab.style.backgroundColor = "rgba(92, 57, 0)"
          return false;
      }
      else{
          emaillab.innerText = "Email is Validated"
          email.style.borderColor ="green"
          emaillab.style.width = "150px"
          emaillab.style.backgroundColor = "green"
          return true;
          
          
  
      }
  };

//email end





//password field

var togglePassword = document.querySelector('#togglePassword');
var password = document.querySelector('#psw');
var passwordTextBox = document.getElementById("psw");

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
var number1 = document.getElementById("number");
var length = document.getElementById("length");
// var progressBar = document.getElementById("progressBar")


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  // window.scrollTo(240,400);
  window.scroll({
    top: 300, 
    left: 0, 
    behavior: 'smooth'
  });
  document.getElementById("message").style.display = "block";
  document.getElementById("Progress").style.visibility = "visible";
  passlab.innerHTML = "Enter your Password⚠️"
  passlab.style.width ="200px"
  passlab.style.backgroundColor ="rgb(92, 57, 0)"
  
  
}
// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
  document.getElementById("Progress").style.visibility = "hidden";

  
  passlab.innerHTML = ""
}

// When the user starts to type something inside the password field
// myInput.onkeyup = function() {
  function passMain(){
  var passwordScore = 0;
  let proPer = document.getElementById("proPer")
 
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
    passwordScore += 20;
    
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
    passwordScore += 20;
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number1.classList.remove("invalid");
    number1.classList.add("valid");
    passwordScore += 20;
    
  } else {
    number1.classList.remove("valid");
    number1.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    passwordScore += 20;
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }



var strength = "";
var backgroundColor = "red";

if (passwordScore >= 80) 
{
  strength = "Strong";
  backgroundColor = "green";
  passlab.style.backgroundColor = "white"
  passlab.innerText= ""
  passlab.style.color = "black"
  progressBar.style.width="100%"
  proPer.innerHTML = "100%"
  progressBar.classList.remove('bg-danger')
  progressBar.style.backgroundColor = "green"
  myInput.style.borderColor ="green"
  
  window.scrollTo(0,300);

}
else if (passwordScore >= 40) 
{
  strength = "Medium";
  backgroundColor = "Orange";
  passlab.style.backgroundColor = "white"
  passlab.style.color = "black"
  progressBar.style.width="50%"
  proPer.innerHTML = "60%"
  progressBar.classList.remove('bg-danger')
  progressBar.style.backgroundColor = "orange"

  window.scrollTo(0,300);

}
else if (passwordScore >= 20) 
{
  strength = "Weak";
  passlab.style.backgroundColor = "white"
  passlab.style.color = "black"
  backgroundColor = "maroon";
  progressBar.style.width="30%"
  proPer.innerHTML = "20%"
  progressBar.classList.remove('bg-danger')
  // progressBar.classList.add('bg')
  progressBar.style.backgroundColor = "red"
  passlab.innerHTML ="please enter a valid email"
  window.scrollTo(0,300);
 
}
else 
{
  strength = "Password cannot be empty";
  backgroundColor = ""
  passlab.style.backgroundColor = "brown"
  passlab.style.width= "230px"
  passlab.style.color = "white"
  progressBar.style.backgroundColor = "";
  progressBar.classList = ""    
  proPer.innerHTML = "" 
  myInput.style.borderColor ="red"
//          
  
}   


document.getElementById("passlabel").innerHTML = strength;
passwordTextBox.style.backgroundColor = backgroundColor;
}

//password END
var repeat = document.getElementById("pass1")
var repeatlabel = document.getElementById("passlabel1")


function passRepeat(){
  if(repeat.value.trim()==""){
    repeat.style.borderColor ="red"
    return false;
  }
// document.getElementById("pass1").value == document.getElementById("myInput")
if(myInput.value == repeat.value){
  repeatlabel.innerText = "Password success ✔️"
  repeatlabel.style.width = "180px"
  repeatlabel.style.backgroundColor ="green"
  repeat.style.borderColor ="green"
  return true;
}else{
repeatlabel.innerHTML ="Password does not match"
repeatlabel.style.width = "240px"
repeatlabel.style.backgroundColor ="rgb(92, 57, 0)"
repeat.style.borderColor ="red"
return false;
}

// if(repeat.value.trim()==""){
//   repeatlabel.innerHTML = ""
// }
}
// repeat.onkeydown = function(){
//   if(repeat.value.trim()==""){
//     repeat.style.borderColor ="red"
//     return false;
//   }
// }


// regex.test(email.value)







//Number Field
var number = document.getElementById("num");
var numlabel = document.getElementById("numlabel");
var numtext = document.getElementById("numtext")
 
number.onfocus = function(){
  numlabel.style.backgroundColor = "rgba(92, 57, 0)";
  numlabel.innerText = "Enter Your Number⚠️";
  numlabel.style.width = "200px"
  numtext.innerText = "Accept additional 3 formats:\n eg: XXX-XXX-XXXX, XXX.XXX.XXXX,\n XXX XXX XXXX "
  numtext.style.color="rgb(91, 133, 33)"
  window.scrollTo(250,100);
  
}
number.onblur = function(){
  numtext.innerHTML =""
  numlabel.innerHTML =""
}


// number.onkeyup = numField;
function numField(){
  
// number.addEventListener('input',function(){
    var phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // var phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    // var phoneCode = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(number.value == ""){
        numlabel.innerText = "Number cannot be empty";
        number.style.borderColor = "red"
        numlabel.style.backgroundColor = "brown"
        numlabel.style.width = "225px" 
        numtext.innerText = ""
        
        return false;
    }

  
// XXX-XXX-XXXX
  else if(number.value.match(phoneCode)){
    numlabel.innerText = "Mobile number is valid";
    number.style.borderColor = "green"
    numlabel.style.width = "200px"  
    numlabel.style.backgroundColor ="green";
    numtext.innerText = "";
    return false;
}

else{
  numlabel.style.backgroundColor = "rgb(92, 57, 0)";
  numlabel.innerText = "Number must contain 10 digits";
  numlabel.style.width = "260px" 
  // number.style.borderColor ="brown"
  numtext.innerText = "Accept additional 3 formats:\n XXX-XXX-XXXX, XXX.XXX.XXXX,\n XXX XXX XXXX"
  // numtext.style.color="yellow"

   
    return false;
}
};
//number field End


// function validate(){
//   if(emailValid() && passField() && numField()){
//       return true;
//   }else{
//     return false
//   }
// }   
function validate(){
  var a = emailValid();
  var b = passMain();
  var c = numField();
  var d = passRepeat();
  var e = userName();
  return a && b && c && d && e;
}

