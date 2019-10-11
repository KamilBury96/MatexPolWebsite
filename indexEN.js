const burgerMenu = document.querySelector(".burgerMenu");
const burgerIcon = document.querySelector(".burgerIcon");
const burgerIconShow = document.querySelector(".fa-bars");
const burgerIconHide = document.querySelector(".fa-times");
const menuPositions = document.querySelectorAll(".burgerMenuUl li");
burgerIcon.addEventListener("click", function () {
    burgerMenu.classList.toggle("active");
    burgerIconShow.classList.toggle("show");
    burgerIconHide.classList.toggle("show");
});
menuPositions.forEach((position, i) => {
    menuPositions[i].addEventListener("click", function () {
        burgerMenu.classList.toggle("active");
        burgerIconShow.classList.toggle("show");
        burgerIconHide.classList.toggle("show");
    })
});

//slide
const titleSlider = document.querySelector('.titleSlider');
const descriptionSlider = document.querySelector('.descriptionSlider');
const backgroundImageSlider = document.querySelector('.headerimages');
const dots = [...document.querySelectorAll('.dots span')]
const time = 6000;
let active = 0;
const slideList = [{
        title: 'The highest quality of service',
        description: 'We are able to organize not only the transport of goods, but also all necessary activities related to  transport, such as customs clearance, ferry crossings and storage.',
        backgroundImage: 'url(./images/image6.jpg)',
    },
    {
        title: 'We can deliver goods almost everywhere',
        description: 'Our services cover all directions, and our trucks can be found both in the country and throughout Eastern and Western Europe.',
        backgroundImage: 'url(./images/image7.jpg)',
    },
    {
        title: 'Modern truck fleet',
        description: 'The fleet consists of the most modern and reliable trucks with EURO 6 certificates.',
        backgroundImage: 'url(./images/ladne.jpg)',
    }
];


const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    titleSlider.textContent = slideList[active].title;
    descriptionSlider.textContent = slideList[active].description;
    backgroundImageSlider.style.backgroundImage = slideList[active].backgroundImage;


}
changeSlide();
setInterval(changeSlide, time);
AOS.init({
    duration: 1000,
});
// staticMenuActive
const $mainNav = $('.mainNav');
const $afterMenuFixed = $('.afterMenuFixed')

$(document).on('scroll', function () {
    const scrollValue = $(this).scrollTop();
    if (scrollValue > 170) {
        $mainNav.addClass('active');
        $afterMenuFixed.addClass('active');

    } else if (scrollValue < 170) {
        $mainNav.removeClass('active')
        $afterMenuFixed.removeClass('active');

    }
})
// scroll
$('.mainPageMenu').on('click', function () {
    $('body, html').animate({
            scrollTop: 0
        },
        1500)
})
$('.aboutUsMenu').on('click', function () {
    $('body, html').animate({
            scrollTop: $('.aboutUs').offset().top - 100
        },
        1500)
})
$('.truckFleetMenu').on('click', function () {
    $('body, html').animate({
            scrollTop: $('.truckFleet').offset().top - 100
        },
        1500)
})
$('.forClientMenu').on('click', function () {
    $('body, html').animate({
            scrollTop: $('.ForClient').offset().top - 50
        },
        1500)
})
$('.forCarrierMenu').on('click', function () {
    $('body, html').animate({
            scrollTop: $('.forCarrier').offset().top - 50
        },
        1500)
})