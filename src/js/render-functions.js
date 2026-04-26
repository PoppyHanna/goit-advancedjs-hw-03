// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"
// import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm.js";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.js-container');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.js-container .image-card a', {
      captionsData: 'alt',
      captionDelay: 250,
  });

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function createGallery(images) {
    const fragment = document.createDocumentFragment();

    images.forEach(image => {
        const card = document.createElement('li');
        card.classList.add('image-card');

        const link = document.createElement('a');
        link.href = image.largeImageURL;

        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;

        link.appendChild(imgElement);

        card.appendChild(link);

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('image-info');

        const likesInfo = document.createElement('span');
        likesInfo.textContent = `Likes: ${image.likes}`;

        const viewsInfo = document.createElement('span');
        viewsInfo.textContent = `Views: ${image.views}`;

        const commentsInfo = document.createElement('span');
        commentsInfo.textContent = `Comments: ${image.comments}`;

        const downloadsInfo = document.createElement('span');
        downloadsInfo.textContent = `Downloads: ${image.downloads}`;

        infoContainer.appendChild(likesInfo);
        infoContainer.appendChild(viewsInfo);
        infoContainer.appendChild(commentsInfo);
        infoContainer.appendChild(downloadsInfo);

        card.appendChild(infoContainer);

        fragment.appendChild(card);
    });

    gallery.appendChild(fragment);

    lightbox.refresh();
}

