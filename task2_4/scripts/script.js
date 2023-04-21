"use strict";

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", submit); // ADD SUBMIT EVENT

class Validation {
  constructor(email) {
    this.email = email;
  }

  isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      alert("This looks like an E-Mail!");
    } else {
      alert("This is not an E-Mail!");
    }
  }
}

function submit() {
  const email = document.querySelector("#email").value;
  const form = new Validation(email);
  form.isEmail(email);
}
