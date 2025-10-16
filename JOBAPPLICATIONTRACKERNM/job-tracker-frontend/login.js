//backend 

// login.js
document.getElementById("login-button").addEventListener("click", async function (event) {
  event.preventDefault();

  const emailInput = document.querySelector("input[type='email']");
  const passwordInput = document.querySelector("input[type='password']");
  const phoneInput = document.querySelector("input[type='tel']");

  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const phone = phoneInput.value.trim();

  // remove old errors
  document.querySelectorAll(".error-msg").forEach(el => el.remove());

  let valid = true;
  function showError(input, message) {
    const error = document.createElement("p");
    error.textContent = message;
    error.style.color = "red";
    error.classList.add("error-msg");
    error.style.fontSize = "14px";
    error.style.margin = "0 0 5px 0";
    input.insertAdjacentElement("afterend", error);
    valid = false;
  }

  // Validate: must provide either email OR phone
  if (!email && !phone) {
    showError(emailInput, "Enter email or phone");
    showError(phoneInput, "Enter phone or email");
  }

  // If email provided, password is required for security
  if (email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) showError(emailInput, "Enter a valid email");

    if (!password) showError(passwordInput, "Password required with email");
  }

  // If phone provided, we allow phone-only login (but check format)
  if (phone) {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) showError(phoneInput, "Enter a valid 10-digit phone");
    // password is optional for phone-only flow per your request
  }

  if (!valid) return;

  // Build payload
  const payload = {};
  if (email) payload.email = email;
  if (phone) payload.phone = phone;
  if (password) payload.password = password;

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (!res.ok) {
      showError(passwordInput, data.message || 'Login failed');
      return;
    }

    // Save token & user and redirect
    localStorage.setItem('token', data.token);
    localStorage.setItem('loggedInUser', JSON.stringify(data.user));
  //  alert('Welcome back', ${'data.user.username'});
    window.location.href = 'index.html';
  } catch (err) {
    console.error(err);
    showError(passwordInput, 'Server error');
  }
});