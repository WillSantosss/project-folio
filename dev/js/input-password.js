export default function inputPassword() {
  document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.getElementById('senha');
    const passwordToggle = document.getElementById('togglePassword');
    const passwordFieldRepet = document.getElementById('senhaRepet');
    const passwordToggleRepet = document.getElementById('togglePasswordRepet');

    const toggleHandler = (field, toggle, otherField, otherToggle) => {
      let isPasswordVisible = false;
      toggle.addEventListener('click', function () {
        isPasswordVisible = !isPasswordVisible;
        field.type = isPasswordVisible ? 'text' : 'password';
        toggle.src = isPasswordVisible ? './assets/images/icon-olho.svg' : './assets/images/icon-olhoAberto.svg';

        // Sincronize com o outro campo
        otherField.type = isPasswordVisible ? 'text' : 'password';
        otherToggle.src = isPasswordVisible ? './assets/images/icon-olho.svg' : './assets/images/icon-olhoAberto.svg';
      });
    };

    toggleHandler(passwordField, passwordToggle, passwordFieldRepet, passwordToggleRepet);
    toggleHandler(passwordFieldRepet, passwordToggleRepet, passwordField, passwordToggle);
  });
}
