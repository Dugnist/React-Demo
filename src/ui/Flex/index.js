import React from 'react';
// styles
import s from './style.module.sass';

export default ({
  align,
  direction,
  justify,
  className = '',
  wrap,
  ...props
}) => {
  const custom = {};
  if (wrap) custom.flexWrap = 'wrap';
  if (align) custom.alignItems = align;
  if (justify) custom.justifyContent = justify;
  if (direction) custom.flexDirection = direction;
  return (
    <div className={`${s.Flex || ''} ${className}`} style={custom} {...props}>
      {props.children}
    </div>
  );
};
