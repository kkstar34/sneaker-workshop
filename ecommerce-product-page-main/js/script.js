const icon = document.querySelector('.menu--icon');
const iconCancel = document.querySelector('.nav-icon-cancel');
iconCancel.addEventListener('click', shutMenu);
icon.addEventListener('click',openMenu);

let thumbnail = document.querySelectorAll('.image--product--container--thumbnail');

thumbnail.forEach((item) => {item.addEventListener('click', changeThumbnail);});

function openMenu(){
    document.querySelector('.nav-mobile-hidden').classList.add('open');
}
function shutMenu(){
    document.querySelector('.nav-mobile-hidden').classList.remove('open');
}

function changeThumbnail() {
    const imagePathsTab = ["image-product-1.jpg","image-product-2.jpg","image-product-3.jpg","image-product-4.jpg"]
    const id = this.children[0].id;
    let imagePath = imagePathsTab.filter(path => { return id == path.substring(0, 15)});
    const image =  document.querySelector('.image--product--container img');
    image.src = "images/" + imagePath[0];
    thumbnail.forEach(thumbnail => thumbnail.children[0].classList.remove('overlay'));
    this.children[0].classList.add('overlay');
}