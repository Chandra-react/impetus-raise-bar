import useTranslation from 'next-translate/useTranslation';

import React from 'react';
import { ErrorComponent, Layout, NoDataComponent, PageHeader } from '../../../component';
import { Article } from '../../../utils';
import { ArticleCard } from '../article-card/article-card';
import styles from './article-detail.module.scss';

export interface ArticleDetailProps {
  article: Article | null;
  relatedArticles?: Article[];
  navigate: (path: string) => void;
  error: boolean;
  onBackClick: () => void;
}

export const ArticleDetail = ({ article, relatedArticles, navigate, error, onBackClick }: ArticleDetailProps) => {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <PageHeader onBackClick={onBackClick} title={t('article_details')} />
      {!error ? (
        article && Object.keys(article).length !== 0 ? (
          <div className={styles['container']}>
            <ArticleCard {...article} className='display-card' hideFooter={true} />
            <div className={styles['article-container']}>
              <h4>{t('related_news')}</h4>
              <section className={styles['card-container']}>
                {relatedArticles?.map((article) => {
                  return <ArticleCard key={article._id} {...article} className='display-border' navigate={navigate} />;
                })}
              </section>
            </div>
          </div>
        ) : (
          <NoDataComponent headline={t('no_data_message')} tagline={t('no_data_message_1')} />
        )
      ) : (
        <ErrorComponent headline={t('error_message')} />
      )}
    </Layout>
  );
};
