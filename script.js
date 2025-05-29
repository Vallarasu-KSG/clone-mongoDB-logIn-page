const emailInput = document.getElementById('emailInput');
const nextBtn = document.getElementById('nextBtn');
const passwordField = document.getElementById('passwordField');

// Enable "Next" button if input is not empty
emailInput.addEventListener('input', () => {
  const email = emailInput.value.trim();
  if (email.length > 0) {
    nextBtn.classList.remove('disabled');
    nextBtn.classList.add('active');
  } else {
    nextBtn.classList.add('disabled');
    nextBtn.classList.remove('active');
  }
});

// Show password field on clicking Next
nextBtn.addEventListener('click', () => {
  if (!nextBtn.classList.contains('disabled')) {
    // Optional email validation
    const emailValue = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (isValidEmail) {
      passwordField.style.display = 'block';
      nextBtn.innerHTML = '<span>Login</span>';
    } else {
      alert("Please enter a valid email.");
    }
  }
});