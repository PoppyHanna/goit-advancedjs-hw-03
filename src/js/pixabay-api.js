export function searchFoto(userValue) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: "42342437-5c4c341e915bce4954251eee0",
        q: userValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = BASE_URL + END_POINT + "?" + PARAMS;

  return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching data: ' + response.status);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
