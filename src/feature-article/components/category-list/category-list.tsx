import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import styles from './category-list.module.scss';
import { CategoryListProps } from '../../models';
import { Input } from '../../../component';

export const CategoryList = ({
  categoryList,
  selectedCategory,
  updateSelectedCategory,
  search,
  updateSearch,
  getSearchResult,
}: CategoryListProps) => {
  const { t } = useTranslation('common');
  return (
    <div className={styles['category-container']}>
      <section>
        {categoryList.map((category) => {
          const categoryStyle = selectedCategory.includes(category) ? '-selected' : '';
          return (
            <span
              className={styles[`category${categoryStyle}`]}
              key={category}
              onClick={() => updateSelectedCategory(category)}>
              {t(category)}
            </span>
          );
        })}
      </section>
      <Input placeholder={`${t('search')}....`} value={search} onChange={updateSearch} onBlur={getSearchResult} />
    </div>
  );
};
