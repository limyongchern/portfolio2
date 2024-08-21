import React, { useCallback, useEffect, useState } from 'react';
import styles from './planetSection.module.scss';
import { useRouter } from 'next/router';

import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';
import { Carousel, Embla } from '@mantine/carousel';
import { PlanetList } from 'utils/planet';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';

const FourthMobileSection = ({ data }: any) => {
  const router = useRouter();
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
        <div style={{ paddingTop: '10px' }}>
          <div className={styles.planetMobileCard}>
            <div className={styles.widthPlanetMobileCard}>
              {router.locale === 'en' ? (
                <Heading
                  style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '0px 10px',
                  }}
                  variant={4}
                  color={'#F2F3F7'}>
                  {item.titleEn}
                </Heading>
              ) : (
                <BodyBold
                  style={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '0px 50px',
                  }}
                  variant={4}
                  color={'#F2F3F7'}>
                  {item.title}
                </BodyBold>
              )}

              <div style={{ height: '70px' }}>
                {router.locale === 'en' ? (
                  <BodyDmsans
                    style={{ textAlign: 'center', marginTop: '29.42px' }}
                    variant={6}
                    color={'#F2F3F7'}>
                    {item.descriptionEn}
                  </BodyDmsans>
                ) : (
                  <Body
                    style={{ textAlign: 'center', marginTop: '29.42px' }}
                    variant={1}
                    color={'#F2F3F7'}>
                    {item.description}
                  </Body>
                )}
              </div>
            </div>
            <Image
              src={item.planetFull}
              alt=""
              className={styles.planetMobileImage}
            />
          </div>
        </div>
      ) : (
        <div className={styles.planetCardMobileDeselect}>
          <div className={styles.widthPlanetMobileCard}>
            {router.locale === 'en' ? (
              <Heading
                style={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '0px 10px',
                }}
                variant={4}
                color={'#F2F3F7'}>
                {item.titleEn}
              </Heading>
            ) : (
              <Body
                style={{ textAlign: 'center' }}
                variant={6}
                color={'#F2F3F7'}
                fs={'36px'}
                fw={600}
                lh={'73.548px'}>
                {item.title}:
              </Body>
            )}

            <div style={{ height: '70px' }}>
              {router.locale === 'en' ? (
                <BodyDmsans
                  style={{ textAlign: 'center', marginTop: '29.42px' }}
                  variant={6}
                  color={'#F2F3F7'}>
                  {item.descriptionEn}
                </BodyDmsans>
              ) : (
                <Body
                  style={{ textAlign: 'center', marginTop: '29.42px' }}
                  variant={1}
                  color={'#F2F3F7'}>
                  {item.description}
                </Body>
              )}
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
    <div id="fourth-section" className={styles.containerPlanetMobileSection}>
      {router.locale === 'en' ? (
        <>
          <Heading
            variant={2}
            color="white"
            style={{ padding: '0px 50px', textAlign: 'center' }}>
            {data.headline}
          </Heading>
          <BodyDmsans
            variant={1}
            color="#9198B0"
            style={{
              padding: '20px 50px',
              textAlign: 'center',
              lineHeight: '2rem',
            }}>
            {data.subheader}
          </BodyDmsans>
        </>
      ) : (
        <>
          <BodyBold
            variant={3}
            color="white"
            style={{ padding: '0px 70px', textAlign: 'center' }}>
            {data.headline}
          </BodyBold>
          <Body
            variant={1}
            color="#9198B0"
            style={{
              padding: '20px 50px',
              textAlign: 'center',
              lineHeight: '2.5rem',
            }}>
            {data.subheader}
          </Body>
        </>
      )}

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
          paddingTop: 45,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {PlanetList.map((item: any, index: number) => (
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

export default FourthMobileSection;
