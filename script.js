const email = document.getElementById("email");
const error = document.querySelector(".error");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    error.classList.add("active");
    error.textContent = "This field cannot be empty";
    email.classList.add("active");
  } else if (!isEmail(emailValue)) {
    error.textContent = "Check your email please";
  } else {
    error.classList.remove("active");
    email.classList.remove("active");
    alert("Thanks! We'll be in touch! :)");
  }
});

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
