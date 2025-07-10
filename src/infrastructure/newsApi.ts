import axios from 'axios';

const API_KEY = '27d1ad17f2f94beb8753cfdc8c2c5c25';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchArticles = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: 'us',
        apiKey: API_KEY,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Gagal fetch data:', error);
    throw error;
  }
};
