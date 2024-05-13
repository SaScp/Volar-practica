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

function event_index() {
    const list = ['product_1', 'product_2', 'product_3'];
    console.log(list);
    list.forEach(el => {
        const button = document.getElementById(el);
        console.log(button)
        button.addEventListener('mouseover', function () {
            const oldSel = document.getElementsByClassName('active')[0];
            oldSel.classList.remove('active');
            button.classList.add('active');
          
        });
    });
}
event_index();


