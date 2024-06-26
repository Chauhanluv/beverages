document.querySelector('.icon').addEventListener('mouseover', function() {
    document.querySelector('.ul ul').style.opacity = '1';
});

document.querySelector('.menu-container').addEventListener('mouseleave', function() {
    document.querySelector('.nav-menu').style.opacity = '0';
});