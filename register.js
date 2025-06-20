const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

function validatePasswords() {
  password.classList.remove("password-match", "password-nomatch");
  confirmPassword.classList.remove("password-match", "password-nomatch");

  /**
   * Přidávání a odstraňovaní classListů na základě hesel zda se shodují nebo ne
   */

  if (password.value && confirmPassword.value) {
    if (password.value === confirmPassword.value) {
      password.classList.add("password-match");
      confirmPassword.classList.add("password-match");
    } else {
      password.classList.add("password-nomatch");
      confirmPassword.classList.add("password-nomatch");
    }
  }
}

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);
