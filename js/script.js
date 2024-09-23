var swiper = new Swiper(".menu-list-container", {
  effect: "coverflow",
  initialSlide: 0,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener('click', function(e) {
  e.preventDefault();
  // reset semua elemen .swiper-slide
  // hilangkan atribut data-bs-toggle dari semua button modalnya
  // spy popup modal hanya terjadi kalo klik di button swiper yg sedang aktif
  const allSwiperButtons = document.querySelectorAll('.menu .btn-view-gallery');
  allSwiperButtons.forEach(elem => {
    elem.removeAttribute('data-bs-toggle');
  });

  const clickedEl = e.target;
  if (clickedEl.closest('.swiper-slide-active')) {
    const modalSelector = clickedEl.getAttribute('data-bs-target');
    const modalElem = document.querySelector(modalSelector);
    modalElem.setAttribute('data-bs-toggle', 'modal');
  }
  // const clickedEl = e.target;
  // const parentEl = clickedEl.parentElement;

  // console.log('debug', clickedEl, parentEl, clickedEl.closest('.swiper-slide-active').length);
});

// document.addEventListener('DOMContentLoaded', function(e) {
//   cekActiveSliderBtn(clickedEl);
// })

const swiperSlides = document.querySelectorAll('.swiper-slide');
swiperSlides.forEach(elem => {
  elem.addEventListener('click', function(e) {
    cekActiveSliderBtn(this);
  });
});

function cekActiveSliderBtn(elem) {
  if (elem.classList.contains('swiper-slide-active')) {
    const btnGallery = elem.querySelector('.btn-view-gallery');
    btnGallery.addEventListener('click', function(ee) {
      alert('clicked on active button');
    });
  }
}