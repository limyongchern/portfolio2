import React, { useEffect, useState } from 'react';
import styles from '../../styles/pages/whitepaper/index.module.scss';
import { Button, Flex, Stack } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import dynamic from 'next/dynamic';

const PDFViewer = dynamic(
  () => import('../../components/whitepaper/PdfViewer'),
  {
    ssr: false,
  }
);
const Whitepaper = () => {
  //MOBILE AND DESKTOP
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
  console.log(width);

  return (
    <>
      {!isMobile ? (
        <div className={styles.container}>
          <div className={styles.containerWidth}>
            <Stack justify="center" align="center" spacing={'24px'}>
              <Heading
                color="#F2F3F7"
                variant={6}
                fs={'56px'}
                fw={400}
                lh={'60px'}
                style={{ textAlign: 'center' }}>
                Turn Slack requests into actionable issues
              </Heading>
              <Heading
                color="#9198B0"
                variant={6}
                fs={'20px'}
                fw={700}
                lh={'normal'}
                style={{ textAlign: 'center' }}>
                Linear Asks is the easiest way to create and manage workplace
                requests. Streamline bug reports, feature ideas, IT tickets, HR
                requests, and more.
              </Heading>
            </Stack>
            <div style={{ margin: '56px 0' }}>
              <PDFViewer />
            </div>

            <Stack justify="center" align="center" spacing={'24px'}>
              <Heading
                color="#F2F3F7"
                variant={6}
                fs={'43.875px'}
                fw={600}
                lh={'52px'}
                style={{ textAlign: 'center' }}>
                Short text about V Systems
              </Heading>
              <Body
                color="#9198B0"
                variant={6}
                fs={'20px'}
                fw={700}
                lh={'normal'}
                style={{
                  textAlign: 'center',
                  padding: '0 150px',
                  marginBottom: '42px',
                }}>
                Linear Asks is a new take on intake. Submit requests directly
                from Slack and automatically send them to the relevant team in
                Linear. Eliminate cluttered channels and reduce context
                switching.
              </Body>
              <Button
                variant="filled"
                style={{ background: '#4178FA' }}
                size="xl"
                color="#4178FA"
                radius={'8px'}
                h={'40px'}>
                Contact Us
              </Button>
            </Stack>
          </div>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          <div className={styles.containerMobileWidth}>
            <Stack
              justify="center"
              align="center"
              spacing={'24px'}
              p={'100px 32px 0 32px'}>
              <Heading
                color="#F2F3F7"
                variant={6}
                fs={'36px'}
                fw={400}
                lh={'normal'}
                style={{ textAlign: 'center' }}>
                Turn Slack requests into actionable issues
              </Heading>
              <Body
                color="#9198B0"
                variant={6}
                fs={'18px'}
                fw={700}
                lh={'normal'}
                style={{ textAlign: 'center' }}>
                Linear Asks is the easiest way to create and manage workplace
                requests. Streamline bug reports, feature ideas, IT tickets, HR
                requests, and more.
              </Body>
            </Stack>
            <div style={{ margin: '56px 0' }}>
              <PDFViewer />
            </div>

            <Stack
              justify="center"
              align="center"
              spacing={'24px'}
              p={'0 32px 100px 32px'}>
              <Heading
                color="#F2F3F7"
                variant={6}
                fs={'36px'}
                fw={600}
                lh={'52px'}
                style={{ textAlign: 'center' }}>
                Short text about V Systems
              </Heading>
              <Body
                color="#9198B0"
                variant={6}
                fs={'18px'}
                fw={700}
                lh={'normal'}
                style={{
                  textAlign: 'center',
                  marginBottom: '42px',
                }}>
                Linear Asks is a new take on intake. Submit requests directly
                from Slack and automatically send them to the relevant team in
                Linear. Eliminate cluttered channels and reduce context
                switching.
              </Body>
              <Button
                variant="filled"
                size="xl"
                style={{ background: '#4178FA' }}
                color="#4178FA"
                radius={'8px'}
                h={'40px'}>
                Contact Us
              </Button>
            </Stack>
          </div>
        </div>
      )}
    </>
  );
};

export default Whitepaper;
