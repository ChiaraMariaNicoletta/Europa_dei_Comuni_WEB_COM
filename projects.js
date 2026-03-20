const projectCards = document.querySelectorAll(".project-card");
const projectCountEl = document.getElementById("projectCount");

if (projectCards.length && projectCountEl) {
  const target = projectCards.length;
  let current = 0;

  const duration = 1200;
  const stepTime = Math.max(Math.floor(duration / target), 60);

  const counter = setInterval(() => {
    current++;
    projectCountEl.textContent = current;

    if (current >= target) {
      clearInterval(counter);
      projectCountEl.textContent = target;
    }
  }, stepTime);
}