import React, { useCallback, useEffect, useState } from 'react';
import styles from './planetSection.module.scss';

import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';
import { Carousel, Embla } from '@mantine/carousel';
import { PlanetList } from 'utils/planet';
import { Body, Heading } from 'components/typography';

const FourthMobileSection = () => {
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

  const slides = PlanetList.map((item, index) => (
    <Carousel.Slide key={index}>
      {isActiveSlide(index) ? (
        <div className={styles.planetMobileCard}>
          <div className={styles.widthPlanetMobileCard}>
            <Body
              style={{ textAlign: 'center' }}
              variant={6}
              color={'#F2F3F7'}
              fs={'36px'}
              fw={600}
              lh={'73.548px'}>
              {item.name}:
            </Body>
            <Body
              style={{ textAlign: 'center' }}
              variant={6}
              color={'#F2F3F7'}
              fs={'36px'}
              fw={600}
              lh={'73.548px'}>
              {item.nameDescription}
            </Body>
            <div style={{ height: '70px' }}>
              <Body
                style={{ textAlign: 'center', marginTop: '29.42px' }}
                variant={6}
                color={'#9198B0'}
                fs={'18px'}
                fw={700}
                lh={'normal'}>
                {item.desctiption}
              </Body>
            </div>
          </div>
          <Image
            src={item.planetFull}
            alt=""
            className={styles.planetMobileImage}
          />
        </div>
      ) : (
        <div className={styles.planetCardMobileDiselect}>
          <div className={styles.widthPlanetMobileCard}>
            <Body
              style={{ textAlign: 'center' }}
              variant={6}
              color={'#F2F3F7'}
              fs={'36px'}
              fw={600}
              lh={'73.548px'}>
              {item.name}:
            </Body>
            <Body
              style={{ textAlign: 'center' }}
              variant={6}
              color={'#F2F3F7'}
              fs={'36px'}
              fw={600}
              lh={'73.548px'}>
              {item.nameDescription}
            </Body>
            <div style={{ height: '70px' }}>
              <Body
                style={{ textAlign: 'center', marginTop: '29.42px' }}
                variant={6}
                color={'#9198B0'}
                fs={'18px'}
                fw={700}
                lh={'normal'}>
                {item.desctiption}
              </Body>
            </div>
          </div>
          <Image
            src={item.planetFull}
            alt=""
            className={styles.planetMobileImage}
          />
        </div>
      )}
    </Carousel.Slide>
  ));
  return (
    <div id="fourth-section" className={styles.containerFourthMobileSection}>
      <span
        style={{
          textAlign: 'center',
          marginBottom: '24px',
          padding: '0 32px',
        }}>
        <Body
          color="#F2F3F7"
          variant={6}
          fw={700}
          lh={'normal'}
          fs={'40px'}
          style={{ display: 'inline' }}>
          七星奇遇：探索{' '}
        </Body>
        <Heading
          color="#F2F3F7"
          variant={6}
          fw={400}
          lh={'normal'}
          fs={'40px'}
          style={{ display: 'inline' }}>
          Wolf Planet{' '}
        </Heading>
        <Body
          color="#F2F3F7"
          variant={6}
          fw={700}
          lh={'normal'}
          fs={'40px'}
          style={{ display: 'inline' }}>
          星球
        </Body>
      </span>
      <Body
        color="#9198B0"
        variant={6}
        fw={600}
        lh={'normal'}
        fs={'18px'}
        style={{
          textAlign: 'center',
          marginBottom: '24px',
          padding: '0 32px',
        }}>
        Wolf Planet
        星球是一个由七个独具特色的星球组成的神秘社区，每个星球都拥有独特的属性和玩法。
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
          loop
          slideSize="20%"
          slideGap={20}
          initialSlide={0}
          className={styles.carouselStyles}
          getEmblaApi={setEmbla}
          withControls={false}>
          {slides}
        </Carousel>
      </motion.div>
    </div>
  );
};

export default FourthMobileSection;
