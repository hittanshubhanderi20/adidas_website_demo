
function validateform() {
  var email = document.myform.email.value;
  var password1 = document.myform.password1.value;
  var password2 = document.myform.password2.value;

  if (email == null || email == "") {
    alert("Email can't be blank");
    return false;
   } else if (password1.length < 6 || password2.length < 6) {
    alert("Password must be at least 6 characters long.");
    return false;
   } else if(password1 == password2){
    return true;
   } else{
    alert("Passwords don't match");
    return false;
 }
}