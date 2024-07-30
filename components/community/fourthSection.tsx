import React from 'react';
import styles from './community.module.scss';
import { Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';
import Image from 'next/image';

const FourthSection = ({ data }: any) => {
  return (
    <div id="fourth-section" className={styles.fourthContainer}>
      <div className={styles.widthContainer}>
        <Image
          src={data.image}
          className={styles.mobilePersonalizedImage}
          alt="wolfavatar"
        />
        <span
          style={{
            textAlign: 'start',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
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

export default FourthSection;
