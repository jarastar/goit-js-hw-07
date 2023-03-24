import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(galleryItems) {
  let galleryMarkup = '';
  for (let item of galleryItems) {
    const { preview, original, description } = item;
    galleryMarkup += `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  }
  return galleryMarkup;
}

galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const originalSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`
      <img src="${originalSrc}" alt="${event.target.alt}">
    `);
    instance.show();

    const escapeHandler = (event) => {
      if (event.code === 'Escape') {
        instance.close();
        document.removeEventListener('keydown', escapeHandler);
      }
    };
    document.addEventListener('keydown', escapeHandler);
  }
});

console.log(galleryItems);