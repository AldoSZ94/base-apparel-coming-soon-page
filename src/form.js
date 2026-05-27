// Elementos del DOM.
const emailInput = document.querySelector('#email');
const form = document.querySelector('.content__form');
const emailErrorIcon = document.querySelector('.content__error');
const emailErrorMessage = document.querySelector('.content__error-text');

// Valida el formulario al enviar.
form.addEventListener('submit', (e) => {
  if (!emailInput.validity.valid) {
    e.preventDefault();
    mostrarError();
    return;
  }

  ocultarError();
});

// Oculta el error cuando el email ya es válido.
emailInput.addEventListener('input', () => {
  if (emailInput.validity.valid) {
    ocultarError();
  }
});

// Muestra el estado de error.
function mostrarError() {
  emailErrorIcon.style.opacity = '1';
  emailErrorMessage.style.opacity = '1';
}

// Oculta el estado de error.
function ocultarError() {
  emailErrorIcon.style.opacity = '0';
  emailErrorMessage.style.opacity = '0';
}
