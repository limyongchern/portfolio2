import React, { useCallback, useEffect, useState } from 'react';
import styles from './fifthSection.module.scss';

import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';
import { Carousel, Embla } from '@mantine/carousel';
import { Body, BodyBold, Heading } from 'components/typography';
import { PlanetList } from 'utils/planet';

const FifthMobileSection = ({ data }: any) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const handleScroll = useCallback(() => {
    if (!embla) return;
    setCurrentPage(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla, handleScroll]);

  useEffect(() => {
    console.log('Current page:', currentPage);
  }, [currentPage]);

  const isActiveSlide = (index: number) => {
    return index === currentPage;
  };

  const slides = data.cards.map((item: any, index: number) => (
    // const slides = PlanetList.map((item: any, index: number) => (
    <Carousel.Slide key={index}>
      {isActiveSlide(index) ? (
        <div style={{ paddingTop: '10px' }}>
          <div className={styles.planetMobileCard}>
            <div className={styles.widthPlanetMobileCard}>
              <BodyBold
                style={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '0px 50px',
                }}
                variant={6}
                color={'#F2F3F7'}>
                {item.title}
              </BodyBold>
              <Body
                style={{ textAlign: 'center', marginTop: '10px' }}
                variant={2}
                color={'#9198B0'}>
                {item.description}
              </Body>
            </div>
            <Image
              src={item.image}
              alt=""
              className={styles.activeImageMobile}
            />
          </div>
        </div>
      ) : (
        <div className={styles.planetCardMobileDeselect}>
          <div className={styles.widthPlanetMobileCard}>
            <BodyBold
              style={{
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0px 50px',
              }}
              variant={8}
              color={'#F2F3F7'}>
              {item.title}
            </BodyBold>
            <div style={{ height: '10px' }}>
              <Body
                style={{ textAlign: 'center', marginTop: '15px' }}
                variant={4}
                color={'#9198B0'}>
                {item.description}
              </Body>
            </div>
          </div>
          <Image
            src={item.image}
            alt=""
            className={styles.nonActiveImageMobile}
          />
        </div>
      )}
    </Carousel.Slide>
  ));
  return (
    <div id="fourth-section" className={styles.containerFifthMobileSection}>
      <BodyBold
        variant={3}
        color="white"
        style={{ padding: '0px 70px', textAlign: 'center' }}>
        {data.headline}
      </BodyBold>

      <motion.div
        className={styles.carouselContainer}
        initial={{ x: -100, opacity: 1 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: easeInOut },
        }}
        exit={{
          x: -100,
          opacity: 0,
          transition: { duration: 0.5, ease: easeInOut },
        }}>
        <Carousel
          // loop
          slideSize="20%"
          slideGap={20}
          initialSlide={0}
          className={styles.carouselStyles}
          getEmblaApi={setEmbla}
          withControls={false}>
          {slides}
        </Carousel>
      </motion.div>

      <div
        style={{
          display: 'flex',
          gap: 10,
          paddingTop: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.cards.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              height: 12,
              width: 12,
              borderRadius: 100,
              backgroundColor: index === currentPage ? '#9198B0' : '#3E404E',
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default FifthMobileSection;
