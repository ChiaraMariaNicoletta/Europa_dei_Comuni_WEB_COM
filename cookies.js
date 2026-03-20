const cookieModal = document.getElementById("cookie-modal");
const acceptCookies = document.getElementById("accept-cookies");
const rejectCookies = document.getElementById("reject-cookies");

const cookieChoice = localStorage.getItem("cookieChoice");

if (!cookieChoice) {
    cookieModal.classList.add("show");
    cookieModal.setAttribute("aria-hidden", "false");
}

acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "accepted");
    cookieModal.classList.remove("show");
    cookieModal.setAttribute("aria-hidden", "true");
});

rejectCookies.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "rejected");
    cookieModal.classList.remove("show");
    cookieModal.setAttribute("aria-hidden", "true");
});