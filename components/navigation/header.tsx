import {
  Burger,
  Divider,
  Flex,
  Header as HeaderMantine,
  HeaderProps,
  Menu,
  Modal,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import { TbMenu2 } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import styles from 'styles/components/header.module.scss';
import { Body, BodyBold, Heading } from '../typography';
import { sections } from './sidebar';
import NavLink, { ILink } from './navLink';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from 'public/wolfplanet.svg';
import { Translate } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import GlobeIcon from 'public/GlobeIcon.svg';
import { Footer } from 'components/navigation';
interface IProps {
  baseProps?: Partial<HeaderProps>;
}

const links = [
  { name: '主页', nameEn: 'Home', link: '/' },
  { name: '关于我们', nameEn: 'About Us', link: '/about' },
  { name: '白皮书', nameEn: 'White Paper', link: '/whitepaper' },
  { name: '社群', nameEn: 'Community', link: '/community' },
  { name: 'NFT', nameEn: 'NFT', link: '/nft' },
  { name: '下载', nameEn: 'Download', link: '/download' },
];

const languages = [{ name: 'English' }, { name: '简体中文' }];

const Header = (props: IProps) => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const [menuOpen, setMenuOpen] = useState(false);
  const [translateClicked, setTranslateClicked] = useState(false);
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
    if (width <= 835) {
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
    console.log('header router', router);
  }, [router.pathname]);

  const setLanguage = (language: string) => {
    router.push({ pathname, query }, asPath, { locale: language });
  };

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
            <Link href="/">
              <Image src={LogoSVG} alt="Logo" className={styles.headerLogo} />
            </Link>
          </Flex>
          <div className={styles.nav}>
            {links.map((link, index) => (
              <UnstyledButton
                key={index}
                onClick={() => router.push(link.link)}
                className={`${styles.link} ${
                  isActivePath(link.link) ? styles.active : ''
                }`}>
                {router.locale === 'en' ? (
                  <Heading
                    variant={4}
                    className={`${
                      isActivePath(link.link) ? styles.active : ''
                    }`}>
                    {link.nameEn}
                  </Heading>
                ) : (
                  <BodyBold
                    variant={5}
                    className={`${
                      isActivePath(link.link) ? styles.active : ''
                    }`}>
                    {link.name}
                  </BodyBold>
                )}
              </UnstyledButton>
            ))}

            <Menu onClose={() => setTranslateClicked(false)}>
              <Menu.Target>
                <Image
                  src={GlobeIcon}
                  alt="globe"
                  color={translateClicked ? '#4178FA' : 'white'}
                  height={32}
                  width={32}
                  onClick={() => setTranslateClicked(true)}
                  style={{ cursor: 'pointer' }}
                />
              </Menu.Target>

              <Menu.Dropdown className={styles.menu}>
                <Menu.Item
                  className={styles.menuItem}
                  onClick={() => setLanguage('en')}>
                  {
                    <BodyBold
                      variant={5}
                      color={locale === 'en' ? '#4178FA' : 'white'}>
                      English
                    </BodyBold>
                  }
                </Menu.Item>
                <Menu.Item
                  className={styles.menuItem}
                  onClick={() => setLanguage('cn')}>
                  {
                    <BodyBold
                      variant={5}
                      color={locale !== 'en' ? '#4178FA' : 'white'}>
                      简体中文
                    </BodyBold>
                  }
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          <Burger
            color="#FFFFFF"
            opened={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className={styles.hamburger}
            size={40}
          />
          {/* <UnstyledButton
            className={styles.hamburger}
            onClick={() => setMenuOpen((prev) => !prev)}>
            <TbMenu2 size={24} />
          </UnstyledButton> */}
        </div>
      </div>
      {menuOpen && (
        <div
          // mt={'42px'}
          // align="center"
          // justify="center"
          // spacing={width > 400 ? '42px' : '30px'}
          className={styles.linkMobile}>
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
                setActive(link.link);
                router.push(link.link);
                setMenuOpen(false);
              }}>
              <BodyBold
                variant={2}
                className={`${isActivePath(link.link) ? styles.active : ''}`}>
                {link.name}
              </BodyBold>
            </Link>
          ))}
          <Divider color="#3E404E" w={'100%'} mb={'30px'} />
          {languages.map((language, index) => (
            <div
              key={index}
              className={
                index === 1 ? styles.languageClicked : styles.languageUnclicked
              }>
              <BodyBold variant={2}>{language.name}</BodyBold>
            </div>
          ))}
          <Footer />
        </div>
      )}
    </HeaderMantine>
  );
};

export default Header;
function useDisclosure(arg0: boolean): [any, { toggle: any }] {
  throw new Error('Function not implemented.');
}
