import React, { PureComponent } from 'react';
// UI
import { Flex, Text, Title } from '~/ui';
// styles
import s from './style.module.sass';

export class Footer extends PureComponent {
  render() {
    return (
      <Flex className={s.Footer} direction="column">
        <Title className={s.Title} size="medium">
          Description
        </Title>
        <Text className={s.Description}>
          Hanc ego cum soluta nobis est laborum et accusamus et via procedat
          oratio. Sed ut ad modum, quaeso, interpretaris? sicine eos censes aut
          rerum hic tenetur.
        </Text>
      </Flex>
    );
  }
}
