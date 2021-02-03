
function validateform() {
    var email = document.myform2.email.value;
    var password1 = document.myform2.password1.value;
  
   if (email == null || email == "") {
      alert("Email can't be blank");
      return false;
     } else if (password1.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
     }
   }
  