
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


export function renderFoto(data) {
    const gallery = document.querySelector('.js-container');
    const fragment = document.createDocumentFragment();

    // Очищення вмісту галереї перед додаванням нових карточок
    gallery.innerHTML = '';

    data.hits.forEach(image => {
        // Створюємо контейнер для карточки зображення
        const card = document.createElement('div');
        card.classList.add('image-card');

        // Створюємо посилання
        const link = document.createElement('a');
        link.href = image.largeImageURL;

        // Створюємо зображення
        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;

        // Додаємо зображення до посилання
        link.appendChild(imgElement);

        // Додаємо посилання з зображенням до карточки
        card.appendChild(link);

        // Створюємо елементи для відображення інформації про зображення
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

        // Додаємо інформацію про зображення до контейнера для інформації
        infoContainer.appendChild(likesInfo);
        infoContainer.appendChild(viewsInfo);
        infoContainer.appendChild(commentsInfo);
        infoContainer.appendChild(downloadsInfo);

        // Додаємо контейнер для інформації до карточки
        card.appendChild(infoContainer);

        // Додаємо карточку до фрагменту
        fragment.appendChild(card);
    });

    // Додаємо фрагмент з карточками до галереї
    gallery.appendChild(fragment);

    // Ініціалізуємо SimpleLightbox для всіх зображень у галереї
    const lightbox = new SimpleLightbox('.js-container .image-card a', {
         captionsData: 'alt',
         captionDelay: 250,
    });
    lightbox.refresh();
}
