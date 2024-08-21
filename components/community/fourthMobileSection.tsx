import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const FourthMobileSection = ({ data }: any) => {
  const router = useRouter();
  return (
    <div id="fourth-section" className={styles.fourthMobileContainer}>
      <div className={styles.fourthInnerContainer}>
        <Image
          src={data.image}
          className={styles.mobilePersonalizedImage}
          alt="wolfavatar"
        />
        <span className={styles.textContainer}>
          {router.locale === 'en' ? (
            <>
              <Heading color="#F2F3F7" variant={2} style={{ marginTop: 15 }}>
                {data.headline}
              </Heading>
              <BodyDmsans
                color="#9198B0"
                variant={1}
                style={{ marginTop: 15, textAlign: 'justify' }}>
                {data.subheader}
              </BodyDmsans>
            </>
          ) : (
            <>
              <BodyBold color="#F2F3F7" variant={7} style={{ marginTop: 15 }}>
                {data.headline}
              </BodyBold>
              <Body color="#9198B0" variant={1} style={{ marginTop: 15 }}>
                {data.subheader}
              </Body>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default FourthMobileSection;
