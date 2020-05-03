/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

// Components
import _Flex from './Flex';
import _Button from './Button';
import _Input from './Input';
import _Text from './Text';
import _Image from './Image';
import _Card from './Card';
import _Email from './Email';
import _Menu from './Menu';
import _Title from './Title';

/**
 * wrap native tags for replace any css
 * framework later (like antd or materialUI)
 */
export const Flex = _Flex;
export const Button = _Button((p) => <button {...p} />);
export const Image = _Image((p) => <img {...p} alt={p.alt} />);
export const Input = _Input((p) => <input {...p} />);
export const Title = _Title({
  Small: (p) => <h4 {...p} />,
  Medium: (p) => <h3 {...p} />,
  Big: (p) => <h2 {...p} />,
  Large: (p) => <h1 {...p} />,
});
export const Email = _Email((p) => <div {...p} />);
export const Text = _Text((p) => <div {...p} />);
// Reused
export const Menu = _Menu((p) => <Flex {...p} />);
export const Card = _Card((p) => <Flex {...p} />);
export const Avatar = (p) => <Image type="round" {...p} />;
export const Badges = (p) => <Image type="badge" {...p} />;
