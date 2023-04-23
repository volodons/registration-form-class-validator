"use strict";

import { Validation } from "./validation.js";

const submit = document.querySelector("#form");
submit.addEventListener("submit", submitForm);

function submitForm() {
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const passwordConfirmed = document.querySelector("#passwordConfirmed").value;
  const picture = document.querySelector("#picture").value;
  const age = document.querySelector("#age").value;
  const bio = document.querySelector("#bio").value;
  const form = new Validation(
    firstName,
    lastName,
    email,
    password,
    passwordConfirmed,
    picture,
    age,
    bio
  );
  form.isFirstName(firstName);
  form.isLastName(lastName);
  form.isEmail(email);
  form.isPassword(password);
  form.isPasswordConfirmed(passwordConfirmed, password);
  form.isPicture(picture);
  form.isAge(age);
  form.isBio(bio);
}
