import Head from 'next/head';
import axios from 'axios';
import { Article } from '../../src/utils';
import { FeatureArticleDeatil } from '../../src/feature-article';
export interface ArticleDetailsProps {
  data: Article;
  error: boolean;
  relatedArticles: Article[];
}

const ArticleDetails = ({ data, error, relatedArticles }: ArticleDetailsProps) => {
  return <FeatureArticleDeatil data={data} relatedArticles={relatedArticles} error={error} />;
};

export async function getServerSideProps(context: any) {
  const { articleId } = context.query;
  const { locale } = context;
  let data = {};
  let relatedArticles = [];
  let error = false;
  try {
    const response = await axios.get('http://localhost:3000/api/article-detail', {
      params: { articleId, language: locale || 'en' },
    });
    data = response.data.detail;
    relatedArticles = response.data.relatedArticles;
  } catch (error) {
    error = true;
  }
  for (let i = 0; i <= 10000000; i++) {}
  return {
    props: { data, relatedArticles, error }, // will be passed to the page component as props
  };
}

export default ArticleDetails;
