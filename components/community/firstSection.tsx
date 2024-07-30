import React from 'react';
import styles from './community.module.scss';
import { Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';
import Image from 'next/image';

const FirstSection = ({ data }: any) => {
  return (
    <div id="first-section" className={styles.container}>
      <div className={styles.widthContainer}>
        <span style={{ textAlign: 'start' }}>
          <BodyBold color="#F2F3F7" variant={1}>
            {data.title}
          </BodyBold>
          <BodyBold color="#F2F3F7" variant={7} style={{ marginTop: 15 }}>
            {data.headline}
          </BodyBold>
          <Body color="#9198B0" variant={1} style={{ marginTop: 15 }}>
            {data.description}
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

export default FirstSection;
