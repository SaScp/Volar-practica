const mySwiper = new Swiper('.container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    
    coverflowEffect: {
        rotate: 0,
        stretch: 22,
        depth: 30,
        modifier: 42,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});