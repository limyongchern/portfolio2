import { Flex, FooterProps, Group, Stack } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';
import InsIcon from 'public/InsIcon.svg';
import LinkedInIcon from 'public/LinkedInIcon.svg';
import { useEffect, useState } from 'react';
import styles from 'styles/components/footer.module.scss';
import { Body, BodyBold } from '../typography';
import { File } from '@phosphor-icons/react';

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
  const [igLink, setIgLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState(
    'https://www.linkedin.com/in/yongchernlim/'
  );

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
  return (
    <>
      {!isMobile && (
        <div className={styles.outerContainer}>
          <div className={styles.innerContainer}>
            <Stack>
              <Group position="apart">
                <Group spacing={24}>
                  <a
                    href="/path-to-your-resume.pdf"
                    download="Lim_Yong_Chern_Resume.pdf">
                    <File height={24} width={24} color="white" />
                  </a>
                  <a href={linkedInLink} target="_blank">
                    <Image
                      src={LinkedInIcon}
                      height={24}
                      width={24}
                      alt="LinkedIn"
                    />
                  </a>
                </Group>
              </Group>
              <Flex justify={'center'} mt={40}>
                <span style={{ display: 'flex' }}>
                  <Body variant={2} color="#9198B0" style={{ marginTop: 4 }}>
                    | &nbsp;
                  </Body>

                  <BodyBold
                    variant={5}
                    color="#F2F3F7"
                    style={{ cursor: 'pointer' }}>
                    Website Made By &nbsp;
                  </BodyBold>

                  <Body variant={2} color="#9198B0" style={{ marginTop: 4 }}>
                    Lim Yong Chern
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
            <Group spacing={30}>
              <File height={24} width={24} />
              <Image src={LinkedInIcon} height={24} width={24} alt="LinkedIn" />
            </Group>
            <Flex justify={'center'} style={{ paddingTop: '56px' }}>
              <span style={{ display: 'flex' }}>
                <Body variant={2} color="#9198B0" style={{ marginTop: 2 }}>
                  | &nbsp;
                </Body>

                <BodyBold
                  variant={5}
                  color="#F2F3F7"
                  style={{ cursor: 'pointer' }}>
                  Website Made By
                </BodyBold>
              </span>
            </Flex>

            <Body variant={2} color="#9198B0" style={{ marginTop: 4 }}>
              Lim Yong Chern
            </Body>
          </Stack>
        </div>
      )}
    </>
  );
};

export default Footer;
