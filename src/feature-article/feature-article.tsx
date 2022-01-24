import React, { useState, useEffect, useCallback } from 'react';
import { ArticleArgs } from './models';
import { Article } from '../utils';
import { ArticleContainer } from './components/article-container/article-conatiner';
import { getArticles, getCategories } from './service/feature-article-service';
import { useRouter } from 'next/router';

export const FeatureArticle = ({ language }: { language?: string }) => {
  const [data, setData] = useState<Article[]>([]);
  const [count, setCount] = useState(0);
  const [pagination, setPagination] = useState({ limit: 20, page: 0 });
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const router = useRouter();

  const getArticle = useCallback(async () => {
    try {
      setLoading(true);
      const { limit, page } = pagination;
      const args: ArticleArgs = { language: language || 'en', limit, page };
      if (selectedCategory.length) {
        args['category'] = selectedCategory.join(',');
      }
      if (search) args['search'] = search;
      setLoading(true);
      const response = await getArticles(args);
      setData((data) => {
        return [...data, ...response.data];
      });
      setCount(response.count);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
    }
  }, [pagination]);

  const resetValues = useCallback(() => {
    setData([]);
    setPagination({ limit: 20, page: 1 });
  }, [selectedCategory, language]);

  const getCategory = useCallback(async () => {
    const response = await getCategories();
    setCategoryList(response);
  }, []);
  useEffect(() => {
    getCategory();
  }, [getCategory]);
  useEffect(() => {
    if (pagination.page > 0) getArticle();
  }, [pagination]);
  useEffect(() => {
    resetValues();
  }, [resetValues]);

  const updatePagination = () => {
    setPagination((preData) => ({ limit: preData.limit, page: preData.page + 1 }));
  };

  const updateSelectedCategory = (category: string) => {
    const categories: string[] = [...selectedCategory];
    const isCategorySelected = categories.findIndex((data) => data === category);
    if (isCategorySelected !== -1) categories.splice(isCategorySelected, 1);
    else categories.push(category);
    setSelectedCategory(categories);
  };

  const updateSearch = (value: string) => {
    setSearch(value);
  };

  const navigate = (path: string) => {
    router.push(path, path);
  };
  const props = {
    articleData: data,
    totalCount: count,
    categoryList,
    loading,
    updatePagination,
    selectedCategory,
    updateSelectedCategory,
    search,
    updateSearch,
    error,
    navigate,
    getSearchResult: resetValues,
  };

  return <ArticleContainer {...props} />;
};
