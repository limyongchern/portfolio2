//
import styles from './home.module.scss';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { Body, Heading } from 'components/typography';
import { MagicMotion } from 'react-magic-motion';
import { PauseCircle, PlayCircle } from '@phosphor-icons/react';
import { easeInOut, motion } from 'framer-motion';
import { Carousel, Embla } from '@mantine/carousel';

const SecondMobileSection = ({ data }: any) => {
  const timerLength = 3000;
  const [isTimerPaused, setIsTimerPaused] = useState(false);
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
    if (isTimerPaused) return;
    const timer = setTimeout(() => {
      if (embla) {
        if (embla.canScrollNext()) {
          embla.scrollNext();
        } else {
          embla.scrollTo(0);
        }
      }
    }, timerLength);

    return () => clearTimeout(timer);
  }, [embla, currentPage, isTimerPaused]);

  const isActiveSlide = (index: number) => {
    return index === currentPage;
  };

  const slides = data.cards.map((item: any, index: number) => (
    <Carousel.Slide key={index}>
      {isActiveSlide(index) ? (
        <div className={styles.collapsibleCardMobile} key={index}>
          <Image
            src={item.image}
            className={styles.collapsibleImageMobile}
            alt="wolfavatar"
          />
          {/* <div style={{ marginTop: -145 }}> */}
          <div style={{ marginTop: index === 1 ? -160 : -130, padding: 15 }}>
            {' '}
            <Body
              variant={10}
              color="white"
              className={styles.cardTitleOpenMobile}>
              {item.title}
            </Body>
            <Body
              variant={7}
              color="white"
              className={styles.cardDescription2Mobile}>
              {item.description}
            </Body>
          </div>
        </div>
      ) : (
        <div className={styles.collapsibleCardMobile} key={index}>
          <Image
            src={item.image}
            className={styles.collapsibleImageMobile}
            alt="wolfavatar"
          />

          <Body variant={9} color="white" className={styles.cardTitle2}>
            {item.title}
          </Body>
        </div>
      )}
    </Carousel.Slide>
  ));

  return (
    <div
      className={styles.collapsibleCardSection}
      style={{ backgroundColor: '#272935', overflow: 'hidden' }}>
      <Body
        variant={9}
        color="white"
        style={{ marginBottom: '-250px' }}
        fw={40}>
        {data.headline}
      </Body>
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
          slideSize="10%"
          slideGap={0}
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
          justifyContent: 'space-between',
          marginTop: -270,
          width: 330,
        }}>
        <div></div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
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
        <div style={{ cursor: 'pointer' }}>
          {isTimerPaused ? (
            <PlayCircle
              size={40}
              style={{ color: '#9198B0' }}
              onClick={() => setIsTimerPaused(false)}
            />
          ) : (
            <PauseCircle
              size={40}
              style={{ color: '#9198B0' }}
              onClick={() => setIsTimerPaused(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondMobileSection;
