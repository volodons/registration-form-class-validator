"use strict";

import { Validator } from "./validator.js";

let form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const pictureInput = document.getElementById("picture");
const ageInput = document.getElementById("age");
const bioInput = document.getElementById("bio");

console.log(nameInput.value);

const myValidator = new Validator([
  {
    input: nameInput,
    rules: [Validator.isRequired],
    errorMessage: "Name is not valid",
  },
  {
    input: emailInput,
    rules: [Validator.isRequired, Validator.isEmail],
    errorMessage: "Email is not valid",
  },
  {
    input: passwordInput,
    rules: [Validator.isRequired, Validator.isPassword],
    errorMessage: "Password is not valid",
  },
  {
    input: pictureInput,
    rules: [Validator.isRequired],
    errorMessage: "Picture is not valid",
  },
  {
    input: ageInput,
    rules: [Validator.isAge],
    errorMessage: "Age is not valid",
  },
  {
    input: bioInput,
    rules: [Validator.isRequired],
    errorMessage: "Bio is not valid",
  },
]);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
  removesAllErrorElements();
  const validationResult = myValidator.validate();
  console.log(validationResult);

  validationResult.forEach((inputValidationResult) => {
    if (inputValidationResult.success === false) {
      generateErrorElement(
        inputValidationResult.input,
        inputValidationResult.errorMessage
      );
    }
  });
});

function removesAllErrorElements() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((errorElement) => {
    errorElement.remove();
  });
}

function generateErrorElement(input, errorMessage) {
  const errorElement = document.createElement("div");
  errorElement.classList.add("error");
  errorElement.textContent = errorMessage;
  input.parentElement.appendChild(errorElement);
}
