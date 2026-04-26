import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  // const query = e.target.elements['search-text'].value.trim();
    const query = e.target.querySelector('input').value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search images',
    });
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        createGallery(data.hits);
      }
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message: 'An error occurred while searching for images!',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
