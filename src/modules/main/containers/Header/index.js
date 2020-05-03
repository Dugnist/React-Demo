import React, { PureComponent } from 'react';
// UI
import { Flex, Menu, Text, Badges, Image } from '~/ui';
// containets
import { MiniProfile } from '../MiniProfile';
// styles
import s from './style.module.sass';
// assets
import Bell from './assets/bell.js';
import Burger from './assets/burger.js';

export class Header extends PureComponent {
  render() {
    return (
      <Flex className={s.Header} justify="space-between">
        <Menu className={s.Menu}>
          <Text className={s.MenuItem}>Browse</Text>
          <Text className={s.MenuItem}>How it works</Text>
          <Text className={s.MenuItem}>Help</Text>
          <Text className={s.MenuItem}>About</Text>
        </Menu>
        <Flex className={s.MiniProfile} justify="space-between">
          <MiniProfile className={s.AvatarWithName} />
          <div className={s.Badges}>
            <Bell />
            <span>2</span>
          </div>
          <div className={s.MenuBurger}>
            <Burger />
          </div>
        </Flex>
      </Flex>
    );
  }
}
