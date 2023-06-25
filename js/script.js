document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  let emailInput = document.getElementById('email');
  let passwordInput = document.getElementById('password');
  let resultDiv = document.getElementById('result');
  let emailError = document.getElementById('emailError');

  if (emailInput.value.length > 30) {
    emailError.textContent = 'El correo electrónico debe tener como máximo 30 caracteres';
    return;
  }

  if (isValidEmail(emailInput.value)) {
    emailInput.value = '';
    passwordInput.value = '';
    resultDiv.textContent = '';
    emailError.textContent = '';
  } else {
    resultDiv.textContent = 'Error';
  }
});

function isValidEmail(email) {
  // Utilizamos una expresión regular simple para validar el formato del correo electrónico
  let emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

// main.js
document.addEventListener('DOMContentLoaded', function() {
var loginBtn = document.querySelector('#loginBtn');
var registerBtn = document.querySelector('#registerBtn');

if (loginBtn) {
  loginBtn.addEventListener('click', function() {
    window.location.href = 'login.html';
  });
}

if (registerBtn) {
  registerBtn.addEventListener('click', function() {
    window.location.href = 'login.html';
  });
}
});

