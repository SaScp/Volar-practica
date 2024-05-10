function goToLink() {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
function goToLinkNotFound() {
    window.location.href ="/html/404.html";
}
function setSliderImg(obj) {
    const image = document.getElementById('slider_watch_main_img');
        image.setAttribute('src', "/img/big_logo" + obj.id + ".svg");
      
}