import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const imgMarkup = makeGalleryMarkup(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgMarkup);
function makeGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item" >
                <a class="gallery__item"
                    href="${original}">
                    <img class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
                </a >
            </div >
    `;
    })
        .join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: 'bottom', captionDelay: 250 });

