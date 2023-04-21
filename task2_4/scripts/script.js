"use strict";

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", isEmail);
const emailInput = document.querySelector("#email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class Validator {
  email;

  constructor(params) {
    this.email = params.email;
  }

  isEmail(string) {
    if (emailRegex.test(string)) {
      alert("This looks like an E-Mail, yay!");
    } else {
      alert("This is not an E-Mail, get out of my building!");
    }
  }
}
