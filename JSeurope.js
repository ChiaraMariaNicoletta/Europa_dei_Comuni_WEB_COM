const images = document.querySelectorAll(".hero img");
let current = 0;

if (images.length > 1) {
  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
  }, 4000);
}

const form = document.getElementById("contact-form");
const popup = document.getElementById("form-popup");
const closePopup = document.getElementById("close-popup");

if (form && popup) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    popup.classList.add("show");
    form.reset();
  });
}

if (closePopup && popup) {
  closePopup.addEventListener("click", function () {
    popup.classList.remove("show");
  });
}