import {
  Flex,
  Header as HeaderMantine,
  HeaderProps,
  Menu,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import { TbMenu2 } from 'react-icons/tb';
import { useState } from 'react';
import styles from 'styles/components/header.module.scss';
import { Body, Heading } from '../typography';
import { sections } from './sidebar';
import NavLink, { ILink } from './navLink';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from 'public/wolfplanet.svg';
import { Translate } from '@phosphor-icons/react';
import { useRouter } from 'next/router';

interface IProps {
  baseProps?: Partial<HeaderProps>;
}

const links = Object.entries(sections).reduce(
  (p, c) => [...p, ...c[1]],
  [] as ILink[]
);

const Header = (props: IProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <HeaderMantine
      height={'11rem'}
      {...props.baseProps}
      withBorder={false}
      className={[
        props.baseProps?.className ?? '',
        menuOpen ? styles.opened : '',
        router.pathname === '/' ? styles.transparent : styles.normalHeader, // Apply transparent class
      ].join(' ')}>
      <div className={styles.header}>
        <Flex gap="md">
          <UnstyledButton
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}>
            <TbMenu2 size={32} />
          </UnstyledButton>
          <Link href="/users">
            <Image src={LogoSVG} alt="Logo" className={styles.headerlogo} />
          </Link>
        </Flex>
        <div className={styles.nav}>
          <UnstyledButton
            onClick={() => router.push('/')}
            className={`${styles.link} ${
              router.pathname === '/' ? styles.active : ''
            }`}>
            <Heading
              variant={4}
              className={`${router.pathname === '/' ? styles.active : ''}`}>
              Home{' '}
            </Heading>
          </UnstyledButton>
          <UnstyledButton
            onClick={() => router.push('/about')}
            className={`${styles.link} ${
              router.pathname === '/about' ? styles.active : ''
            }`}>
            <Heading
              variant={4}
              // color="white"
              className={`${
                router.pathname === '/about' ? styles.active : ''
              }`}>
              About Us{' '}
            </Heading>
          </UnstyledButton>
          <UnstyledButton
            onClick={() => router.push('/whitepaper')}
            className={`${styles.link} ${
              router.pathname === '/whitepaper' ? styles.active : ''
            }`}>
            <Heading
              variant={4}
              // color="white"
              className={`${
                router.pathname === '/whitepaper' ? styles.active : ''
              }`}>
              Whitepaper{' '}
            </Heading>
          </UnstyledButton>
          <UnstyledButton
            onClick={() => router.push('/community')}
            className={`${styles.link} ${
              router.pathname === '/community' ? styles.active : ''
            }`}>
            <Heading
              variant={4}
              // color="white"
              className={`${
                router.pathname === '/community' ? styles.active : ''
              }`}>
              Community{' '}
            </Heading>
          </UnstyledButton>
          <UnstyledButton
            onClick={() => router.push('/download')}
            className={`${styles.link} ${
              router.pathname === '/download' ? styles.active : ''
            }`}>
            <Heading
              variant={4}
              // color="white"
              className={`${
                router.pathname === '/download' ? styles.active : ''
              }`}>
              Download{' '}
            </Heading>
          </UnstyledButton>

          <Menu>
            <Menu.Target>
              <Translate size={32} color="white" />
            </Menu.Target>

            <Menu.Dropdown className={styles.menu}>
              <Menu.Item>
                {
                  <Body variant={2} color="#4178FA">
                    English
                  </Body>
                }
              </Menu.Item>
              <Menu.Item>
                {
                  <Body variant={2} color="#F2F3F7">
                    简体中文
                  </Body>
                }
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
    </HeaderMantine>
  );
};

export default Header;
