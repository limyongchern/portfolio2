import React from 'react';
import { useRouter } from 'next/router';
import styles from './DownloadSection.module.scss';
import { Flex } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';

import Image from 'next/image';
import WolfAvatarBlueMobile from 'public/WolfAvatar/WolfAvatarBlueMobile.png';
import PlaystoreCn from 'public/Download/Button-GoogleplayCn.svg';
import AppleCn from 'public/Download/Button-AppstoreCn.svg';
import PlaystoreEn from 'public/Download/Button-GoogleplayEn.svg';
import AppleEn from 'public/Download/Button-AppstoreEn.svg';
import WolfTokensImage from 'public/Download/DownloadWolfTokens.png';

const DownloadSectionData = {
  headline: '加入狼星球 - 您的专属Web3投资交流社区!',
  subheader:
    '在这里，您可以发现全新的数字资产创收方式，尽情发挥您的创作才能，并与志同道合的投资者朋友们进行深度交流。只需简单的注册，您就可以完全拥有自己的数字内容资产，获得丰厚的创作回报。让我们一起开启Web3投资新时代，构建专业、活跃的交流社区，共同成就美好的投资未来。',
};

const DownloadSectionDataEn = {
  headline:
    'Join the Wolf Planet community - your premier Web3 investment discussion and networking platform.',
  subheader: `As part of the Wolf Planet community, you'll discover new ways to generate income from digital assets, fully unleash your creative potential, and engage in meaningful discussions with like-minded investors. By simply registering, you can own your digital content assets and earn rewarding returns on your creations. Together, let's usher in a new era of Web3 investing - one built upon a vibrant, professional community unified in pursuit of a brighter financial future.`,
};

const DownloadMobileSection = () => {
  const router = useRouter();
  return (
    <>
      <div id="fourth-section" className={styles.containerDownloadSection}>
        <Image
          src={WolfTokensImage}
          alt="apple"
          className={styles.wolfTokensImage}
        />
        <div className={styles.innerContainer}>
          {router.locale === 'en' ? (
            <>
              <Heading color="#F2F3F7" variant={2} style={{}}>
                {DownloadSectionDataEn.headline}
              </Heading>
              <BodyDmsans color="#9198B0" variant={1} style={{ marginTop: 20 }}>
                {DownloadSectionDataEn.subheader}
              </BodyDmsans>
            </>
          ) : (
            <>
              <BodyBold color="#F2F3F7" variant={3} style={{}}>
                {DownloadSectionData.headline}
              </BodyBold>
              <Body color="#9198B0" variant={1} style={{ marginTop: 20 }}>
                {DownloadSectionData.subheader}
              </Body>
            </>
          )}
        </div>
        <div className={styles.bottomContainerMobile}>
          <div className={styles.buttonsContainer}>
            <Flex
              gap={30}
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 50,
              }}>
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
        </div>
      </div>
    </>
  );
};

export default DownloadMobileSection;
