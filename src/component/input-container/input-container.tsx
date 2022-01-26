import React from 'react';
import Image from 'next/image';
import styles from './input-container.module.scss';
export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder: string;
  icon?: string;
}

export const Input = ({ value, onChange, onBlur, placeholder, icon = '/images/search-icon.svg' }: InputProps) => {
  return (
    <div className={styles['container']}>
      <span className={styles['icon']}>
        <Image src={icon} alt={'Abc'} width={20} height={20} layout={'fixed'} />
      </span>
      <input
        aria-label='input'
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onBlur={() => {
          onBlur?.();
        }}
      />
    </div>
  );
};
