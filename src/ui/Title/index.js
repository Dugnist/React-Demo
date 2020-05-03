import React from 'react';
// styles
import s from './style.module.sass';

export default ({ Small, Medium, Big, Large }) => ({
  className = '',
  size = 'big',
  ...props
}) => {
  const Title =
    size === 'small'
      ? Small
      : size === 'medium'
      ? Medium
      : size === 'big'
      ? Big
      : size === 'large'
      ? Large
      : Small;
  return (
    <Title className={`${s.Title || ''} ${className} ${size}`} {...props}>
      {props.children}
    </Title>
  );
};
