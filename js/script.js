$(document).ready(function(){
    $('.slider_wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        zIndex: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          }
        ]
      });
    $('.desserts-slider_wrapper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        zIndex: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
          }
        ]
      });
})

function burgerMenu() {
  const menu = document.querySelector('#menu')
  const burger = document.querySelector('.burger')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  })
}

burgerMenu();

const header = document.querySelector('#header')
const breakPoint = document.querySelector('#break')

document.addEventListener('scroll', animateNavnarOnScroll)

function animateNavnarOnScroll() {
  let totalHeight = header.clientHeight + breakPoint.clientHeight
  if (window.scrollY >= totalHeight) {
    header.classList.add("sticky");
    header.classList.add("top-0");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("top-0");
  }
}