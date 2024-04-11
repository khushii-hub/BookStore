var output = document.getElementById('output');
function validateform() {
    var email = document.getElementById("email").value;
    var passw = document.getElementById("passw").value;
    let regex = /^[a-z0-9+]+@[a-z]+\.[a-z]{2,3}$/;
         let isValid = regex.test(email);
         
    if (email === '' || passw === '' ) {
        alert('Please fill in all the fields');
    }else if (isValid) {
        alert('valid email address');
     } else {
        alert(' Invalid email address');
     }
        
    }
