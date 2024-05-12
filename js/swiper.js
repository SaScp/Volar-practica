const mySwiper = new Swiper('.container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: false,
    slidesPerView: 5,
    
    coverflowEffect: {
        rotate: 0,
        stretch: 32,
        depth: 30,
        modifier: 42,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});




