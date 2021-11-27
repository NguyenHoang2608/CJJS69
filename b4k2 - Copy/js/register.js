class Register {
  $formEl;
  $displayNameEl;
  $displayEmailEl;
  $passwordEL;
  $confirmEL;
  $submitEl;

  constructor() {
    this.$formEl = document.createElement("form");

    this.$displayEl = document.createElement("input");
    this.$displayEl.type = "Text";
    this.$displayEl.placeholder = "Enter your name ";

    this.$displayEmailEl = document.createElement("input");
    this.$displayEmailEl.type = "Text";
    this.$displayEmailEl.placeholder = "Enter your name ";

    this.$passwordEL = document.createElement("input");
    this.$passwordELl.type = "email";
    this.$passwordEL.placeholder = "Enter your email ";

    this.$confirmEL = document.createElement("input");
    this.$confirmEL.type = "Text";
    this.$confirmEL.placeholder = "Enter your name ";

    this.$submitEl = document.createElement("input");
    this.$submitEl.type = "Text";
    this.$submitEl.placeholder = "Enter your name ";
  }
}
