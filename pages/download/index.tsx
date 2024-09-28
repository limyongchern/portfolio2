import { Flex } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Image from 'next/image';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { useEffect, useState } from 'react';
import PlaystoreCn from 'public/Download/Button-GoogleplayCn.svg';
import AppleCn from 'public/Download/Button-AppstoreCn.svg';
import PlaystoreEn from 'public/Download/Button-GoogleplayEn.svg';
import AppleEn from 'public/Download/Button-AppstoreEn.svg';
import DownloadMobileImage from 'public/Download/DownloadMobileImage.png';
import { motion } from 'framer-motion';

const data = {
  headline: '加入 Wolf Planet 星球，开启您的全球投资之旅！',
  subheader: '立即下载 Wolf Planet App',
  googlePlayButton: PlaystoreCn,
  appStoreButton: AppleCn,
  downloadMobileImage: DownloadMobileImage,
};

const dataEn = {
  headline:
    'Join the WolfPlanet, and embark on your global investment journey.',
  subheader: 'Download WolfPlanet APP',
  googlePlayButton: PlaystoreEn,
  appStoreButton: AppleEn,
  downloadMobileImage: DownloadMobileImage,
};

const Download = () => {
  const router = useRouter();
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
  return (
    <>
      <div id="first-section" className={styles.container}>
        <div className={styles.widthContainer}>
          <span
            style={{
              textAlign: isMobile ? 'center' : 'start',
              marginBottom: isMobile ? 0 : 100,
              marginTop: isMobile ? 0 : 0,
            }}>
            {router.locale === 'en' ? (
              <>
                <Heading
                  color="#F2F3F7"
                  variant={isMobile ? 2 : 1}
                  style={{ marginTop: 15 }}>
                  {dataEn.headline}
                </Heading>
                <BodyDmsans
                  color="#F2F3F7"
                  variant={isMobile ? 1 : 2}
                  style={{ marginTop: 15 }}>
                  {dataEn.subheader}
                </BodyDmsans>
              </>
            ) : (
              <>
                <BodyBold color="#F2F3F7" variant={7} style={{ marginTop: 15 }}>
                  {data.headline}
                </BodyBold>
                <Body color="#F2F3F7" variant={8} style={{ marginTop: 15 }}>
                  {data.subheader}
                </Body>
              </>
            )}

            {!isMobile ? (
              <div className={styles.buttonsContainer}>
                <Flex gap={24} style={{ marginLeft: -5 }}>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                    }}>
                    <Image
                      src={router.locale === 'en' ? PlaystoreEn : PlaystoreCn}
                      alt="play store"
                      className={styles.downloadImage}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                    }}>
                    <Image
                      src={router.locale === 'en' ? AppleEn : AppleCn}
                      alt="apple"
                      className={styles.downloadImage}
                    />
                  </motion.button>
                </Flex>
              </div>
            ) : (
              <div className={styles.buttonsContainer}>
                <Flex
                  gap={30}
                  style={{ display: 'flex', flexDirection: 'column' }}>
                  <Image
                    src={router.locale === 'en' ? PlaystoreEn : PlaystoreCn}
                    alt="play store"
                    className={styles.downloadImage}
                  />

                  <Image
                    src={router.locale === 'en' ? AppleEn : AppleCn}
                    alt="apple"
                    className={styles.downloadImage}
                  />
                </Flex>
              </div>
            )}
          </span>
          <Image
            src={data.downloadMobileImage}
            className={styles.mobileIllustration}
            alt="wolfavatar"
          />
        </div>
      </div>
    </>
  );
};

export default Download;
