import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FeatureArticle } from '../src/feature-article';

const Home = () => {
  const { locale } = useRouter();
  return <FeatureArticle language={locale} />;
};

export default Home;
