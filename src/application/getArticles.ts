import { fetchArticles } from '../infrastructure/newsApi';
import { Article } from '../domain/article';

export const getArticles = async (): Promise<Article[]> => {
  return await fetchArticles();
};
    