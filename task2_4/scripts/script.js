"use strict";

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", submit); // ADD SUBMIT EVENT

class Validation {
  constructor(email) {
    this.email = email;
    this.password = password;
  }

  isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      alert("Email confirmed");
    } else {
      alert("Please check your e-mail input again!");
    }
  }

  isPassword(password) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordRegex.test(password)) {
      alert("Password confirmed");
    } else {
      alert(
        "Your password should have at least 8 upper and lower case letters, at least 1 symbol, at least 1 number"
      );
    }
  }
}

function submit() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const form = new Validation(email);
  form.isEmail(email);
  form.isPassword(password);
}
