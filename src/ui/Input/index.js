import React from 'react';
// styles
import s from './style.module.sass';

export default (Button) => ({ className = '', ...props }) => (
  <Button className={`${s.Button || ''} ${className}`} {...props}>
    {props.children}
  </Button>
);
