import React from 'react';
// styles
import s from './style.module.sass';

export default (Image) => ({
  className = '',
  classWrap = '',
  count,
  ...props
}) => (
  <>
    <Image className={`${s.Image || ''} ${className}`} {...props}>
      {props.children}
    </Image>
    {count ? <div className={s.badges}>{count}</div> : ''}
  </>
);
