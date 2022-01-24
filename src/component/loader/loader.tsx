import React from 'react';
import Image from 'next/image';
import styles from './loader.module.scss';
export interface LoaderProps {
  loaderStyle: string;
}

export const Loader = ({ loaderStyle }: LoaderProps) => {
  return (
    <div className={styles[loaderStyle]} data-testid={'loader'}>
      <Image src={'/images/loader.svg'} alt={'loader'} width={50} height={50} layout={'fixed'} />
    </div>
  );
};
