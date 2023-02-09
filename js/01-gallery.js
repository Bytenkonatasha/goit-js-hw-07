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
console.log(galleryItems); 
 
function onImgClick(e) { 
    if (e.target.nodeName !== 'IMG') { 
        return 
    }     
   
    e.preventDefault();

    const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    )
    instance.show(); 
};
