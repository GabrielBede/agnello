feather.replace();

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.setAttribute('data-feather', 'menu');
    } else {
        menuMobile.classList.add('open');
        icon.setAttribute('data-feather', 'x');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
});
