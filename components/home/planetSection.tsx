import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './planetSection.module.scss';
import { Flex, Stack } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';

import { PlanetList } from 'utils/planet';
import Image from 'next/image';
import { MagicMotion } from 'react-magic-motion';

const PlanetSection = ({ data }: any) => {
  const router = useRouter();
  const [activePlanet, setActivePlanet] = useState<number>(1);
  const [currentPlanet, setCurrentPlanet] = useState<any>(PlanetList[0]);

  const handlePlanetChange = (index: number) => {
    setActivePlanet(index + 1);
    console.log('PlanetList[index]', PlanetList[index]);
    setCurrentPlanet(PlanetList[index]);
  };

  return (
    <>
      <div id="fourth-section" className={styles.containerPlanetSection}>
        <span style={{ textAlign: 'center', marginBottom: '24px' }}>
          {router.locale === 'en' ? (
            <Heading
              variant={1}
              color="#F2F3F7"
              style={{ lineHeight: 1, maxWidth: 1080 }}>
              {data.headline}
            </Heading>
          ) : (
            <BodyBold color="#F2F3F7" variant={7} style={{ display: 'inline' }}>
              {data.headline}
            </BodyBold>
          )}
        </span>
        {router.locale === 'en' ? (
          <BodyDmsans
            color="#9198B0"
            variant={2}
            style={{ textAlign: 'center', maxWidth: 836 }}>
            {data.subheader}
          </BodyDmsans>
        ) : (
          <Body color="#9198B0" variant={1} style={{ textAlign: 'center' }}>
            {data.subheader}
          </Body>
        )}

        <div style={{ display: 'flex', maxWidth: 1080 }}>
          <div
            style={{
              // position: 'absolute',
              marginTop: '7rem',
              padding: '0px 0px',
              marginLeft: -150,
              width: 200,
              // zIndex: 4,
            }}>
            {PlanetList.map((item, index) => (
              <Flex
                key={index}
                align={'center'}
                mb={'20px'}
                style={{
                  cursor: 'pointer',
                  width: router.locale === 'en' ? 235 : 210,
                }}
                onClick={() => handlePlanetChange(index)}
                onMouseEnter={() => handlePlanetChange(index)}
                className={
                  activePlanet === index + 1
                    ? styles.activePlanetNameContainer
                    : styles.planetNameContainer
                }>
                <Image
                  src={item.planet}
                  alt=""
                  className={styles.planetSize}
                  style={
                    activePlanet === index + 1
                      ? { opacity: 1, marginLeft: -5 }
                      : { opacity: 0.5 }
                  }
                />
                {router.locale === 'en' ? (
                  <BodyDmsans
                    color={activePlanet === index + 1 ? '#F2F3F7' : '#BBCDF5'}
                    style={{
                      opacity: activePlanet === index + 1 ? 1 : 0.7,
                      marginLeft: 5,
                    }}
                    variant={2}>
                    {item.nameEn}
                  </BodyDmsans>
                ) : (
                  <Body
                    color={activePlanet === index + 1 ? '#F2F3F7' : '#BBCDF5'}
                    style={{
                      opacity: activePlanet === index + 1 ? 1 : 0.7,
                      marginLeft: 5,
                    }}
                    variant={13}>
                    {item.name}
                  </Body>
                )}
              </Flex>
            ))}
          </div>
          <div style={{ position: 'relative', marginLeft: 100, width: 640 }}>
            <Stack align="center" justify="center" mt={'60px'} spacing={'24px'}>
              <div key={currentPlanet.name}>
                <Image
                  key={currentPlanet.name}
                  src={currentPlanet.planetFull}
                  alt=""
                  style={{
                    // position: 'absolute',
                    // top: '-260px',
                    width: '400px',
                    height: '400px',
                    // width: '130%',
                    // height: '450%',
                  }}
                  className={styles.planetImage}
                />
              </div>
              {router.locale === 'en' ? (
                <>
                  <Heading color="#F2F3F7" variant={3}>
                    {currentPlanet.titleEn}
                  </Heading>
                  <BodyDmsans
                    color="#F2F3F7"
                    variant={1}
                    style={{ textAlign: 'center' }}>
                    {currentPlanet.descriptionEn}
                  </BodyDmsans>
                </>
              ) : (
                <>
                  <Body color="#F2F3F7" variant={9}>
                    {currentPlanet.title}
                  </Body>
                  <Body color="#F2F3F7" variant={1}>
                    {currentPlanet.description}
                  </Body>
                </>
              )}
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetSection;
