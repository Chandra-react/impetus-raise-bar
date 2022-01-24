import React from 'react';
import Image from 'next/image';
import styles from './page-header.module.scss';
export interface PageHeader {
  onBackClick: () => void;
  title: string;
}

export const PageHeader = ({ onBackClick, title }: PageHeader) => {
  return (
    <div className={styles['header']}>
      <Image
        src={'/images/back.svg'}
        alt={'source'}
        width={30}
        height={30}
        layout={'fixed'}
        onClick={onBackClick}
        className={styles['back-icon']}
      />
      {title}
    </div>
  );
};
