import React from 'react';
import { useRouter } from 'next/router';
import { Header } from './components/header/header';

export const FeatureHeader = () => {
  const router = useRouter();
  const updatelanguage = (language: string) => {
    router.push(router.asPath, '', { locale: language });
  };
  return <Header updatelanguage={updatelanguage} language={router.locale} />;
};
