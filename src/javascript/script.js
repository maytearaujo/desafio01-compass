const emailRegex = new RegExp(
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
);

let formSubscribe = document.getElementById("form-subscribe");

formSubscribe.addEventListener("submit", (e) => {
  e.preventDefault();

  let emailSubscribe = document.getElementById("emailSubscribe").value;

  if (emailSubscribe === "" || emailRegex.test(emailSubscribe) == false) {
    document.getElementById("verificarEmail").innerHTML =
      "Por favor, preencha o e-mail";
  } else {
    let emails = new Array();

    if (localStorage.hasOwnProperty("emails")) {
      emails = JSON.parse(localStorage.getItem("emails"));
    }

    emails.push({ emailSubscribe, emailSubscribe });

    localStorage.setItem("emails", JSON.stringify(emails));

    alert("Thank you for subscribing.");

    document.getElementById("emailSubscribe").value = "";
    document.getElementById("verificarEmail").innerHTML = "";
  }
});

// Salvando informações no local storage Form Contact Us
let formContactUs = document.getElementById("contact-us");

formContactUs.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let emailAddress = document.getElementById("emailAddress").value;
  let message = document.getElementById("message").value;

  if (firstName == "") {
    document.getElementById("verificarCampos").innerHTML =
      "Please, check the first name";
    // alert("Nome")
  } else if (lastName === "") {
    document.getElementById("verificarCampos").innerHTML = "";
    document.getElementById("verificarCampos").innerHTML =
      "Please, check the last name";
    //   alert("Sobrenome")
  } else if (emailAddress === "" || emailRegex.test(emailAddress) == false) {
    document.getElementById("verificarCampos").innerHTML = "";
    document.getElementById("verificarCampos").innerHTML =
      "Please, check the e-mail";
    // alert("email")
  } else if (message === "") {
    document.getElementById("verificarCampos").innerHTML = "";
    document.getElementById("verificarEmail").innerHTML =
      "Please, check the message";
    //   alert("mensagem")
  } else {
    document.getElementById("verificarCampos").innerHTML = "";
    let usuarios = new Array();

    if (localStorage.hasOwnProperty("usuarios")) {
      usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    usuarios.push({ firstName, lastName, emailAddress, message });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Welcome, thank you for registering.");

    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("emailAddress").value = "";
    document.getElementById("message").value = "";
  }
});
