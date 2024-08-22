import {
  Flex,
  Footer as FooterMantine,
  FooterProps,
  Group,
  Stack,
} from '@mantine/core';
import { useRouter } from 'next/router';
import styles from 'styles/components/footer.module.scss';
import { Body, BodyBold, Heading, BodyDmsans } from '../typography';
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

const PrivacyPolicyText = '隐私政策';
const TermsOfUseText = '用户协议';
const WolfPlanetAllRights = '© 2024 WolfPlanet 版权所有';

const PrivacyPolicyTextEn = 'Privacy Policy';
const TermsOfUseTextEn = 'User Agreement';
const WolfPlanetAllRightsEn = 'Copyright © 2024 WolfPlanet';

const Footer = (props: IProps) => {
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
                  <Link
                    href="/privacy-policy"
                    style={{ textDecoration: 'none' }}>
                    {router.locale === 'en' ? (
                      <BodyDmsans
                        variant={1}
                        color="#F2F3F7"
                        style={{ cursor: 'pointer', fontWeight: 700 }}>
                        {PrivacyPolicyTextEn} &nbsp;
                      </BodyDmsans>
                    ) : (
                      <BodyBold
                        variant={5}
                        color="#F2F3F7"
                        style={{ cursor: 'pointer' }}>
                        {PrivacyPolicyText} &nbsp;
                      </BodyBold>
                    )}
                  </Link>
                  <Body
                    variant={2}
                    color="#9198B0"
                    style={{ marginTop: router.locale === 'en' ? 2 : 4 }}>
                    | &nbsp;
                  </Body>
                  <Link href="/terms-of-use" style={{ textDecoration: 'none' }}>
                    {router.locale === 'en' ? (
                      <BodyDmsans
                        variant={1}
                        color="#F2F3F7"
                        style={{ cursor: 'pointer', fontWeight: 700 }}>
                        {TermsOfUseTextEn} &nbsp;
                      </BodyDmsans>
                    ) : (
                      <BodyBold
                        variant={5}
                        color="#F2F3F7"
                        style={{ cursor: 'pointer' }}>
                        {TermsOfUseText} &nbsp;
                      </BodyBold>
                    )}
                  </Link>
                  {router.locale === 'en' ? (
                    <BodyDmsans
                      variant={1}
                      color="#9198B0"
                      style={{ marginTop: 0 }}>
                      {WolfPlanetAllRightsEn}
                    </BodyDmsans>
                  ) : (
                    <Body variant={2} color="#9198B0" style={{ marginTop: 4 }}>
                      {WolfPlanetAllRights}
                    </Body>
                  )}
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
                <Link href="/privacy-policy" style={{ textDecoration: 'none' }}>
                  {router.locale === 'en' ? (
                    <BodyDmsans
                      variant={1}
                      color="#F2F3F7"
                      style={{ cursor: 'pointer', fontWeight: 700 }}>
                      {PrivacyPolicyTextEn} &nbsp;
                    </BodyDmsans>
                  ) : (
                    <BodyBold
                      variant={5}
                      color="#F2F3F7"
                      style={{ cursor: 'pointer' }}>
                      {PrivacyPolicyText} &nbsp;
                    </BodyBold>
                  )}
                </Link>
                <Body variant={2} color="#9198B0" style={{ marginTop: 2 }}>
                  | &nbsp;
                </Body>
                <Link href="/terms-of-use" style={{ textDecoration: 'none' }}>
                  {router.locale === 'en' ? (
                    <BodyDmsans
                      variant={1}
                      color="#F2F3F7"
                      style={{ cursor: 'pointer', fontWeight: 700 }}>
                      {TermsOfUseTextEn} &nbsp;
                    </BodyDmsans>
                  ) : (
                    <BodyBold
                      variant={5}
                      color="#F2F3F7"
                      style={{ cursor: 'pointer' }}>
                      {TermsOfUseText} &nbsp;
                    </BodyBold>
                  )}
                </Link>
              </span>
            </Flex>
            {router.locale === 'en' ? (
              <BodyDmsans
                variant={1}
                color="#9198B0"
                style={{ marginTop: -10 }}>
                {WolfPlanetAllRightsEn}
              </BodyDmsans>
            ) : (
              <Body variant={2} color="#9198B0" style={{ marginTop: 4 }}>
                {WolfPlanetAllRights}
              </Body>
            )}
          </Stack>
        </div>
      )}
    </>
  );
};

export default Footer;
