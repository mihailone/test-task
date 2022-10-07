const hoverEffect = {
    elements: document.querySelectorAll('.hover__effect'),
    targetElement: document.querySelector('.hover__card'),
    videoBg: document.querySelector('.video-blackout'),
};
const menuMobile = {
    burger: document.querySelector('.menu__burger'),
    menu: document.querySelector('.mobile__menu'),
    close: document.querySelector('.close__menu'),
};

hoverEffect.elements.forEach((item, i) => {
    item.onmouseover = item.onmouseout = handler;
});

function handler(event) {
    if (event.type == 'mouseover') {
        hoverEffect.targetElement.classList.add('active');
        hoverEffect.videoBg.classList.add('blackout-on');
    }
    if (event.type == 'mouseout') {
        hoverEffect.targetElement.classList.remove('active');
        hoverEffect.videoBg.classList.remove('blackout-on');
    }
}

menuMobile.burger.addEventListener('click', () => {
    menuMobile.menu.classList.add('mobile__menu-on');
});
menuMobile.close.addEventListener('click', () => {
    menuMobile.menu.classList.remove('mobile__menu-on');
});

$(function () {
    $('.sliders__container').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '.video__sliders',
    });
    $('.video__sliders').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.sliders__container',
    });
    $('.arrrow-previous').click(function (e) {
        //e.preventDefault(); 
        $('.sliders__container').slick('slickPrev');
    });

    $('.arrrow-next').click(function (e) {
        //e.preventDefault(); 
        $('.sliders__container').slick('slickNext');
    });
});