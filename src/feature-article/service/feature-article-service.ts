import axios from 'axios';
import { ArticleArgs } from '../models';

export const getArticles = async (args: ArticleArgs) => {
  const BASE_URL = '/api/article';
  const response = await axios.get(BASE_URL, { params: args });
  return response.data;
};

export const getCategories = async () => {
  const BASE_URL = '/api/category';
  const response = await axios.get(BASE_URL);
  return response.data;
};
