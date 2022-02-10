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
  const base_url = process.env.BASE_URL;
  try {
    const response = await axios.get(`${base_url}/api/article-detail`, {
      params: { articleId, language: locale || 'en' },
    });
    data = response.data.detail;
    relatedArticles = response.data.relatedArticles;
  } catch (error) {
    error = true;
  }
  return {
    props: { data, relatedArticles, error }, // will be passed to the page component as props
  };
}

export default ArticleDetails;
