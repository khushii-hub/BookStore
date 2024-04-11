function validateForm() {
    var name = document.getElementById("nameInput").value;
    var cardNumber = document.getElementById("cardNumberInput").value;
    var expirationDate = document.getElementById("expirationInput").value;
    var securityCode = document.getElementById("securityCodeInput").value;

    if (name === '' || cardNumber === '' || expirationDate === '' || securityCode === '') {
        alert('Please fill in all the fields');
    } else {
        // You can add further logic here, such as AJAX request to handle form submission
        alert('Payment confirmed!');
    }
}
