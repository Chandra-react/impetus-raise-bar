import React from 'react';
import Image from 'next/image';
import styles from './error-component.module.scss';
export interface ErrorComponentProps {
  headline?: string;
  tagline?: string;
}
export const ErrorComponent = ({ headline, tagline }: ErrorComponentProps) => {
  return (
    <div className={styles['image-container']} data-testid={'error-data'}>
      <Image src={'/images/error-image.jpg'} alt='error' width={300} height={300} />
      {headline && <p>{headline}</p>}
      {tagline && <p>{tagline}</p>}
    </div>
  );
};
