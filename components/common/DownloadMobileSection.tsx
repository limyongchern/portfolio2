import React from 'react';
import styles from './DownloadSection.module.scss';
import { Flex } from '@mantine/core';
import { Body, BodyBold } from 'components/typography';

import Image from 'next/image';
import WolfAvatarBlueMobile from 'public/WolfAvatar/WolfAvatarBlueMobile.png';
import PlaystoreEn from 'public/GooglePlayEn.svg';
import AppleEn from 'public/AppleStoreEn.svg';
import PlaystoreCn from 'public/GooglePlayCn.svg';
import AppleCn from 'public/AppleStoreCn.svg';

const DownloadSectionData = {
  headline: '加入狼星球 - 您的专属Web3投资交流社区!',
  subheader:
    '在这里，您可以发现全新的数字资产创收方式，尽情发挥您的创作才能，并与志同道合的投资者朋友们进行深度交流。只需简单的注册，您就可以完全拥有自己的数字内容资产，获得丰厚的创作回报。让我们一起开启Web3投资新时代，构建专业、活跃的交流社区，共同成就美好的投资未来。',
};

const DownloadMobileSection = () => {
  return (
    <>
      <div id="fourth-section" className={styles.containerDownloadSection}>
        <div className={styles.innerContainer}>
          <BodyBold color="#F2F3F7" variant={3} style={{}}>
            {DownloadSectionData.headline}
          </BodyBold>
          <Body color="#9198B0" variant={1} style={{ marginTop: 20 }}>
            {DownloadSectionData.subheader}
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
