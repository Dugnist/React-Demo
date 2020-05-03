import React, { PureComponent } from 'react';
// UI
import { Flex } from '~/ui';
// Containers
import { ListDescription } from '../ListDescription';
import { CardsList } from '../CardsList';
// styles
import s from './style.module.sass';

export class ListSide extends PureComponent {
  render() {
    return (
      <Flex className={s.ListSide} direction="column" justify="flex-start">
        <ListDescription />
        <CardsList />
      </Flex>
    );
  }
}
