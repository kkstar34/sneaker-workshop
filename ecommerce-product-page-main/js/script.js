const icon = document.querySelector('.menu--icon');
const iconCancel = document.querySelector('.nav-icon-cancel');
iconCancel.addEventListener('click', shutMenu);
icon.addEventListener('click',openMenu);

function openMenu(){
    document.querySelector('.nav-mobile-hidden').classList.add('open');
}
function shutMenu(){
    document.querySelector('.nav-mobile-hidden').classList.remove('open');
}