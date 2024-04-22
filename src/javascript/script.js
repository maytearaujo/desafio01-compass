// Salvando informações no local storage subscribe
let formSubscribe = document.getElementById("form-subscribe");


// formContactUs.addEventListener("submit", (e) => {
formSubscribe.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailSubscribe = document.getElementById("emailSubscribe").value;

    let emails = new Array();

    if (localStorage.hasOwnProperty("emails")){
        emails = JSON.parse(localStorage.getItem('emails'));
    }

    emails.push({emailSubscribe, emailSubscribe})

    localStorage.setItem("emails", JSON.stringify(emails));
    
    alert ("Thank you for subscribing.");
    
    document.getElementById('emailSubscribe').value='';

})


// Salvando informações no local storage Form Contact Us
let formContactUs = document.getElementById("contact-us");

formContactUs.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let emailAddress = document.getElementById("emailAddress").value;
    let message = document.getElementById("message").value;

    let usuarios = new Array();

    if (localStorage.hasOwnProperty("usuarios")){
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }

    usuarios.push({firstName, lastName, emailAddress, message})


    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert('Welcome, thank you for registering.');

    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('emailAddress').value = '';
    document.getElementById('message').value = '';
});
