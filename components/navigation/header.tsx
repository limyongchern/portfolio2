import {
  Flex,
  Header as HeaderMantine,
  HeaderProps,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import { TbMenu2 } from 'react-icons/tb';
import { useState } from 'react';
import styles from 'styles/components/header.module.scss';
import { Heading } from '../typography';
import { sections } from './sidebar';
import NavLink, { ILink } from './navLink';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from 'public/wolfplanet.svg';
import { Translate } from '@phosphor-icons/react';

interface IProps {
  baseProps?: Partial<HeaderProps>;
}

const links = Object.entries(sections).reduce(
  (p, c) => [...p, ...c[1]],
  [] as ILink[]
);

const Header = (props: IProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderMantine
      height={'5rem'}
      {...props.baseProps}
      withBorder={false}
      className={[
        props.baseProps?.className ?? '',
        menuOpen ? styles.opened : '',
        styles.transparent, // Apply transparent class
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
          <Heading variant={4}>For Me</Heading>
          <Heading variant={4}>About Us </Heading>
          <Heading variant={4}>Whitepaper </Heading>
          <Heading variant={4}>Community </Heading>
          <Heading variant={4}>Download </Heading>

          <Translate size={32} color="white" />
        </div>
      </div>
    </HeaderMantine>
  );
};

export default Header;
