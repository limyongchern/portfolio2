import {
  Burger,
  Divider,
  Flex,
  Header as HeaderMantine,
  HeaderProps,
  UnstyledButton,
} from '@mantine/core';
import { Footer } from 'components/navigation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'styles/components/header.module.scss';
import { BodyBold, Heading } from '../typography';
interface IProps {
  baseProps?: Partial<HeaderProps>;
}

const links = [
  { name: 'Home', nameEn: 'Home', link: 'first' },
  { name: 'About Me', nameEn: 'About Me', link: 'about' },
  { name: 'Timeline', nameEn: 'Timeline', link: 'timeline' },
  {
    name: 'Past Experience',
    nameEn: 'Past Experience',
    link: 'past_experience',
  },
  { name: 'Contact Me', nameEn: 'Contact Me', link: 'contact_me' },
];

const Header = (props: IProps) => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(links[0].link);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 850) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [width]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    };
  }, [width]);

  useEffect(() => {
    setActive(router.pathname);
  }, [router.pathname]);

  const isActivePath = (path: string) => {
    if (router.pathname === path) {
      return true;
    } else {
      if (
        router.pathname.split('/')[1] === 'announcement' &&
        path === '/about'
      ) {
        return true;
      }
      if (router.pathname.split('/')[1] === 'activity' && path === '/about') {
        return true;
      }
    }
  };

  return (
    <>
      {isUnderMaintenance ? (
        <HeaderMantine
          height={'9rem'}
          {...props.baseProps}
          withBorder={false}
          className={[
            props.baseProps?.className ?? '',
            menuOpen ? styles.opened : '',
            router.pathname === '/' && !isScrolled && !isMobile
              ? styles.transparent
              : styles.normalHeader, // Apply transparent class
          ].join(' ')}>
          <div className={styles.headerContainer}>
            <div className={styles.header}>
              <Flex gap="md">
                <Link href="/" style={{ textDecoration: 'none' }}>
                  <BodyBold fw={700} color="#FFFFFF" variant={1}>
                    Lim Yong Chern
                  </BodyBold>
                </Link>
              </Flex>
              <div className={styles.nav}>
                {links.map((link, index) => (
                  <UnstyledButton
                    key={index}
                    onClick={(event) => {
                      event.preventDefault();
                      const targetSection = document.getElementById(link.link);
                      if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`${styles.link} ${
                      isActivePath(link.link) ? styles.active : ''
                    }`}>
                    <Heading
                      variant={4}
                      className={`${
                        isActivePath(link.link) ? styles.active : ''
                      }`}>
                      {link.nameEn}
                    </Heading>
                  </UnstyledButton>
                ))}
              </div>
              <Burger
                color="#FFFFFF"
                opened={menuOpen}
                onClick={() => setMenuOpen((prev) => !prev)}
                className={styles.hamburger}
                size={40}
              />
            </div>
          </div>
          {menuOpen && (
            <div className={styles.linkMobile}>
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.link}
                  className={
                    isActivePath(link.link)
                      ? styles.linkClicked
                      : styles.linkUnclicked
                  }
                  onClick={(event) => {
                    event.preventDefault();
                    const targetSection = document.getElementById(link.link);
                    if (targetSection) {
                      targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    setMenuOpen(false);
                  }}>
                  <Heading
                    variant={3}
                    className={`${
                      isActivePath(link.link) ? styles.active : ''
                    }`}>
                    {link.nameEn}
                  </Heading>
                </Link>
              ))}
              <Divider color="#3E404E" w={'100%'} mb={'30px'} />

              <Footer />
            </div>
          )}
        </HeaderMantine>
      ) : null}
    </>
  );
};

export default Header;
function useDisclosure(arg0: boolean): [any, { toggle: any }] {
  throw new Error('Function not implemented.');
}
