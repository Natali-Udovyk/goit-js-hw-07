import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// 1) взяли посилання на галерею
// 2) створили функцію "makeGalleryMarkup" в якій є один аргумент "galleryItems" далі за допомогою map(Поелементо перебираємо оригінальний масив) далі робимо return "html" потім join(щоб все перетворити в один рядок)
// 3) створили константу в якій результат створення розмітки 4)додаємо створенні ел
const gallery = document.querySelector('.gallery');
const imgMarkup = makeGalleryMarkup(galleryItems);
console.log(imgMarkup)
gallery.insertAdjacentHTML('beforeend', imgMarkup)
function makeGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <div class="gallery__item" >
                    <a class="gallery__link" href="${original}" >
                        <img
                         class="gallery__image"
                         src="${preview}"
                         data-source="${original}"
                         alt="${description}"
                        />
                    </a >
            </div >
            `;


    })
        .join('');

};

gallery.addEventListener('click', (event) => {
    console.log(event.target.dataset.source)
    event.preventDefault()
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)
    instance.show()

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close()
            console.log(instance.close())
        }
    });

});

