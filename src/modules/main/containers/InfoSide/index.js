import React, { PureComponent } from 'react';
// UI
import { Flex, Title, Button } from '~/ui';
import { Footer } from '../Footer';
import { Background } from '../Background';
import { Logo } from '../Logo';
// styles
import s from './style.module.sass';

export class InfoSide extends PureComponent {
  render() {
    return (
      <Flex className={s.InfoSide} direction="column" justify="space-between">
        <Flex>
          <Title className={s.Title} size="large">
            Welcome! Thanks for joining us.
          </Title>
        </Flex>
        <Flex className={s.LogoSection}>
          <Background />
          <Logo />
        </Flex>
        <Flex>
          <a
            href="https://www.google.com"
            target="__blank"
            rel="noopener noreferrer"
          >
            <Button className={s.AccountButton}>Set up your account</Button>
          </a>
        </Flex>
        <Flex className={s.Footer}>
          <Footer />
        </Flex>
      </Flex>
    );
  }
}
