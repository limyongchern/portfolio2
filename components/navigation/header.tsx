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

const links = [
  { name: '主页', link: '/' },
  { name: '关于我们', link: '/about' },
  { name: '白皮书', link: '/whitepaper' },
  { name: '社区', link: '/community' },
  { name: '下载', link: '/download' },
];

const languages = [{ name: 'English' }, { name: '中文' }];

const Header = (props: IProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [translateClicked, setTranslateClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState(links[0].link);
  console.log(active, 'hahha');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const router = useRouter();

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
  }, [router.pathname]);
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

            <Menu onClose={() => setTranslateClicked(false)}>
              <Menu.Target>
                <Translate
                  size={32}
                  color={translateClicked ? '#4178FA' : 'white'}
                  onClick={() => setTranslateClicked(true)}
                  style={{ cursor: 'pointer' }}
                />
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
        <Stack
          mt={'42px'}
          align="center"
          justify="center"
          spacing={width > 400 ? '42px' : '30px'}
          className={styles.linkMobile}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className={
                active === link.link ? styles.linkClicked : styles.linkUnclicked
              }
              onClick={(event) => {
                event.preventDefault();
                console.log('active', active, 'link', link.link);
                setActive(link.link);
                router.push(link.link);
                setMenuOpen(false);
              }}>
              {link.name}
            </Link>
          ))}
          <Divider color="#3E404E" w={'100%'} />
          {languages.map((language, index) => (
            <div
              key={index}
              className={
                index === 0 ? styles.languageClicked : styles.languageUnclicked
              }>
              {language.name}
            </div>
          ))}
        </Stack>
      )}
    </HeaderMantine>
  );
};

export default Header;
function useDisclosure(arg0: boolean): [any, { toggle: any }] {
  throw new Error('Function not implemented.');
}
