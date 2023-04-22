"use strict";

const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", submit); // ADD SUBMIT EVENT

class Validation {
  constructor(
    email,
    password,
    passwordConfirmed,
    firstName,
    lastName,
    picture,
    age
  ) {
    this.email = email;
    this.password = password;
    this.passwordConfirmed = passwordConfirmed;
    this.firstName = firstName;
    this.lastName = lastName;
    this.picture = picture;
    this.age = age;
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

  isPicture(picture) {
    if (picture) {
      alert("Picture is confirmed. Processing...");
    } else {
      alert(
        "You did not upload your profile picture, please, consider uploading one"
      );
    }
  }

  isAge(age) {
    if (age < 18 && age >= 0) {
      alert("You need to get your parent consent to create an account");
    } else if (age >= 18 && age <= 100) {
      alert("Age is confirmed. Processing...");
    } else {
      alert("Frankly speaking, this age doesn't look too realistic...");
    }
  }
}

function submit() {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const passwordConfirmed = document.querySelector("#passwordConfirmed").value;
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const picture = document.querySelector("#picture").value;
  const age = document.querySelector("#age").value;
  const form = new Validation(
    email,
    password,
    passwordConfirmed,
    firstName,
    lastName,
    picture,
    age
  );
  form.isEmail(email);
  form.isPassword(password);
  form.isPasswordConfirmed(passwordConfirmed, password);
  form.isFirstName(firstName);
  form.isLastName(lastName);
  form.isPicture(picture);
  form.isAge(age);
}
