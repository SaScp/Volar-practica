const mySwiper = new Swiper('.container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: false,
    slidesPerView: 5,
    
    coverflowEffect: {
        rotate: 0,
        stretch: 3,
        depth: 100,
        modifier: 1,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});
var swiper = new Swiper(".page2_Swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  var swiper = new Swiper(".page5_Swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });



