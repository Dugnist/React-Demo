import React, { PureComponent } from 'react';
// UI
import { Flex, Title, Text } from '~/ui';
// styles
import s from './style.module.sass';

export class ListDescription extends PureComponent {
  render() {
    return (
      <Flex direction="column" className={s.ListDescription}>
        <Title className={s.Title} size="big">
          Profile list
        </Title>
        <Text className={s.Description}>
          Laudem et via procedat oratio quaerimus igitur, quid et accurate
          disserendum et dolorem?. At magnum periculum adiit in oculis quidem
          exercitus quid ex ea voluptate et.
        </Text>
      </Flex>
    );
  }
}
