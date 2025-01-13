// Код для відображення меню при натисканні на іконку бургера
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active'); // Анімація бургер-меню
    menu.classList.toggle('active'); // Відображення меню
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : ''; // Заборона скролу
});

const menuLinks = document.querySelectorAll('.menu li a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        menu.classList.remove('active');
        document.body.style.overflow = ''; // Відновлення скролу
    });
});

// Реалізація плавної прокрутки при натисканні на пункт меню
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Слайдер з відгуками
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSliderPosition();
});

// Свайп слайдеру на мобыльних пристроях за допомгою палцья
let startX = 0;
slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX > endX + 50) {
    nextBtn.click();
  } else if (startX < endX - 50) {
    prevBtn.click();
  }
});

