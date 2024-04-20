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
