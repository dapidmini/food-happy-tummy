var swiper = new Swiper(".menu-list-container", {
  effect: "coverflow",
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


// document.addEventListener('DOMContentLoaded', function(e) {
//   // ketika klik salah satu tombol utk lihat gallery menu masing2 item
//   const btnMenuGallery = document.querySelectorAll('.btn-view-gallery');
//   btnMenuGallery.forEach(elem => {
//     elem.addEventListener('click', function(ee) {
//       const wrapper = elem.closest('[data-menu-name]');
//       const menuName = wrapper.getAttribute('data-menu-name');
//       const menuClass = wrapper.getAttribute('data-menu-class');
//       const modalElem = document.querySelector('.modal#modalMenu');
//       const modalTitle = modalElem.querySelector('.modal-title');
//       modalTitle.innerHTML = menuName;
//       modalTitle.classList.add('text-capitalize');

//       var swiperMenuModal = new Swiper(".swiper-menu-modal", {
//         effect: "flip",
//         grabCursor: true,
//         loop: true,
//         pagination: {
//           el: ".swiper-pagination",
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });

//       let useSlides = [];
//       const galleryClass = 'items-gallery-' + menuClass;
//       // console.log('menu', menuName+';'+menuClass+';'+galleryClass);
//       const slides = document.querySelectorAll('.menu .modal .swiper-slide');
//       slides.forEach((slide, index) => {
//         // console.log('slide', index, slide.classList.contains(galleryClass));
//         if (slide.classList.contains(galleryClass)) {
//           useSlides.push(slide);
//           // swiperMenuModal.appendSlide(slide);
//         // } else {
//         //   swiperMenuModal.removeSlide(index);
//         }
//       });

//       swiperMenuModal.removeAllSlides();
//       swiperMenuModal.appendSlide(useSlides);

//       // console.log('remove indexes', removeIndex);

//       // swiperMenuModal.removeSlide(removeIndex);
//       // const swiperWrappers = document.querySelectorAll('.modal .swiper-wrapper');
//       // swiperWrappers.forEach(wrapper => {
//       //   if (wrapper.id == galleryId) {
//       //     wrapper.classList.remove('d-none');
//       //   } else {
//       //     wrapper.classList.add('d-none');
//       //   }
//       //   // wrapper.classList.add('d-none');
//       // });
//     });
//   });
// });