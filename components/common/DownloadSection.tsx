import React, { useCallback, useEffect, useState } from 'react';
import styles from './DownloadSection.module.scss';
import { Flex, Stack, Transition } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';

import { PlanetList } from 'utils/planet';
import Image from 'next/image';
import { easeInOut, motion, AnimatePresence } from 'framer-motion';
import { MagicMotion } from 'react-magic-motion';
import WolfAvatarBlue from 'public/WolfAvatar/WolfAvatarBlue.png';
import PlaystoreEn from 'public/GooglePlayEn.svg';
import AppleEn from 'public/AppleStoreEn.svg';
import PlaystoreCn from 'public/GooglePlayCn.svg';
import AppleCn from 'public/AppleStoreCn.svg';

const DownloadSectionData = {
  headline: '加入狼星球 - 您的专属Web3投资交流社区!',
  subheader:
    '在这里，您可以发现全新的数字资产创收方式，尽情发挥您的创作才能，并与志同道合的投资者朋友们进行深度交流。只需简单的注册，您就可以完全拥有自己的数字内容资产，获得丰厚的创作回报。让我们一起开启Web3投资新时代，构建专业、活跃的交流社区，共同成就美好的投资未来。',
};

const DownloadSection = () => {
  return (
    <>
      <div id="fourth-section" className={styles.containerDownloadSection}>
        <div className={styles.innerContainer}>
          <Body color="#F2F3F7" variant={9} style={{}}>
            {DownloadSectionData.headline}
          </Body>
          <Body color="#9198B0" variant={1} style={{ marginTop: 20 }}>
            {DownloadSectionData.subheader}
          </Body>
          <div className={styles.bottomContainer}>
            <Image
              src={WolfAvatarBlue}
              alt=""
              className={styles.wolfAvatarImage}
            />
            <div className={styles.buttonsContainer}>
              <Flex
                gap={24}
                style={{ alignItems: 'center', justifyContent: 'center' }}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <Image
                    src={PlaystoreCn}
                    alt="play store"
                    className={styles.downloadImage}
                  />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ backgroundColor: 'transparent', border: 'none' }}>
                  <Image
                    src={AppleCn}
                    alt="apple"
                    className={styles.downloadImage}
                  />
                </motion.button>
              </Flex>
            </div>

            <Image
              src={WolfAvatarBlue}
              alt=""
              className={styles.wolfAvatarImage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadSection;
