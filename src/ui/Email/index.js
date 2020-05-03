import React from 'react';
// styles
import s from './style.module.sass';

export default (Email) => ({ className = '', ...props }) => (
  <Email className={`${s.Email || ''} ${className}`} {...props}>
    {props.children}
  </Email>
);
