const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const ruleLength = document.getElementById("rule-length");
const ruleEmail = document.getElementById("rule-email");
const checkbox = document.getElementById("terms-checkbox");
const signupBtn = document.getElementById("signup-btn");

function validatePassword() {
  const password = passwordInput.value;
  const email = emailInput.value.trim();
  const emailUsername = email.split("@")[0] || "";
  let isLengthValid = password.length >= 8;
  let isEmailValid = !password.toLowerCase().includes(emailUsername.toLowerCase());
  // Update rule UI
  ruleLength.style.color = isLengthValid ? "green" : "red";
  ruleEmail.style.color = isEmailValid ? "green" : "red";
  return isLengthValid && isEmailValid;
}

function updateButtonState() {
  const isPasswordValid = validatePassword();
  const isCheckboxChecked = checkbox.checked;
  if (isPasswordValid && isCheckboxChecked) {
    signupBtn.disabled = false;
    signupBtn.classList.add("active");
  } else {
    signupBtn.disabled = true;
    signupBtn.classList.remove("active");
  }
}
// Event Listeners
passwordInput.addEventListener("input", updateButtonState);
emailInput.addEventListener("input", updateButtonState);
checkbox.addEventListener("change", updateButtonState);
