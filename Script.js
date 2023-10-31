/*let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('#navbar');

menu.oneclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').oneclick = () =>{
 document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').oneclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
 }


window.onscroll = () =>{

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
  document.querySelector('.header').classList.re('active');
  }
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
}

window.onload = () =>{

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
  document.querySelector('.header').classList.re('active');
  }
 
}*/

document.addEventListener('DOMContentLoaded', function() {
  let menu = document.querySelector('#menu-btn');
  let navbar = document.querySelector('.navbar');

  menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  });

  document.querySelector('#login-btn').addEventListener('click', () => {
    document.querySelector('.login-form-container').classList.toggle('active');
  });

  document.querySelector('#close-login-form').addEventListener('click', () => {
    document.querySelector('.login-form-container').classList.remove('active');
  });

  window.onscroll = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  };

  window.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
});



