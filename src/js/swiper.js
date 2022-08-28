import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'
  
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    allowTouchMove: true,
    loop: true,
  navigation: {
      nextEl: ".swiper-right",
      prevEl: ".swiper-left"
  },
  autoplay: {
    delay: 4000,
  },
})

export {
  swiper
}