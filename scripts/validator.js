export class Validator {
  constructor(validations) {
    this.validations = validations;
  }

  static isRequired(value) {
    return value !== "";
  }

  static isEmail(value) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(value);
  }

  static isPassword(value) {
    const passwordRegex =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(value);
  }

  static isAge(value) {
    return value >= 0 && value <= 100;
  }

  validate() {
    const results = [];

    this.validations.forEach((validation) => {
      const input = validation.input;
      const rules = validation.rules;
      const errorMessage = validation.errorMessage;

      const validationResult = rules.every((rule) => rule(input.value));

      results.push({ input, success: validationResult, errorMessage });
    });

    return results;
  }
}
