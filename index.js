function sendEmail(){
    var param = {
        fname: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        form: document.getElementById("contactForm"),
        name_error_name: document.getElementById("name_error_name"),
        name_error_email: document.getElementById("name_error_email"),
        name_error_message: document.getElementById("name_error_message"),    
    };

    param.name_error_name.innerHTML = "";
    param.name_error_email.innerHTML = "";
    param.name_error_message.innerHTML = "";

    if (param.fname === "") {
        param.name_error_name.innerHTML = "Please fill out the name";
        return; // Stop form submission if any field is empty
    }

    if (param.email === "") {
        param.name_error_email.innerHTML = "Please fill out the email";
        return; // Stop form submission if any field is empty
    }

    if (param.message === "") {
        param.name_error_message.innerHTML = "Please fill out the message";
        return; // Stop form submission if any field is empty
    }

 
    const serviceID = 'service_5wsh1h2';
    const templateID = 'template_p1hav18';

    emailjs.send(serviceID, templateID, param)
    .then(function(res){
        console.log(res);
        alert("Thank you for contacting us!");
        // document.getElementById('contactForm').reset();
        param.form.reset();
        }, function(error) {
        console.log("Email failed to send:", error);
        alert("Oops! Something went wrong. Please try again later.");
    });

    
}

