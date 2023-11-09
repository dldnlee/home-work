const inputField = document.getElementById("login-email");
const errorMsg = document.getElementById('email-error');

// function validCheck(){
//   if(field.checkValidity() === true) {
//     errorMsg.innerHTML = "right inputt";
//   } else {
//     errorMsg.innerHTML = "wrong inuput";
//   }
// };

inputField.addEventListener('keydown', function(e) {
  if(inputField.checkValidity() === true) {
    errorMsg.innerHTML = "right inputt";
  } else {
    errorMsg.innerHTML = "wrong inuput";
  }

  inputField.addEventListener('blur', function (e) {
    if(inputField.value === "") {
      errorMsg
    }
  })
})