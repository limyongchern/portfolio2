import React from 'react';
import styles from './community.module.scss';

import Image from 'next/image';
import { Flex, Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';

const ThirdSection = ({ data }: any) => {
  return (
    <div id="third-section" className={styles.containerThirdSection}>
      <div className={styles.widthContainerThirdSection}>
        <Flex gap={'15.71px'}>
          <div className={styles.cardContainer}>
            <span>
              <BodyBold color="#F2F3F7" variant={7}>
                {data.firstCard.title}
              </BodyBold>
            </span>
            <Body color="#F2F3F7" variant={1}>
              {data.firstCard.description}
            </Body>
          </div>
          <Stack spacing={'15.71px'}>
            <div className={styles.cardSubContainer}>
              <Flex gap={'9.39px'} align={'center'}>
                <Image
                  src={data.secondCard.icon}
                  alt="WolfTooth"
                  className={styles.icon}
                />
                <BodyBold color="#F2F3F7" variant={7}>
                  {data.secondCard.title}
                </BodyBold>
              </Flex>
              <Body color="#F2F3F7" variant={1}>
                {data.secondCard.description}
              </Body>
            </div>
            <div className={styles.cardSubContainer}>
              <Flex gap={'9.39px'} align={'center'}>
                <Image
                  src={data.thirdCard.icon}
                  alt="WolfToken"
                  className={styles.icon}
                />
                <BodyBold color="#F2F3F7" variant={7}>
                  {data.thirdCard.title}
                </BodyBold>
              </Flex>
              <Body color="#F2F3F7" variant={1}>
                {data.thirdCard.description}
              </Body>
            </div>
          </Stack>
        </Flex>
      </div>
    </div>
  );
};

export default ThirdSection;
