import { Flex, Grid, Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const SecondMobileSection = ({ data }: any) => {
  return (
    <div id="second-section" className={styles.containerSecondMobileSection}>
      <div className={styles.widthContainerSecondMobileSection}>
        <span style={{ marginBottom: '24px' }}>
          <BodyBold color="#F2F3F7" variant={3}>
            {data.headline}
          </BodyBold>
        </span>
        <Body
          color="#9198B0"
          variant={1}
          fs={'18px'}
          style={{ textAlign: 'center', marginBottom: '36px' }}>
          {data.subheader}
        </Body>

        {data.cards.map((card: any, index: number) => (
          <>
            <Image
              src={card.image}
              alt="wolfavatar"
              className={`${styles[`daoCardImagesMobile${index + 1}`]}`}
            />
            <div className={styles.cardDarkMobileContainer} key={index}>
              <BodyBold color="#F2F3F7" variant={7}>
                {card.title}
              </BodyBold>
              <Body color="#9198B0" variant={1}>
                {card.description}
              </Body>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SecondMobileSection;
