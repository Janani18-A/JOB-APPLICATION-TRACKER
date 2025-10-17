document.getElementById("button-sign").addEventListener("click", async function (event) {
    event.preventDefault();

    const username = document.querySelector("input[type='text']").value.trim();
    const emailEnter = document.querySelector("input[type='email']").value.trim();
    const passwords = document.querySelector("input[type='password']").value;
    const phoneNumber = document.querySelectorAll("input[type='text']")[1].value.trim(); // second text input (phone)
    const address = document.querySelectorAll("input[type='text']")[2].value.trim(); // third text input (address)

    document.querySelectorAll(".error-msg").forEach(el => el.remove());

    let valid = true;

    function showError(input, message) {
      const error = document.createElement("p");
      error.textContent = message;
      error.style.color = "red";
      error.classList.add("error-msg");
      error.style.margin = "0 0 5px 0";
      input.insertAdjacentElement("afterend", error);
      valid = false;
    }

    // --- VALIDATIONS ---
    if (username === "") showError(document.querySelector("input[type='text']"), "Please enter your name");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailEnter)) showError(document.querySelector("input[type='email']"), "Enter a valid email address");

    if (passwords === "") showError(document.querySelector("input[type='password']"), "Please enter a password");
    else if (passwords.length < 8) showError(document.querySelector("input[type='password']"), "Password must contain at least 8 characters");

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) showError(document.querySelectorAll("input[type='text']")[1], "Enter a valid 10-digit phone number");

    if (!valid) return;

    // --- SEND DATA TO BACKEND ---
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            username, 
            email: emailEnter, 
            password: passwords, 
            phone: phoneNumber, 
            address 
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        window.location.href = "login.html";
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error, please try again later");
    }
});