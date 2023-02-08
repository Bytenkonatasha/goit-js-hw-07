import { galleryItems } from './gallery-items.js';
// Change code below this line
const modalContainer = document.querySelector('.gallery');
const cardsMarkup = galleryItemsImg (galleryItems);

modalContainer.insertAdjacentHTML('beforeend', cardsMarkup);
modalContainer.addEventListener('click', onImgClick);

function galleryItemsImg (galleryItems){
    return galleryItems.map(({preview, original, description}) =>{
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    }).join('');
}


function onImgClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    e.preventDefault();
    const onCloseModal = (e) => {
        const ESC_KEY = "Escape";
        if (e.code === ESC_KEY) {
            instance.close();
        }
    };
const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
        onShow: (instance) => {
            window.addEventListener("keydown", onCloseModal);
        },
        onclose: (instance) => {
            window.removeEventListener("keydown", onCloseModal);
        },
    }
);
    instance.show();
}
    



