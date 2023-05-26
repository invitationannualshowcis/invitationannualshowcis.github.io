let nameInput = document.querySelector("#name");
let email = document.querySelector("#email");
let message = document.querySelector("#message");
let subject = document.querySelector("#subject");
let success = document.querySelector("#success");
let errorNodes = document.querySelectorAll(".error");

function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Please Enter Your Name";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid Email Address";
    email.classList.add("error-border");
    errorFlag = true;
  }

  function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
  }

  if (message.value.length < 10) {
    errorNodes[3].innerText =
      "Message Just contain more than or equal to '20' chars";
    message.classList.add("error-border");
    errorFlag = true;
  }

  if (!errorFlag) {
    success.innerText = "Success ";
  }
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
  subject.classList.remove("error-border");
}
