import React from 'react';
import Head from 'next/head';
import styles from './layout.module.scss';
export interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <div className={styles['container']}>
      <Head>
        <title>{title}</title>
        <meta name='Article' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  );
};
