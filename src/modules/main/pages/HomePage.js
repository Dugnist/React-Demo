import React, { PureComponent } from 'react';
// UI
import { Flex } from '~/ui';
// Containers
import { Header } from '../containers/Header';
import { InfoSide } from '../containers/InfoSide';
import { ListSide } from '../containers/ListSide';
// redux
import { connect } from '~/plugins/redux';
// styles
import s from './HomePage.module.sass';

export const HomePage = connect(
  () => ({}), // state
  ({ users: { getUsers } }) => ({ getUsers }) // effects
)(
  class HomePage extends PureComponent {
    componentWillMount() {
      const { getUsers = () => {} } = this.props;

      getUsers();
    }

    render() {
      return (
        <>
          <Header />
          <Flex direction="row" className={s.HomePage}>
            <InfoSide />
            <ListSide />
          </Flex>
        </>
      );
    }
  }
);
