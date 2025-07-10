const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passComfirm');
const checkboxSend = document.querySelector('#checkboxSend');
const checkboxSendAgreed = document.querySelector('#checkboxSendAgreed');
// message d'erreur
const usernameError = document.querySelector('.usernameError');
const emailError = document.querySelector('.emailError');
const passwordError = document.querySelector('.passwordError');
const confirmError = document.querySelector('.confirmError');
const sendError = document.querySelector('.sendError');
const agreedError = document.querySelector('.agreedError');
const message = document.querySelector('.message');


function viderChamps(){
  username.value = "";
    email.value = "";
    password.value = "";
    passwordConfirm.value = "";
    checkboxSend.checked = false;
    checkboxSendAgreed.checked = false;
}

function colorErreur (div, text){
   div.textContent = text;
    div.style.setProperty("color", "#f326ae");
    div.style.setProperty("font-size", "12px");
}



const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
  e.preventDefault();

     usernameError.textContent = "";
     emailError.textContent = "";
     passwordError.textContent = "";
     confirmError.textContent = "";
     sendError.textContent = "";
     agreedError.textContent = "";

  let hasError = false;
  if(!username.value.trim()) {
    colorErreur(usernameError, 'le nom est requis');
    hasError = true;
  }
  if(!email.value.trim()) {
    colorErreur(emailError, "l'email est requis");
    hasError = true;
  }
  if(!password.value.trim()) {
    colorErreur(passwordError, 'le mot de passe est requis')
    hasError = true;
  }
  if(!passwordConfirm.value.trim()) {
    colorErreur(confirmError, 'la confirmation est requis');
    hasError= true;
  }else if (password.value.trim() !== passwordConfirm.value.trim()) {
    colorErreur(colorErreur, 'le mot de passe doit etre identique');
    hasError = true;
  }
  if(!checkboxSend.checked) {
    colorErreur(sendError, 'vueillez cocher');
    hasError = true;
  }
  if(!checkboxSendAgreed.checked) {
    colorErreur(agreedError, 'accepter les termes')
    hasError = true;
  }
  // si tout les champs sont remplie
  if(!hasError) {
    const donnees = {
      username: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        checkboxSend: checkboxSend.checked,
        agreedError: agreedError.checked
      }
      localStorage.setItem('user', JSON.stringify(donnees));
      message.textContent = 'compte crée avec succées !';
      
      
     // Vider les champs du formulaire
    viderChamps();

    }
    
  })
  