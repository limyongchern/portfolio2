import Link from 'next/link';
import { NavLink as NavLinkMantine } from '@mantine/core';
import styles from 'styles/components/navLink.module.scss';
import { Body } from '../typography';
import { useRouter } from 'next/router';

export interface ILink {
  label: string;
  link: string;
  icon: JSX.Element;
}

const NavLink = ({ label, link, icon }: ILink) => {
  const { pathname } = useRouter();
  return (
    <Link href={link}>
      <NavLinkMantine
        className={[
          styles.navButton,
          pathname === link ? styles.selected : '',
        ].join(' ')}
        icon={icon}
        label={
          <Body variant={5} color={pathname === link ? '#6200ff' : '#333333'}>
            {label}
          </Body>
        }
      />
    </Link>
  );
};

export default NavLink;
