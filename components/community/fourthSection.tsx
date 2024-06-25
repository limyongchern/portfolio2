import React, { useCallback, useEffect, useState } from 'react';
import styles from '../../styles/pages/community/index.module.scss';
import { Flex, Stack, Transition } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import { Carousel, Embla } from '@mantine/carousel';
import Planet1 from '../../public/Planet/Planet_1.png';
import Planet2 from '../../public/Planet/Planet_2.png';
import Planet3 from '../../public/Planet/Planet_3.png';
import Planet4 from '../../public/Planet/Planet_4.png';
import Planet5 from '../../public/Planet/Planet_5.png';
import Planet6 from '../../public/Planet/Planet_6.png';
import Planet7 from '../../public/Planet/Planet_7.png';
import Planet1Big from '../../public/Planet/BigPlanet_1.png';
import Planet2Big from '../../public/Planet/BigPlanet_2.png';
import Planet3Big from '../../public/Planet/BigPlanet_3.png';
import Planet4Big from '../../public/Planet/BigPlanet_4.png';
import Planet5Big from '../../public/Planet/BigPlanet_5.png';
import Planet6Big from '../../public/Planet/BigPlanet_6.png';
import Planet7Big from '../../public/Planet/BigPlanet_7.png';
import WholePlanet1 from '../../public/Planet/wholeplanet1.png';
import WholePlanet2 from '../../public/Planet/wholeplanet2.png';
import WholePlanet3 from '../../public/Planet/wholeplanet3.png';
import WholePlanet4 from '../../public/Planet/wholeplanet4.png';
import WholePlanet5 from '../../public/Planet/wholeplanet5.png';
import WholePlanet6 from '../../public/Planet/wholeplanet8.png';
import WholePlanet7 from '../../public/Planet/wholeplanet7.png';
import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';

const FourthSection = () => {
  const [activePlanet, setActivePlanet] = useState<number>(1);
  const [transitioning, setTransitioning] = useState<boolean>(true);
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  //MOBILE AND DESKTOP
  const [isTablet, setIsTablet] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 1280 && width > 835) {
      setIsTablet(true);
    } else setIsTablet(false);
  }, [width]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    };
  }, [width]);
  const handlePlanetChange = (index: number) => {
    setTransitioning(false);

    setTimeout(() => {
      setActivePlanet(index + 1);
    }, 500);

    setTimeout(() => {
      setTransitioning(true);
    }, 500);
  };

  console.log(transitioning);
  const PlanetList = [
    {
      name: '瑞金星球',
      nameDescription: '贵金属星球',
      desctiption: '表面布满金、银等珍贵金属矿石，是宇宙中最珍贵的资源之一。',
      planetFull: WholePlanet1,
      planet: Planet1,
    },
    {
      name: '璀璨星球',
      nameDescription: '商品星球',
      desctiption: '拥有丰富的商品资源，居民以种植、收穫、交易为生。',
      planetFull: WholePlanet2,
      planet: Planet2,
    },
    {
      name: '汇神星球',
      nameDescription: '外汇星球',
      desctiption: '居民能够自由地转換各种货币和价值，是金融交易中心。',
      planetFull: WholePlanet3,
      planet: Planet3,
    },
    {
      name: '时光星球',
      nameDescription: '期货星球',
      desctiption: '居民能够預測未来发展和趋势，在时间轴上进行交易。',
      planetFull: WholePlanet4,
      planet: Planet4,
    },
    {
      name: '虚幻星球',
      nameDescription: '数字星球',
      desctiption: '虚拟现实世界，居民可以创建和体验各种虚拟场景。',
      planetFull: WholePlanet5,
      planet: Planet5,
    },
    {
      name: '债魔星球',
      nameDescription: '债券星球',
      desctiption: '债券是重要的资产和交易对象，居民精通债券市场。',
      planetFull: WholePlanet6,
      planet: Planet6,
    },
    {
      name: '繁荣星球',
      nameDescription: '股票星球',
      desctiption: 'Lorem ipsum',
      planetFull: WholePlanet7,
      planet: Planet7,
    },
  ];
  const handleScroll = useCallback(() => {
    if (!embla) return;
    setCurrentPage(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  useEffect(() => {
    console.log('Current page:', currentPage);
  }, [currentPage]);

  const isActiveSlide = (index: number) => {
    return index === currentPage;
  };

  const slides = PlanetList.map((item, index) => (
    <Carousel.Slide key={index}>
      {isActiveSlide(index) ? (
        <div className={styles.planetCard}>
          <div className={styles.widthPlanetCard}>
            <Body
              style={{ textAlign: 'center' }}
              variant={6}
              color={'#F2F3F7'}
              fs={'44.129px'}
              fw={600}
              lh={'73.548px'}>
              {item.name}:
            </Body>
            <Body
              style={{ textAlign: 'center' }}
              variant={6}
              color={'#F2F3F7'}
              fs={'44.129px'}
              fw={600}
              lh={'73.548px'}>
              {item.nameDescription}
            </Body>
            <div style={{ height: '70px' }}>
              <Body
                style={{ textAlign: 'center', marginTop: '29.42px' }}
                variant={6}
                color={'#9198B0'}
                fs={'22.065px'}
                fw={700}
                lh={'normal'}>
                {item.desctiption}
              </Body>
            </div>
          </div>
          <Image src={item.planetFull} alt="" className={styles.planetImage} />
        </div>
      ) : (
        <div className={styles.planetCardDiselect}>
          <div className={styles.widthPlanetCard}>
            <Body
              style={{ textAlign: 'center' }}
              variant={6}
              color={'#F2F3F7'}
              fs={'44.129px'}
              fw={600}
              lh={'73.548px'}>
              {item.name}:
            </Body>
            <Body
              style={{ textAlign: 'center' }}
              variant={6}
              color={'#F2F3F7'}
              fs={'44.129px'}
              fw={600}
              lh={'73.548px'}>
              {item.nameDescription}
            </Body>
            <div style={{ height: '70px' }}>
              <Body
                style={{ textAlign: 'center', marginTop: '29.42px' }}
                variant={6}
                color={'#9198B0'}
                fs={'22.065px'}
                fw={700}
                lh={'normal'}>
                {item.desctiption}
              </Body>
            </div>
          </div>
          <Image
            src={item.planetFull}
            alt=""
            className={styles.planetImageDiselect}
          />
        </div>
      )}
    </Carousel.Slide>
  ));
  return (
    <>
      {!isTablet ? (
        <div id="fourth-section" className={styles.containerFourthSection}>
          <div
            style={{
              position: 'absolute',
              marginTop: '15rem',
              padding: '0 50px',
              zIndex: 4,
            }}>
            {PlanetList.map((item, index) => (
              <Flex
                key={index}
                align={'center'}
                mb={'18px'}
                style={{ cursor: 'pointer' }}
                onClick={() => handlePlanetChange(index)}>
                <Image
                  src={item.planet}
                  alt=""
                  className={styles.planetSize}
                  style={
                    activePlanet === index + 1
                      ? { opacity: 1 }
                      : { opacity: 0.5 }
                  }
                />
                <Body
                  color={activePlanet === index + 1 ? '#F2F3F7' : '#BBCDF5'}
                  variant={6}
                  fw={700}
                  lh={'normal'}
                  fs={'15px'}>
                  {index + 1}. {item.name}
                </Body>
              </Flex>
            ))}
          </div>
          <span style={{ textAlign: 'center', marginBottom: '24px' }}>
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
            fs={'20px'}
            style={{ textAlign: 'center' }}>
            Wolf Planet
            星球是一个由七个独具特色的星球组成的神秘社区，每个星球都拥有独特的属性和玩法。
          </Body>
          <Transition
            mounted={transitioning}
            transition={'slide-up'}
            duration={200}
            timingFunction="ease">
            {(styles) => (
              <div style={{ position: 'relative', ...styles }}>
                {activePlanet === 1 && (
                  <Stack
                    align="center"
                    justify="ce  mt={'80px'}nter"
                    mt={'80px'}
                    spacing={'24px'}>
                    <Body
                      color="#F2F3F7"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'40px'}
                      style={{ textAlign: 'center' }}>
                      瑞金星球：贵金属星球
                    </Body>
                    <Body
                      color="#9198B0"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'18px'}
                      style={{ textAlign: 'center' }}>
                      表面布满金、银等珍贵金属矿石，是宇宙中最珍贵的资源之一。
                    </Body>
                    <Image
                      src={Planet1Big}
                      alt=""
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        top: '150px',
                        width: '100%',
                      }}
                    />
                  </Stack>
                )}
                {activePlanet === 2 && (
                  <Stack
                    align="center"
                    justify="center"
                    spacing={'24px'}
                    mt={'80px'}>
                    <Body
                      color="#F2F3F7"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'40px'}
                      style={{ textAlign: 'center' }}>
                      璀璨星球：商品星球
                    </Body>
                    <Body
                      color="#9198B0"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'18px'}
                      style={{ textAlign: 'center' }}>
                      拥有丰富的商品资源，居民以种植、收穫、交易为生。
                    </Body>
                    <Image
                      src={Planet2Big}
                      alt=""
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        top: '150px',
                        width: '100%',
                      }}
                    />
                  </Stack>
                )}
                {activePlanet === 3 && (
                  <Stack
                    align="center"
                    justify="center"
                    spacing={'24px'}
                    mt={'80px'}>
                    <Body
                      color="#F2F3F7"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'40px'}
                      style={{ textAlign: 'center' }}>
                      汇神星球：外汇星球
                    </Body>
                    <Body
                      color="#9198B0"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'18px'}
                      style={{ textAlign: 'center' }}>
                      居民能够自由地转換各种货币和价值，是金融交易中心。
                    </Body>
                    <Image
                      src={Planet3Big}
                      alt=""
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        top: '150px',
                        width: '100%',
                      }}
                    />
                  </Stack>
                )}
                {activePlanet === 4 && (
                  <Stack
                    align="center"
                    justify="center"
                    spacing={'24px'}
                    mt={'80px'}>
                    <Body
                      color="#F2F3F7"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'40px'}
                      style={{ textAlign: 'center' }}>
                      时光星球：期货星球
                    </Body>
                    <Body
                      color="#9198B0"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'18px'}
                      style={{ textAlign: 'center' }}>
                      居民能够預測未来发展和趋势，在时间轴上进行交易。
                    </Body>
                    <Image
                      src={Planet4Big}
                      alt=""
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        top: '150px',
                        width: '100%',
                      }}
                    />
                  </Stack>
                )}
                {activePlanet === 5 && (
                  <Stack
                    align="center"
                    justify="center"
                    spacing={'24px'}
                    mt={'80px'}>
                    <Body
                      color="#F2F3F7"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'40px'}
                      style={{ textAlign: 'center' }}>
                      虚幻星球：数字星球
                    </Body>
                    <Body
                      color="#9198B0"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'18px'}
                      style={{ textAlign: 'center' }}>
                      虚拟现实世界，居民可以创建和体验各种虚拟场景。
                    </Body>
                    <Image
                      src={Planet5Big}
                      alt=""
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        top: '150px',
                        width: '100%',
                      }}
                    />
                  </Stack>
                )}
                {activePlanet === 6 && (
                  <Stack
                    align="center"
                    justify="center"
                    spacing={'24px'}
                    mt={'80px'}>
                    <Body
                      color="#F2F3F7"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'40px'}
                      style={{ textAlign: 'center' }}>
                      债魔星球：债券星球
                    </Body>
                    <Body
                      color="#9198B0"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'18px'}
                      style={{ textAlign: 'center' }}>
                      债券是重要的资产和交易对象，居民精通债券市场。
                    </Body>
                    <Image
                      src={Planet6Big}
                      alt=""
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        top: '150px',
                        width: '100%',
                      }}
                    />
                  </Stack>
                )}
                {activePlanet === 7 && (
                  <Stack
                    align="center"
                    justify="center"
                    spacing={'24px'}
                    mt={'80px'}>
                    <Body
                      color="#F2F3F7"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'40px'}
                      style={{ textAlign: 'center' }}>
                      繁荣星球：股票星球
                    </Body>
                    <Body
                      color="#9198B0"
                      variant={6}
                      fw={600}
                      lh={'normal'}
                      fs={'18px'}
                      style={{ textAlign: 'center' }}>
                      Lorem ipsum
                    </Body>
                    <Image
                      src={Planet7Big}
                      alt=""
                      style={{
                        position: 'absolute',
                        bottom: '0px',
                        top: '150px',
                        width: '100%',
                      }}
                    />
                  </Stack>
                )}
              </div>
            )}
          </Transition>
        </div>
      ) : (
        <div id="fourth-section" className={styles.containerFourthSection}>
          <span style={{ textAlign: 'center', marginBottom: '24px' }}>
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
            fs={'20px'}
            style={{ textAlign: 'center', marginBottom: '24px' }}>
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
              slideGap={50}
              initialSlide={0}
              className={styles.carouselStyles}
              getEmblaApi={setEmbla}
              withControls={false}>
              {slides}
            </Carousel>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default FourthSection;
