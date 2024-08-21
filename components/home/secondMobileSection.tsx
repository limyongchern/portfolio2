//
import styles from './home.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { PauseCircle, PlayCircle } from '@phosphor-icons/react';
import { easeInOut, motion } from 'framer-motion';
import { Carousel, Embla } from '@mantine/carousel';

const SecondMobileSection = ({ data }: any) => {
  const router = useRouter();
  return (
    <div
      className={styles.collapsibleCardSection}
      style={{ backgroundColor: '#272935', overflow: 'hidden' }}>
      {router.locale === 'en' ? (
        <Heading
          variant={2}
          color="white"
          style={{
            marginBottom: '50px',
            marginTop: -25,
            lineHeight: 1,
            textAlign: 'center',
          }}>
          {data.headline}
        </Heading>
      ) : (
        <BodyBold
          variant={3}
          color="white"
          style={{ marginBottom: '50px', marginTop: -25 }}>
          {data.headline}
        </BodyBold>
      )}

      {data.cards.map((item: any, index: number) => (
        <>
          <Image
            src={item.image}
            className={styles.secondSectionImageMobile}
            alt="wolfavatar"
          />
          <div
            style={{
              display: 'flex',
              height: 25,
              width: '80%',
              // marginTop: -70,
            }}>
            {router.locale === 'en' ? (
              <BodyDmsans
                variant={5}
                color="white"
                style={{
                  marginBottom: 40,
                  // textAlign: 'center',
                  display: 'inline-block',
                  alignSelf: 'flex-end',
                }}>
                {item.description}
              </BodyDmsans>
            ) : (
              <BodyBold
                variant={9}
                color="white"
                style={{
                  marginBottom: 40,
                  // textAlign: 'center',
                  display: 'inline-block',
                  alignSelf: 'flex-end',
                }}>
                {item.description}
              </BodyBold>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default SecondMobileSection;
