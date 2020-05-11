const menuBtn = document.querySelector('#menu-btn');
const menuBlock = document.querySelector('.menu-block');
menuBtn.addEventListener('click',function(event){
    menuBtn.classList.toggle('menu-active');
    menuBlock.classList.toggle('menu-block-active');
});


const scrollTop = document.querySelector('.scroll-btn');
window.addEventListener('scroll', trackScroll);
scrollTop.addEventListener('click', toTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      scrollTop.classList.add('scroll-btn-show');
    }
    if (scrolled < coords) {
      scrollTop.classList.remove('scroll-btn-show');
    }
  }
function toTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }
