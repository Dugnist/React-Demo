import React from 'react';
// styles
import s from './style.module.sass';

export default (Text) => ({ className = '', ...props }) => (
  <Text className={`${s.Text || ''} ${className}`} {...props}>
    {props.children}
  </Text>
);
