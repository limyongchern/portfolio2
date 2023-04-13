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
      className={[
        props.baseProps?.className ?? '',
        menuOpen ? styles.opened : '',
        styles.container,
      ].join(' ')}>
      <div className={styles.header}>
        <Flex gap="md">
          <UnstyledButton
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}>
            <TbMenu2 size={32} />
          </UnstyledButton>
          <Heading>LOGO</Heading>
        </Flex>
        <Heading>AVATAR</Heading>
      </div>
      <Stack>
        {links.map((link) => (
          <NavLink {...link} key={link.label} />
        ))}
      </Stack>
    </HeaderMantine>
  );
};

export default Header;
