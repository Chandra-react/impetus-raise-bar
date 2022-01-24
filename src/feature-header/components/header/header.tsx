import React from 'react';
import Image from 'next/image';
import styles from './header.module.scss';

export const Header = ({
  updatelanguage,
  language,
}: {
  updatelanguage: (language: string) => void;
  language?: string;
}) => {
  return (
    <header className={styles['header-container']}>
      <Image src={'/images/logo2.png'} alt={'Abc'} width={50} height={50} layout={'fixed'} />
      <section className={styles['input-container']}>
        <span className={styles['icon']}>
          <Image src={'/images/search-icon.svg'} alt={'Abc'} width={20} height={20} layout={'fixed'} />
        </span>
        <select
          value={language || 'en'}
          onChange={(e) => {
            updatelanguage(e.target.value);
          }}>
          <option value={'en'}>English</option>
          <option value={'es'}>Spanish</option>
          <option value={'pt'}>Portuguess</option>
        </select>
      </section>
    </header>
  );
};
