"use strict";

import { Validation } from "./validation.js";

const submit = document.querySelector("#form");
submit.addEventListener("submit", submitForm);

function submitForm() {
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const passwordConfirmed = document.querySelector("#passwordConfirmed");
  const picture = document.querySelector("#picture");
  const age = document.querySelector("#age");
  const bio = document.querySelector("#bio");
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
