import React from 'react';
// styles
import s from './style.module.sass';

export default (Element) => ({ className = '', ...props }) => (
  <Element className={`${s.Element || ''} ${className}`} {...props}>
    {props.children}
  </Element>
);
