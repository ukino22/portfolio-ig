const handleSubmit = (e) => {
    console.log("Estoy adentro");
  e.preventDefault()
  let myForm = document.getElementById('contacto-portfolio');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => document.querySelector("#resultado").innerHTML = "Mensaje enviado!")
  /*console.log('Form successfully submitted'))*/
    .then(setTimeout(() => {
        document.querySelector("#resultado").innerHTML = "";
        document.querySelector("#contacto-portfolio").reset();
    }, 5000))
    .catch((error) => alert(error));
};

document.querySelector("form").addEventListener("submit", handleSubmit);