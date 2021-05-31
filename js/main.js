

const navbarDisplay = document.querySelector('.navbar-none');
const iconHamburger =document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');

iconHamburger.addEventListener('click' , ()=>{
   navbarDisplay.classList.remove('navbar-none');
   iconHamburger.classList.add('navbar-none');
   iconClose.classList.remove('icon-close');
});

iconClose.addEventListener('click', ()=> {
  iconClose.classList.add('icon-close');
  navbarDisplay.classList.add('navbar-none');
  iconHamburger.classList.remove('navbar-none');
});


$(window).resize(function(){
    if($(window).width() > 800){
      iconClose.classList.add('icon-close');
      navbarDisplay.classList.add('navbar-none'); 
    }
    else{
      iconHamburger.classList.remove('navbar-none')
    }
});


