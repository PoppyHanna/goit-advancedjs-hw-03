import axios from "axios";

export function getImagesByQuery(userValue) {
    const BASE_URL = 'https://pixabay.com/api/';

  return axios.get(BASE_URL, {
    params: {
      key: "42342437-5c4c341e915bce4954251eee0",
      q: userValue,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    }
  }).then(response => response.data);
}
