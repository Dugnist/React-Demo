import React, { PureComponent } from 'react';
// redux
import { connect } from '~/plugins/redux';
// UI
import { Flex } from '~/ui';
// Containers
import { Card } from '../Card';
// styles
import s from './style.module.sass';

const sortZ_A = function (a, b) {
  if (a.first_name > b.first_name) return -1;
  if (a.first_name < b.first_name) return 1;
  return 0;
};

export const CardsList = connect(
  ({ users: { list } }) => ({ list }), // state
  () => ({}) // effects
)(
  class CardsList extends PureComponent {
    render() {
      const { list = [] } = this.props;
      const sortedArray = list.sort(sortZ_A);
      if (sortedArray.length > 15) sortedArray.length = 15;

      return (
        <Flex direction="column" className={s.CardsList}>
          {sortedArray.map((user, i) => (
            <Card {...user} key={i} />
          ))}
        </Flex>
      );
    }
  }
);
