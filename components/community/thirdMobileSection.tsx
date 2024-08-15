import React from 'react';
import styles from './community.module.scss';
import WolfTooth from '../../public/WolfToken.svg';
import WolfToken from '../../public/WolfCoin.svg';
import Image from 'next/image';
import { Flex, Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';

const ThirdMobileSection = ({ data }: any) => {
  return (
    <div id="third-section" className={styles.containerThirdMobileSection}>
      <div className={styles.widthContainerThirdMobileSection}>
        <div className={styles.cardContainer}>
          <span>
            <BodyBold color="#F2F3F7" variant={3}>
              {data.firstCard.title}
            </BodyBold>
          </span>
          <Body color="#F2F3F7" variant={1}>
            {data.firstCard.description}
          </Body>
        </div>
        <div className={styles.cardSubMobileContainer}>
          <Flex gap={'9.39px'} align={'center'}>
            <Image
              src={data.secondCard.icon}
              alt="WolfTooth"
              className={styles.icon}
            />
            <BodyBold color="#F2F3F7" variant={4}>
              {data.secondCard.title}
            </BodyBold>
          </Flex>
          <Body color="#F2F3F7" variant={1}>
            {data.secondCard.description}
          </Body>
        </div>
        <div className={styles.cardSubMobileContainer}>
          <Flex gap={'9.39px'} align={'center'}>
            <Image
              src={data.thirdCard.icon}
              alt="WolfToken"
              className={styles.icon}
            />
            <BodyBold color="#F2F3F7" variant={4}>
              {data.thirdCard.title}
            </BodyBold>
          </Flex>
          <Body color="#F2F3F7" variant={1}>
            {data.thirdCard.description}
          </Body>
        </div>
      </div>
    </div>
  );
};

export default ThirdMobileSection;
