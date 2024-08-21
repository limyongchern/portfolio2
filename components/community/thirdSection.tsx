import React from 'react';
import styles from './community.module.scss';
import { useRouter } from 'next/router';

import Image from 'next/image';
import { Flex, Stack } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';

const ThirdSection = ({ data }: any) => {
  const router = useRouter();
  return (
    <div id="third-section" className={styles.containerThirdSection}>
      <div className={styles.widthContainerThirdSection}>
        <Flex gap={'15.71px'}>
          <div className={styles.cardContainer}>
            <span>
              {router.locale === 'en' ? (
                <Heading color="#F2F3F7" variant={1}>
                  {data.firstCard.title}
                </Heading>
              ) : (
                <BodyBold color="#F2F3F7" variant={7}>
                  {data.firstCard.title}
                </BodyBold>
              )}
            </span>
            {router.locale === 'en' ? (
              <BodyDmsans
                color="#F2F3F7"
                variant={2}
                style={{ textAlign: 'justify' }}>
                {data.firstCard.description}
              </BodyDmsans>
            ) : (
              <Body color="#F2F3F7" variant={1}>
                {data.firstCard.description}
              </Body>
            )}
          </div>
          <Stack spacing={'15.71px'}>
            <div className={styles.cardSubContainer}>
              <Flex gap={'9.39px'} align={'center'}>
                <Image
                  src={data.secondCard.icon}
                  alt="WolfTooth"
                  className={styles.icon}
                />
                {router.locale === 'en' ? (
                  <Heading color="#F2F3F7" variant={1}>
                    {data.secondCard.title}
                  </Heading>
                ) : (
                  <BodyBold color="#F2F3F7" variant={7}>
                    {data.secondCard.title}
                  </BodyBold>
                )}
              </Flex>
              {router.locale === 'en' ? (
                <BodyDmsans
                  color="#F2F3F7"
                  variant={2}
                  style={{ textAlign: 'justify' }}>
                  {data.secondCard.description}
                </BodyDmsans>
              ) : (
                <Body color="#F2F3F7" variant={1}>
                  {data.secondCard.description}
                </Body>
              )}
            </div>
            <div className={styles.cardSubContainer}>
              <Flex gap={'9.39px'} align={'center'}>
                <Image
                  src={data.thirdCard.icon}
                  alt="WolfToken"
                  className={styles.icon}
                />
                {router.locale === 'en' ? (
                  <Heading color="#F2F3F7" variant={1}>
                    {data.thirdCard.title}
                  </Heading>
                ) : (
                  <BodyBold color="#F2F3F7" variant={7}>
                    {data.thirdCard.title}
                  </BodyBold>
                )}
              </Flex>
              {router.locale === 'en' ? (
                <BodyDmsans
                  color="#F2F3F7"
                  variant={2}
                  style={{ textAlign: 'justify' }}>
                  {data.thirdCard.description}
                </BodyDmsans>
              ) : (
                <Body color="#F2F3F7" variant={1}>
                  {data.thirdCard.description}
                </Body>
              )}
            </div>
          </Stack>
        </Flex>
      </div>
    </div>
  );
};

export default ThirdSection;
