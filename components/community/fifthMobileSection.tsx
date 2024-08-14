import { Body, BodyBold, Heading } from 'components/typography';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const FifthMobileSection = ({ data }: any) => {
  return (
    <div id="first-section" className={styles.fifthMobileContainer}>
      <div className={styles.widthContainer}>
        <span className={styles.textContainer}>
          <BodyBold color="#F2F3F7" variant={7} style={{ marginTop: 15 }}>
            {data.headline}
          </BodyBold>
          <Body color="#9198B0" variant={1} style={{ marginTop: 15 }}>
            {data.subheader}
          </Body>
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
