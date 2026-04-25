import { searchFoto } from './js/pixabay-api.js';
import { renderFoto } from './js/render-functions.js';

// Імпортуємо необхідний плагін
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const form = document.getElementById('search-form');
const gallery = document.querySelector('.js-container');
const loader = document.querySelector('.loader');

// Додаємо обробник події click для кнопки
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const query = document.getElementById('search-input').value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning',
            message: 'Please enter a search images',
        });
        return;
    }

    // Показати завантажувач після кліку на кнопку
    loader.style.display = 'block';
    gallery.innerHTML = '';

    // Зробити HTTP-запит
    searchFoto(query)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                renderFoto(data);
            }
        })
        .catch(error => {
            if (gallery.innerHTML === '') {
                console.error('Error fetching data:', error);
                iziToast.error({
                    title: 'Error',
                    message: 'An error occurred while searching for images',
                });
            }
        })
        .finally(() => {
            // Приховати завантажувач після завершення запиту
            loader.style.display = 'none';
        });
});
