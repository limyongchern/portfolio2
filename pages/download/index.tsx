import { Flex, Stack } from '@mantine/core';
import styles from './index.module.scss';
import Playstore from 'public/playstore.png';
import Apple from 'public/apple.png';
import Image from 'next/image';
import { Body, BodyBold, Heading } from 'components/typography';
import Sample from 'public/Cards-Landing.png';
import Button from 'components/button';
import Download2 from 'public/Download2.png';
import { PencilLine, Phone, PhoneCall, Star } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import FirstSection from 'components/download/firstSection';
import SecondSection from 'components/download/secondSection';
import PlaystoreCn from 'public/GooglePlayCn.svg';
import AppleCn from 'public/AppleStoreCn.svg';
import DownloadMobileImage from 'public/Download/DownloadMobileImage.png';
import { motion } from 'framer-motion';

const data = {
  headline: '加入 Wolf Planet 星球，开启您的全球投资之旅！',
  subheader: '立即下载 Wolf Planet App',
  googlePlayButton: PlaystoreCn,
  appStoreButton: AppleCn,
  downloadMobileImage: DownloadMobileImage,
};

const Download = () => {
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
      <div id="first-section" className={styles.container}>
        <div className={styles.widthContainer}>
          <span
            style={{
              textAlign: isMobile ? 'center' : 'start',
              marginBottom: 100,
            }}>
            <BodyBold color="#F2F3F7" variant={7} style={{ marginTop: 15 }}>
              {data.headline}
            </BodyBold>
            <Body color="#9198B0" variant={8} style={{ marginTop: 15 }}>
              {data.subheader}
            </Body>

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
                      src={PlaystoreCn}
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
                      src={AppleCn}
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
                    src={PlaystoreCn}
                    alt="play store"
                    className={styles.downloadImage}
                  />

                  <Image
                    src={AppleCn}
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
