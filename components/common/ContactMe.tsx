import { Flex } from '@mantine/core';
import { Body } from 'components/typography';
import styles from './ContactMe.module.scss';

import { Envelope } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

const contactMeData = {
  headline: 'Contact Me',
  subheader: 'Click the envelope to contact me!',
};

const ContactMe = () => {
  return (
    <>
      <div id="fourth-section" className={styles.containerDownloadSection}>
        <div className={styles.innerContainer}>
          <>
            <Body color="#F2F3F7" variant={9} style={{ marginTop: 50 }}>
              {contactMeData.headline}
            </Body>
            <Body color="#9198B0" variant={1} style={{ marginTop: 20 }}>
              {contactMeData.subheader}
            </Body>
          </>

          <div className={styles.bottomContainer}>
            <div className={styles.buttonsContainer}>
              <Flex
                gap={24}
                style={{ alignItems: 'center', justifyContent: 'center' }}>
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
      </div>
    </>
  );
};

export default ContactMe;
