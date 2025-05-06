import { Flex } from '@mantine/core';
import { Body, BodyBold } from 'components/typography';
import { useRouter } from 'next/router';
import styles from './ContactMe.module.scss';

import { Envelope } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const contactMeData = {
  headline: 'Contact Me',
  subheader: 'Click the envelope to contact me!',
};

const DownloadMobileSection = () => {
  return (
    <>
      <div id="fourth-section" className={styles.containerDownloadSection}>
        <div className={styles.innerContainer}>
          <>
            <BodyBold color="#F2F3F7" variant={3} style={{}}>
              {contactMeData.headline}
            </BodyBold>
            <Body color="#9198B0" variant={1} style={{ marginTop: 20 }}>
              {contactMeData.subheader}
            </Body>
          </>
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
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.homeHeroMascot}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                onClick={() => {
                  window.location.href = 'mailto:yongchern7@gmail.com';
                }}>
                <Envelope
                  width={40}
                  height={40}
                  color="#F2F3F7"
                  cursor={'pointer'}
                />
              </motion.button>
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadMobileSection;
