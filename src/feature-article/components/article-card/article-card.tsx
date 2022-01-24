import React from 'react';
import Image from 'next/image';
import styles from './article-card.module.scss';
import useTranslation from 'next-translate/useTranslation';
import { convertDate, ARTICLE_DETAILS } from '../../../utils';

export interface ArticleCardProps {
  author: string;
  title: string;
  description: string;
  url: string;
  published_at: string;
  category: string;
  source: string;
  _id: string;
  navigate?: (path: string) => void;
  className?: string;
  hideFooter?: boolean;
}

export const ArticleCard = ({
  url,
  author,
  title,
  description,
  category,
  source,
  published_at,
  _id,
  navigate,
  className = 'card-container',
  hideFooter = false,
}: ArticleCardProps) => {
  const { t } = useTranslation('common');
  return (
    <article
      key={_id}
      className={styles[className]}
      onClick={() => {
        navigate?.(`${ARTICLE_DETAILS}/${_id}`);
      }}>
      <section className={styles['header']}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Image src={'/images/logo2.png'} alt={source} width={30} height={30} layout={'fixed'} />
          <p className={styles['source']} data-testid={'article-source'}>
            {source}
          </p>
        </div>
        <p className={styles['publishedAt']}>{convertDate(published_at)}</p>
      </section>
      <section className={styles['content']}>
        <p className={styles['title']} data-testid={'article-title'}>
          {title}
        </p>
        <p className={styles['description']} data-testid={'article-description'}>
          {description}
        </p>
      </section>
      {!hideFooter && (
        <section className={styles['article-footer']}>
          {author && (
            <p className={styles['author']} data-testid={'article-author'}>
              {author}
            </p>
          )}
          {category && (
            <p className={styles['category']}>
              {t('category')}: {t(category.toLowerCase())}
            </p>
          )}
        </section>
      )}
    </article>
  );
};
