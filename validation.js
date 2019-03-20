
$(document).ready(function() {

  $('#box').submit(function(e) {
    e.preventDefault();
    var FirstName = $('#FirstName').val();
    var LastName = $('#LastName').val();
    var Age = parseInt($('#Age').val());
    var Gender = $('#Gender').val();
    var Contact = parseInt($('#Contact'));
    var UserID = parseInt($('#UserID'));
    var EmailID = $('#EmailID').val();
    var password = $('#Password').val();
    var ConfirmPassWord =$('#ConfirmPassWord').val();

   
    if (isNaN(age)) {
      alert("Age must be number. Please Input Correctly");
    }
   
    
    if (isNaN(Contact)) {
        alert("Contact must be number. Please Input Correctly");
      }
    
    if (isNaN(UserID)) {
        alert("UserID must be number. Please Input Correctly");
      }
    
    if (Password.length < 8) {
        alert("Invalid  password");
       }
    if (email.length < 1) {
      alert("Invalid Email");
    	} 
    else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(EmailID);
      if (!validEmail) {
        alert("Invalid Email Please enter correctly");
      }
    }
    
  });
  });

  

  