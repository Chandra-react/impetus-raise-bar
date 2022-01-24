import React, { useRef } from 'react';
import { ArticleCard } from '../article-card/article-card';
import { CategoryList } from '../category-list/category-list';
import styles from './article-container.module.scss';
import { ArticleContainerProps } from '../../models';
import { Loader, ErrorComponent, Layout } from '../../../component';
import useTranslation from 'next-translate/useTranslation';
import { NoDataComponent } from '../../../component/no-data-component/no-data-component';

export const ArticleContainer = ({
  articleData,
  totalCount,
  loading,
  updatePagination,
  error,
  navigate,
  ...props
}: ArticleContainerProps) => {
  const { t } = useTranslation('common');
  const listInnerRef = useRef(null);
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.round(scrollTop) + clientHeight === scrollHeight && articleData.length < totalCount && !loading) {
        updatePagination();
      }
    }
  };
  return (
    <Layout>
      <div className={styles['conatiner']}>
        {!error ? (
          <>
            <CategoryList {...props} />
            {articleData.length !== 0 ? (
              <div className={styles['article-card']} ref={listInnerRef} onScroll={onScroll}>
                {articleData.map((article) => (
                  <ArticleCard key={article.url} {...article} navigate={navigate} />
                ))}
              </div>
            ) : !loading ? (
              <NoDataComponent headline={t('no_data_message')} tagline={t('no_data_message_1')} />
            ) : (
              <></>
            )}
            {loading && <Loader loaderStyle={articleData.length == 0 ? 'loader' : 'infinit-loader'} />}
          </>
        ) : (
          <ErrorComponent headline={t('error_message')} />
        )}
      </div>
    </Layout>
  );
};
