import React from 'react';
import Image from 'next/image';
import styles from './no-data-component.module.scss';
export interface NoDataComponentProps {
  headline?: string;
  tagline?: string;
}

export const NoDataComponent = ({ headline, tagline }: NoDataComponentProps) => {
  return (
    <div className={styles['image-container']} data-testid={'no-data'}>
      <Image src={'/images/no-data.svg'} alt='error' width={100} height={100} />
      {headline && <p>{headline}</p>}
      {tagline && <p>{tagline}</p>}
    </div>
  );
};
