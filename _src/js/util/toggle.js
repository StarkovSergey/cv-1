const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
const navLinks = document.querySelectorAll('.navigation__link');

navToggle.addEventListener('click', () => {
  if (nav.classList.contains('navigation--closed')) {
    nav.classList.remove('navigation--closed');
    nav.classList.add('navigation--opened');
  } else {
    nav.classList.remove('navigation--opened');
    nav.classList.add('navigation--closed');
  }
});

for (const link of navLinks) {
  link.addEventListener('click', () => {
    if (nav.classList.contains('navigation--opened')) {
      nav.classList.remove('navigation--opened');
      nav.classList.add('navigation--closed');
    }
  });
}
