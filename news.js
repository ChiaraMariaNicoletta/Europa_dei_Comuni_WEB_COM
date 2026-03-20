const cards = Array.from(document.querySelectorAll('.news-card'));
const typeChips = Array.from(document.querySelectorAll('[data-filter-type]'));
const visibleCountEl = document.getElementById('visibleCount');

let activeType = 'all';

function setActive(chips, activeValue) {
  chips.forEach(btn => {
    btn.classList.toggle(
      'is-active',
      btn.getAttribute('data-filter-type') === activeValue
    );
  });
}

function applyFilters() {
  let visible = 0;

  cards.forEach(card => {
    const cType = card.dataset.type;
    const matchType = (activeType === 'all') || (cType === activeType);

    card.hidden = !matchType;

    if (matchType) visible++;
  });

  visibleCountEl.textContent = visible;
}

typeChips.forEach(btn => {
  btn.addEventListener('click', () => {
    activeType = btn.getAttribute('data-filter-type');
    setActive(typeChips, activeType);
    applyFilters();
  });
});

applyFilters();
