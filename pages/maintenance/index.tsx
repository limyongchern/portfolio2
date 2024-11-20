import { Flex } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import Image from 'next/image';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';

import { isMobile } from 'react-device-detect';

const Maintenance = () => {
  const router = useRouter();

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
                  {'Website under maintenance'}
                </Heading>
              </>
            ) : (
              <>
                <BodyBold color="#F2F3F7" variant={7} style={{ marginTop: 15 }}>
                  {'正在维护中'}
                </BodyBold>
              </>
            )}
          </span>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
