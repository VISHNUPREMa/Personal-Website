/*function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById("inquiry-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const confirmationMessage = document.getElementById("confirmation-message");

 
    if (name === "") {
        confirmationMessage.innerHTML = "Please enter your name.";
        return;
    }

   
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        confirmationMessage.innerHTML = "Name should only contain alphabet characters.";
        return;
    }

    if (!validateEmail(email)) {
        confirmationMessage.innerHTML = "Please enter a valid email address.";
        return;
    }

    if (message === "") {
        confirmationMessage.innerHTML = "Please enter your message.";
        return;
    }


    confirmationMessage.innerHTML = "Form submitted successfully!";

    document.getElementById("inquiry-form").reset();

 
});*/


  