export class Validation {
  constructor(
    firstName,
    lastName,
    email,
    password,
    passwordConfirmed,
    picture,
    age,
    bio
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.passwordConfirmed = passwordConfirmed;
    this.picture = picture;
    this.age = age;
    this.bio = bio;
  }

  isFirstName(firstName) {
    const firstNameRegex = /^[A-Za-z\s]+$/;
    if (firstNameRegex.test(firstName.value)) {
      firstName.setCustomValidity("");
    } else {
      firstName.setCustomValidity(
        "Your first name should have only A-Z and a-z letters, spaces can also be used"
      );
    }
  }

  isLastName(lastName) {
    const lastNameRegex = /^[A-Za-z\s]+$/;
    if (lastNameRegex.test(lastName.value)) {
      lastName.setCustomValidity("");
    } else {
      lastName.setCustomValidity(
        "Your last name should have only A-Z and a-z letters, spaces can also be used"
      );
    }
  }

  isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email.value)) {
      email.setCustomValidity("");
    } else {
      email.setCustomValidity("Your e-mail input is not an e-mail!");
    }
  }

  isPassword(password) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordRegex.test(password.value)) {
      password.setCustomValidity("");
    } else {
      password.setCustomValidity(
        "Your password should have at least 8 upper and lower case letters, at least 1 symbol, at least 1 number"
      );
    }
  }

  isPasswordConfirmed(passwordConfirmed, password) {
    if (passwordConfirmed.value === password.value) {
      passwordConfirmed.setCustomValidity("");
    } else {
      passwordConfirmed.setCustomValidity("Your two passwords don't match!");
    }
  }

  isPicture(picture) {
    if (picture.value) {
      picture.setCustomValidity("");
    } else {
      picture.setCustomValidity(
        "You did not upload your profile picture, please, consider uploading one"
      );
    }
  }

  isAge(age) {
    if (age.value < 18 && age.value >= 0) {
      age.setCustomValidity(
        "You need to get your parent consent to create an account"
      );
    } else if (age.value >= 18 && age.value <= 100) {
      age.setCustomValidity("");
    } else {
      age.setCustomValidity(
        "Frankly speaking, this age doesn't look too realistic..."
      );
    }
  }

  isBio(bio) {
    if (bio.value) {
      bio.setCustomValidity("");
    } else {
      bio.setCustomValidity(
        "You did not tell us anything about yourself. Please, consider filling up the Bio form"
      );
    }
  }
}
