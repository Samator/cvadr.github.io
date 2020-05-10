const menuBtn = document.querySelector('#menu-btn');
const menuBlock = document.querySelector('.menu-block');
menuBtn.addEventListener('click',function(event){
    menuBtn.classList.toggle('menu-active');
    menuBlock.classList.toggle('menu-block-active');
});
