//@ts-nocheck
import { Card, Container, Divider, Group, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Handshake,
  UsersThree,
  Star,
  CaretDoubleRight,
} from '@phosphor-icons/react';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import AboutUsTempImage from 'public/TempImages/AboutUsTempImage.png';
import AboutMe from 'public/YC1.jpg';
import PressImg1 from 'public/PressImg1.png';
import PressImg2 from 'public/PressImg2.png';
import { formatDate, formatActivityContent } from 'utils/common';
import { isMobile } from 'react-device-detect';

const AboutUsDataEn = {
  wolfPlanet: 'About Me',
  description: `Whats up? My Name is Yong Chern. I'm currently working as a front-end developer in V-Systems. I specialize in building websites and ensure the best experience for our users. `,
  description2: `Although I lean towards frontend, I'm always eager to learn, adapt and strive to build quality, clean, intuitive, and robust software with attention and deliberation whether it is frontend or backend.`,
  description3: `The languages I've currently learned includes SQL, HTML, CSS, TypeScript, JavaScript and many more. Aside from coding related stuffs, My hobby includes doing many different sports like Basketball, Futsal, Badminton, Gym and many more.`,
};

const AboutUs = () => {
  return (
    <>
      {/* First section */}
      <div className={styles.topContainer}>
        <Container fluid p={0}>
          {!isMobile ? (
            <>
              <Group
                position="center"
                w={'100%'}
                spacing={0}
                style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div className={styles.planetTextCont}>
                  <div
                    className={styles.planetTextCard}
                    style={{ height: 385 }}>
                    <>
                      <Heading variant={9} className={styles.aboutMeTitle}>
                        <span style={{ lineHeight: 1.2 }}>
                          {AboutUsDataEn.wolfPlanet}
                        </span>{' '}
                      </Heading>
                      <BodyDmsans
                        variant={2}
                        style={{ marginTop: '15px', textAlign: 'justify' }}
                        color="#F2F3F7">
                        {AboutUsDataEn.description}
                      </BodyDmsans>
                      <BodyDmsans
                        variant={2}
                        style={{ marginTop: '15px', textAlign: 'justify' }}
                        color="#F2F3F7">
                        {AboutUsDataEn.description2}
                      </BodyDmsans>
                      <BodyDmsans
                        variant={2}
                        style={{ marginTop: '15px', textAlign: 'justify' }}
                        color="#F2F3F7">
                        {AboutUsDataEn.description3}
                      </BodyDmsans>
                    </>
                  </div>
                </div>

                <div className={styles.aboutMeImage}>
                  <Image
                    src={AboutMe}
                    alt="About Me"
                    width={400}
                    height={400}
                  />
                </div>
              </Group>
            </>
          ) : (
            <Group w={'100%'} spacing={0} style={{ justifyContent: 'center' }}>
              <div className={styles.planetImageMobileContainer}>
                <Image
                  src={AboutMe}
                  alt="About Me"
                  width={388}
                  height={388}
                  className={styles.planetImageMobile}
                />
              </div>
              <div className={styles.planetTextCont}>
                <div className={styles.planetTextCard}>
                  <>
                    <Heading variant={1} color="#F2F3F7">
                      <span style={{ color: '#4178FA', lineHeight: 1.2 }}>
                        {AboutUsDataEn.wolfPlanet}
                      </span>{' '}
                    </Heading>
                    <BodyDmsans
                      variant={1}
                      style={{ marginTop: '15px', textAlign: 'justify' }}
                      color="#F2F3F7">
                      {AboutUsDataEn.description}
                    </BodyDmsans>
                    <BodyDmsans
                      variant={1}
                      style={{ marginTop: '15px', textAlign: 'justify' }}
                      color="#F2F3F7">
                      {AboutUsDataEn.description2}
                    </BodyDmsans>
                    <BodyDmsans
                      variant={1}
                      style={{ marginTop: '15px', textAlign: 'justify' }}
                      color="#F2F3F7">
                      {AboutUsDataEn.description3}
                    </BodyDmsans>
                  </>
                </div>
              </div>
            </Group>
          )}
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
