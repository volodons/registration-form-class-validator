"use strict";

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", submit); // ADD SUBMIT EVENT

class Validation {
  constructor(email, password, passwordConfirmed, firstName, lastName) {
    this.email = email;
    this.password = password;
    this.passwordConfirmed = passwordConfirmed;
    this.firstName = firstName;
    this.lastName = lastName;
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
      alert("Password processed");
    } else {
      alert(
        "Your password should have at least 8 upper and lower case letters, at least 1 symbol, at least 1 number"
      );
    }
  }

  isPasswordConfirmed(passwordConfirmed, password) {
    if (passwordConfirmed === password) {
      alert("Password confirmation is successful. Processing...");
    } else {
      alert("Your two passwords don't match!");
    }
  }

  isFirstName(firstName) {
    const firstNameRegex = /^[A-Za-z\s]+$/;
    if (firstNameRegex.test(firstName)) {
      alert("First name confirmed");
    } else {
      alert(
        "Your first name should have only A-Z and a-z letters, spaces can also be used"
      );
    }
  }

  isLastName(lastName) {
    const lastNameRegex = /^[A-Za-z\s]+$/;
    if (lastNameRegex.test(lastName)) {
      alert("Last name confirmed and processed");
    } else {
      alert(
        "Your last name should have only A-Z and a-z letters, spaces can also be used"
      );
    }
  }
}

function submit() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const passwordConfirmed = document.querySelector("#passwordConfirmed").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const form = new Validation(email, password, firstName);
  form.isEmail(email);
  form.isPassword(password);
  form.isPasswordConfirmed(passwordConfirmed, password);
  form.isFirstName(firstName);
  form.isLastName(lastName);
}
