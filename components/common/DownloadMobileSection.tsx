import React, { useCallback, useEffect, useState } from 'react';
import styles from './DownloadSection.module.scss';
import { Flex, Stack, Transition } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';

import { PlanetList } from 'utils/planet';
import Image from 'next/image';
import { easeInOut, motion, AnimatePresence } from 'framer-motion';
import { MagicMotion } from 'react-magic-motion';
import WolfAvatarBlue from 'public/WolfAvatar/WolfAvatarBlue.png';
import WolfAvatarBlueMobile from 'public/WolfAvatar/WolfAvatarBlueMobile.png';
import PlaystoreEn from 'public/GooglePlayEn.svg';
import AppleEn from 'public/AppleStoreEn.svg';
import PlaystoreCn from 'public/GooglePlayCn.svg';
import AppleCn from 'public/AppleStoreCn.svg';

const DownloadMobileSection = ({ data }: any) => {
  return (
    <>
      <div id="fourth-section" className={styles.containerDownloadSection}>
        <div className={styles.innerContainer}>
          <BodyBold color="#F2F3F7" variant={3} style={{}}>
            {data.headline}
          </BodyBold>
          <Body color="#9198B0" variant={1} style={{ marginTop: 20 }}>
            {data.subheader}
          </Body>
        </div>
        <div className={styles.bottomContainerMobile}>
          <Image
            src={WolfAvatarBlueMobile}
            alt=""
            className={styles.wolfAvatarImageMobile}
          />
          <div className={styles.buttonsContainer}>
            <Flex gap={30} style={{ display: 'flex', flexDirection: 'column' }}>
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

          <Image
            src={WolfAvatarBlueMobile}
            alt=""
            className={styles.wolfAvatarImageMobile}
          />
        </div>
      </div>
    </>
  );
};

export default DownloadMobileSection;
