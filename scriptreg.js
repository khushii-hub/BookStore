var output = document.getElementById('output');
function validateformreg() {
    var email = document.getElementById("email").value;

    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let isemailValid = regex.test(email);
         var username = document.getElementById('username').value;
         var password = document.getElementById('password').value;
        var copassw= document.getElementById('copassw').value;
         var usernameRegex = /^[a-zA-Z0-9]+$/;
         var isUsernameValid = usernameRegex.test(username);

         var isPasswordValid = password.length >= 8;
        
         if (isUsernameValid && isPasswordValid && isemailValid && (password===copassw))  {
             output.innerHTML = "Registration successful!";
         } else {
             output.innerHTML = "Invalid data. Please check your input.";
         }
        }
