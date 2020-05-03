import React, { PureComponent } from 'react';
// UI
import { Image } from '~/ui';
// styles
import s from './style.module.sass';
// assets
import pattern from './assets/pattern.svg';

export class Background extends PureComponent {
  render() {
    return <Image className={s.Background} src={pattern} />;
  }
}
