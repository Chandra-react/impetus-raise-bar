import React from 'react';
import { Article } from '../utils';
import { ArticleDetail } from './components/article-detail/article-detail';
import { useRouter } from 'next/router';

export interface FeatureArticleDeatilProps {
  data: Article;
  relatedArticles: Article[];
  error: boolean;
}

export const FeatureArticleDeatil = ({ data, relatedArticles, error }: FeatureArticleDeatilProps) => {
  const router = useRouter();
  const navigate = (path: string) => {
    router.push(path, path);
  };
  const onBackClick = () => {
    router.back();
  };
  return (
    <ArticleDetail
      article={data}
      relatedArticles={relatedArticles}
      navigate={navigate}
      error={error}
      onBackClick={onBackClick}
    />
  );
};
