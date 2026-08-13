const form = document.getElementById("trainingForm");
const result = document.getElementById("result");
const closeResult = document.getElementById("closeResult");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  /*
    IMPORTANT:
    We intentionally do NOT read, transmit, log, or store
    the username or password.

    The submission exists only to demonstrate what a phishing
    interaction might look like.
  */

  form.reset();
  result.classList.remove("hidden");
});

closeResult.addEventListener("click", function () {
  result.classList.add("hidden");
});

Put the three files in the same folder:

phishing-simulator/
├── index.html
├── style.css
└── script.js