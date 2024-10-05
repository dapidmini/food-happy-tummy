var swiper = new Swiper(".menu-list-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: false,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// var swiper = new Swiper(".menu-list-container", {
//   effect: "coverflow",
//   loop: true,
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

var swiperMenuModal = new Swiper(".swiper-menu-modal", {
  effect: "flip",
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.addEventListener('DOMContentLoaded', function(e) {
  // ketika klik salah satu tombol utk lihat gallery menu masing2 item
  const btnMenuGallery = document.querySelectorAll('.btn-view-gallery');
  btnMenuGallery.forEach(elem => {
    elem.addEventListener('click', function(ee) {
      const wrapper = elem.closest('[data-menu-name]');
      const menuName = wrapper.getAttribute('data-menu-name');
      const menuClass = wrapper.getAttribute('data-menu-class');
      const modalElem = document.querySelector('.modal#modalMenu');
      const modalTitle = modalElem.querySelector('.modal-title');
      modalTitle.innerHTML = menuName;
      console.log('debug', menuName, menuClass, wrapper);

      // reset swiper di dalam popup modal
      swiperMenuModal.removeAllSlides();
      // dapatkan data slide yg perlu ditampilkan di popup modal
      // sesuai dgn menu yg dipilih
      const slideData = getMenuItemList(menuClass);
      slideData.forEach(item => {
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        slide.innerHTML = `<img src="${item.url}">`;
        swiperMenuModal.appendSlide(slide);
      });

      // const modalSwiperSlides = wrapper.querySelectorAll('.modal-slides .swiper-slide');
      // console.log('modal swiper slides', modalSwiperSlides);
      // // return;
      // modalSwiperSlides.forEach(slide => {
      //   slide.classList.add('d-none');
      // });
      // // let useSlides = [];
      // const galleryClass = '.items-gallery-' + menuClass;
      // // console.log('menu', menuName+';'+menuClass+';'+galleryClass);
      // // const slides = document.querySelectorAll(galleryClass);
      // console.log('galleryclass', galleryClass);
      // // return false;
      // const modalSliderWrapper = document.querySelector('.swiper-menu-modal .swiper-wrapper');
      // modalSliderWrapper.innerHTML = '';
      // modalSwiperSlides.forEach(slide => {
      //   if (slide.classList.contains(galleryClass)) {
      //     slide.classList.remove('d-none');
      //     modalSliderWrapper.append(slide);
      //   }
      //   // // console.log('slide', index, slide.classList.contains(galleryClass));
      //   // if (slide.classList.contains(galleryClass)) {
      //   //   useSlides.push(slide);
      //   //   slide.classList.remove('d-none');
      //   //   // swiperMenuModal.appendSlide(slide);
      //   // } else {
      //   //   slide.classList.add('d-none');
      //   // //   swiperMenuModal.removeSlide(index);
      //   // }
      // });
      // console.log('debug x', modalSliderWrapper);
      

      // swiperMenuModal.removeAllSlides();
      // swiperMenuModal.appendSlide(useSlides);



      // inisialisasi dan aplikasikan popup modal gallery scr manual
      // utk menghindari bug swiperjs ketika digabungkan dgn popup modal
      const menuModal = new bootstrap.Modal('#modalMenu');
      menuModal.toggle();

      // console.log('remove indexes', removeIndex);

      // swiperMenuModal.removeSlide(removeIndex);
      // const swiperWrappers = document.querySelectorAll('.modal .swiper-wrapper');
      // swiperWrappers.forEach(wrapper => {
      //   if (wrapper.id == galleryId) {
      //     wrapper.classList.remove('d-none');
      //   } else {
      //     wrapper.classList.add('d-none');
      //   }
      //   // wrapper.classList.add('d-none');
      // });
    });
  });
  // end btnMenuGallery.forEach

  function getMenuItemList(menuClass) {
    let slideData = [];
    if (menuClass == 'menu01') {
      slideData.push({ url: 'img/menu/bluder/000.png'});
      slideData.push({ url: 'img/menu/bluder/001.jpg'});
      slideData.push({ url: 'img/menu/bluder/002.jpg'});
      slideData.push({ url: 'img/menu/bluder/003.jpg'});
      slideData.push({ url: 'img/menu/bluder/004.jpg'});
      slideData.push({ url: 'img/menu/bluder/005.jpg'});
      slideData.push({ url: 'img/menu/bluder/006.jpg'});
      slideData.push({ url: 'img/menu/bluder/007.jpg'});
    } else if (menuClass == 'menu02') {
      slideData.push({ url: 'img/menu/cheese_cake/001.jpg'});
      slideData.push({ url: 'img/menu/cheese_cake/002.jpg'});
      slideData.push({ url: 'img/menu/cheese_cake/003.jpg'});
    } else if (menuClass == 'menu03') {
      slideData.push({ url: 'img/menu/chiffon_cake/001.jpg'});
      slideData.push({ url: 'img/menu/chiffon_cake/002.jpg'});
      slideData.push({ url: 'img/menu/chiffon_cake/003.jpg'});
      slideData.push({ url: 'img/menu/chiffon_cake/004.jpg'});
      slideData.push({ url: 'img/menu/chiffon_cake/005.jpg'});
      slideData.push({ url: 'img/menu/chiffon_cake/006.jpg'});
      slideData.push({ url: 'img/menu/chiffon_cake/007.jpg'});
      slideData.push({ url: 'img/menu/chiffon_cake/008.jpg'});
    } else if (menuClass == 'menu04') {
      slideData.push({ url: 'img/menu/fruit_pie/001.jpg'});
      slideData.push({ url: 'img/menu/fruit_pie/002.jpg'});
      slideData.push({ url: 'img/menu/fruit_pie/003.jpg'});
      slideData.push({ url: 'img/menu/fruit_pie/004.jpg'});
      slideData.push({ url: 'img/menu/fruit_pie/005.jpg'});
      slideData.push({ url: 'img/menu/fruit_pie/006.jpg'});
      slideData.push({ url: 'img/menu/fruit_pie/007.jpg'});
      slideData.push({ url: 'img/menu/fruit_pie/008.jpg'});
    } else if (menuClass == 'menu05') {
      slideData.push({ url: 'img/menu/pudding/001.jpg'});
      slideData.push({ url: 'img/menu/pudding/002.jpg'});
      slideData.push({ url: 'img/menu/pudding/003.jpg'});
      slideData.push({ url: 'img/menu/pudding/004.jpg'});
      slideData.push({ url: 'img/menu/pudding/005.jpg'});
      slideData.push({ url: 'img/menu/pudding/006.jpg'});
      slideData.push({ url: 'img/menu/pudding/007.jpg'});
      slideData.push({ url: 'img/menu/pudding/008.jpg'});
    } else if (menuClass == 'menu06') {
      slideData.push({ url: 'img/menu/cookies/001.jpg'});
      slideData.push({ url: 'img/menu/cookies/002.jpg'});
      slideData.push({ url: 'img/menu/cookies/003.jpg'});
      slideData.push({ url: 'img/menu/cookies/004.jpg'});
    }
    return slideData;
  }
  // end function getMenuItemList
});