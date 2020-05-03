import React, { PureComponent } from 'react';
// UI
import { Flex, Avatar, Text } from '~/ui';
// styles
import s from './style.module.sass';
// assets
import avatar from './assets/avatar.svg';

export class MiniProfile extends PureComponent {
  render() {
    return (
      <Flex className={s.MiniProfile} align="center">
        <Avatar src={avatar} />
        <Text className={s.UserFullName}>Alex Birdsman</Text>
      </Flex>
    );
  }
}
