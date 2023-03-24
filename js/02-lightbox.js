import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');

galleryEl.innerHTML = galleryItems.reduce((acc, { preview, original, description }) =>
  acc + `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
    </li>
  `, '');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});


console.log(galleryItems);


