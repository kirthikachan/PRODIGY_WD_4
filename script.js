let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');

//menu toggle
function toggleMenu() {
  navbar.classList.toggle('active');
  if (navbar.classList.contains('active')) {
    navbar.style.display = 'block';
    menuIcon.classList.remove('bx-menu');
    menuIcon.classList.add('bx-x');
  } else {
    navbar.style.display = 'none';
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu');
  }
}

// onclick menutoggle
menuIcon.onclick = toggleMenu;


navLinks.forEach(link => {
  link.addEventListener('click', () => {
  
    navLinks.forEach(item => {
      item.classList.remove('active');
    });
   
    link.classList.add('active');
    
    if (window.innerWidth <= 600) {
      toggleMenu();
    }
  });
});

// window resize for small screens
window.addEventListener('resize', () => {
  if (window.innerWidth > 600) {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu');
  }
});


