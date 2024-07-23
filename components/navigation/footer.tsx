import {
  Flex,
  Footer as FooterMantine,
  FooterProps,
  Group,
  Stack,
} from '@mantine/core';
import styles from 'styles/components/footer.module.scss';
import { Body, BodyBold, Heading } from '../typography';
import Link from 'next/link';
import Image from 'next/image';
import LogoSVG from 'public/wolfplanet.svg';
import FBIcon from 'public/FBIcon.svg';
import XIcon from 'public/XIcon.svg';
import InsIcon from 'public/InsIcon.svg';
import LinkedInIcon from 'public/LinkedInIcon.svg';
import GoogleIcon from 'public/GoogleIcon.svg';
import { useEffect, useState } from 'react';

interface IProps {
  baseProps?: Partial<FooterProps>;
}

const Footer = (props: IProps) => {
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
  return (
    <>
      {!isMobile && (
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <Stack>
              <Group position="apart">
                <Link href="/">
                  <Image
                    src={LogoSVG}
                    alt="Logo"
                    className={styles.headerlogo}
                  />
                </Link>

                <Group spacing={24}>
                  <Image src={FBIcon} height={24} width={24} alt="Facebook" />
                  <Image src={XIcon} height={24} width={24} alt="X" />
                  <Image src={InsIcon} height={24} width={24} alt="Instagram" />
                  <Image
                    src={LinkedInIcon}
                    height={24}
                    width={24}
                    alt="LinkedIn"
                  />
                  <Image src={GoogleIcon} height={24} width={24} alt="Google" />
                </Group>
              </Group>
              <Flex justify={'center'} mt={40}>
                <span style={{ display: 'flex' }}>
                  <Body
                    variant={2}
                    color="#F2F3F7"
                    style={{ cursor: 'pointer' }}>
                    隐私条款 &nbsp;
                  </Body>
                  <Body variant={2} color="#9198B0">
                    | &nbsp;
                  </Body>
                  <Body
                    variant={2}
                    color="#F2F3F7"
                    style={{ cursor: 'pointer' }}>
                    使用条款 &nbsp;
                  </Body>
                  <Body variant={2} color="#9198B0">
                    © 2024 WolfPlanet 版权所有
                  </Body>
                </span>
              </Flex>
            </Stack>
          </div>
        </div>
      )}

      {isMobile && (
        <div className={styles.footerMobile}>
          <Stack align="center">
            <Link href="/">
              <Image
                src={LogoSVG}
                alt="Logo"
                className={styles.headerlogo}
                style={{ marginBottom: '24px' }}
              />
            </Link>

            <Group spacing={30}>
              <Image src={FBIcon} height={24} width={24} alt="Facebook" />
              <Image src={XIcon} height={24} width={24} alt="X" />
              <Image src={InsIcon} height={24} width={24} alt="Instagram" />
              <Image src={LinkedInIcon} height={24} width={24} alt="LinkedIn" />
              <Image src={GoogleIcon} height={24} width={24} alt="Google" />
            </Group>
            <Flex justify={'center'} style={{ paddingTop: '56px' }}>
              <span style={{ display: 'flex' }}>
                <BodyBold
                  variant={5}
                  color="#F2F3F7"
                  style={{ cursor: 'pointer' }}>
                  隐私条款 &nbsp;
                </BodyBold>
                <Body variant={2} color="#9198B0" style={{ marginTop: 2 }}>
                  | &nbsp;
                </Body>
                <BodyBold
                  variant={5}
                  color="#F2F3F7"
                  style={{ cursor: 'pointer' }}>
                  使用条款 &nbsp;
                </BodyBold>
                <Body variant={2} color="#9198B0" style={{ marginTop: 4 }}>
                  © 2024 WolfPlanet 版权所有
                </Body>
              </span>
            </Flex>
          </Stack>
        </div>
      )}
    </>
  );
};

export default Footer;
