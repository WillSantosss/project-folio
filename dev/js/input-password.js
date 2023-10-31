export default function inputPassword() {
  document.addEventListener('DOMContentLoaded', function () {
    const passwordField = document.getElementById('senha');
    const passwordToggle = document.getElementById('togglePassword');
    let isPasswordVisible = false;

    passwordToggle.addEventListener('click', function () {
      isPasswordVisible = !isPasswordVisible;
      passwordField.type = isPasswordVisible ? 'text' : 'password';
      passwordToggle.src = isPasswordVisible ? './assets/images/icon-olho.svg' : './assets/images/icon-olhoAberto.svg';
    });
  });
}