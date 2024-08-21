import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';
import { Flex } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { useRouter } from 'next/router';

const ThirdMobileSection = ({ data }: any) => {
  const router = useRouter();
  return (
    <div id="third-section" className={styles.containerThirdMobileSection}>
      <div className={styles.widthContainerThirdMobileSection}>
        <div className={styles.cardContainer}>
          <span>
            {router.locale === 'en' ? (
              <Heading color="#F2F3F7" variant={2}>
                {data.firstCard.title}
              </Heading>
            ) : (
              <BodyBold color="#F2F3F7" variant={3}>
                {data.firstCard.title}
              </BodyBold>
            )}
          </span>
          {router.locale === 'en' ? (
            <BodyDmsans
              color="#F2F3F7"
              variant={1}
              style={{ textAlign: 'justify' }}>
              {data.firstCard.description}
            </BodyDmsans>
          ) : (
            <Body color="#F2F3F7" variant={1}>
              {data.firstCard.description}
            </Body>
          )}
        </div>
        <div className={styles.cardSubMobileContainer}>
          <Flex gap={'9.39px'} align={'center'}>
            <Image
              src={data.secondCard.icon}
              alt="WolfTooth"
              className={styles.icon}
            />
            {router.locale === 'en' ? (
              <Heading color="#F2F3F7" variant={2}>
                {data.secondCard.title}
              </Heading>
            ) : (
              <BodyBold color="#F2F3F7" variant={4}>
                {data.secondCard.title}
              </BodyBold>
            )}
          </Flex>
          {router.locale === 'en' ? (
            <BodyDmsans
              color="#F2F3F7"
              variant={1}
              style={{ textAlign: 'justify' }}>
              {data.secondCard.description}
            </BodyDmsans>
          ) : (
            <Body color="#F2F3F7" variant={1}>
              {data.secondCard.description}
            </Body>
          )}
        </div>
        <div className={styles.cardSubMobileContainer}>
          <Flex gap={'9.39px'} align={'center'}>
            <Image
              src={data.thirdCard.icon}
              alt="WolfToken"
              className={styles.icon}
            />
            {router.locale === 'en' ? (
              <Heading color="#F2F3F7" variant={2}>
                {data.thirdCard.title}
              </Heading>
            ) : (
              <BodyBold color="#F2F3F7" variant={4}>
                {data.thirdCard.title}
              </BodyBold>
            )}
          </Flex>
          {router.locale === 'en' ? (
            <BodyDmsans
              color="#F2F3F7"
              variant={1}
              style={{ textAlign: 'justify' }}>
              {data.thirdCard.description}
            </BodyDmsans>
          ) : (
            <Body color="#F2F3F7" variant={1}>
              {data.thirdCard.description}
            </Body>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdMobileSection;
