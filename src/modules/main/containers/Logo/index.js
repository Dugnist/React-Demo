import React, { PureComponent } from 'react';
// UI
import { Flex, Image } from '~/ui';
// styles
import s from './style.module.sass';
// assets
import logo from './assets/Logo.svg';

export class Logo extends PureComponent {
  render() {
    return (
      <Flex className={s.LogoBack}>
        <Image src={logo} />
      </Flex>
    );
  }
}
