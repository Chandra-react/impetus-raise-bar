import React from 'react';
import styles from './layout.module.scss';

export const Layout: React.FC = ({ children }) => {
  return <div className={styles['container']}>{children}</div>;
};
