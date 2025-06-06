import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'text';
  state?: 'active' | 'disabled' | 'inverted';
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({
  variant = 'primary',
  state = 'active',
  children,
  onClick
}: Readonly<ButtonProps>) {
  const base = styles.base;

  const variantClass = styles[`${variant}-${state}`];

  return (
    <>
      <button
        className={clsx(base, variantClass)}
        disabled={state === 'disabled'}
        onClick={onClick}
      >
        {children}
      </button>
      <br/>
    </>
  );
}
