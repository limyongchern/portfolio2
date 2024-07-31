import { Body, BodyBold, Heading } from 'components/typography';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const FourthMobileSection = ({ data }: any) => {
  return (
    <div id="fourth-section" className={styles.fourthMobileContainer}>
      <div className={styles.fourthInnerContainer}>
        <Image
          src={data.image}
          className={styles.mobilePersonalizedImage}
          alt="wolfavatar"
        />
        <span className={styles.textContainer}>
          <BodyBold color="#F2F3F7" variant={1}>
            {data.title}
          </BodyBold>
          <BodyBold color="#F2F3F7" variant={7} style={{ marginTop: 15 }}>
            {data.headline}
          </BodyBold>
          <Body color="#9198B0" variant={1} style={{ marginTop: 15 }}>
            {data.subheader}
          </Body>
        </span>
      </div>
    </div>
  );
};

export default FourthMobileSection;
