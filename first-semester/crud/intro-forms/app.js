"use strict";

window.addEventListener("load", initApp);

function initApp() {
  console.log("initApp");
  document.querySelector("#signup").addEventListener("submit", signUp);
}

function signUp(event) {
  event.preventDefault();
  console.log("Signup clicked");
  const elements = document.forms.signup;
  const signup = {
    fullname: elements.fullname.value,
    mail: elements.email.value,
    username: elements.username.value,
    password: elements.password.value,
    payment: elements.payment.value,
    paymentFreq: elements.paymentfreq.value,
    spam: elements.spam.checked,
    terms: elements.terms.checked,
  };
  console.log(signup);
}
