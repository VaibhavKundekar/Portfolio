// Basic contact form validation and message display

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const message = form.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you for contacting me, " + name + "! I'll get back to you soon.");
  form.reset();
});
