import React, { PureComponent } from 'react';
// UI
import { Flex, Avatar, Text, Email } from '~/ui';
// styles
import s from './style.module.sass';
// assets
// import userAvatar from './assets/userAvatar.svg';

export class Card extends PureComponent {
  render() {
    const { email, first_name, last_name, avatar } = this.props;

    return (
      <Flex className={s.Card} justify="space-between">
        <Flex className={s.CardLeftSide}>
          <Flex className={s.AvatarZone}>
            <Avatar className={s.Avatar} src={avatar} />
          </Flex>
          <Flex className={s.UserFullName}>
            <Text
              className={s.UserFullNameText}
            >{`${first_name} ${last_name}`}</Text>
          </Flex>
        </Flex>
        <Flex direction="column" align="flex-end" className={s.UserEmail}>
          <Text className={s.hint}>User email address</Text>
          <Email>{email}</Email>
        </Flex>
      </Flex>
    );
  }
}
