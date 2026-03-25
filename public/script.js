function showMessage() {
  alert("Button clicked!");
}

function validateForm() {
  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  const nameError = document.getElementById("nameError");
  if (name === "") {
    nameError.innerText = "Name is required.";
    valid = false;
  } else {
    nameError.innerText = "";
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.innerText = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    emailError.innerText = "Please enter a valid email address.";
    valid = false;
  } else {
    emailError.innerText = "";
  }

  // Message validation
  const message = document.getElementById("message").value.trim();
  const messageError = document.getElementById("messageError");
  if (message === "") {
    messageError.innerText = "Message is required.";
    valid = false;
  } else {
    messageError.innerText = "";
  }

  return valid;
}
