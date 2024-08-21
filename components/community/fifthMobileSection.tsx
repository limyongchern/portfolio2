import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const FifthMobileSection = ({ data }: any) => {
  const router = useRouter();
  return (
    <div id="first-section" className={styles.fifthMobileContainer}>
      <div className={styles.widthContainer}>
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
        <Image
          src={data.image}
          className={styles.communityIllustration1}
          alt="wolfavatar"
        />
      </div>
    </div>
  );
};

export default FifthMobileSection;
