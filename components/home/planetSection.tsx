import React, { useState } from 'react';
import styles from './planetSection.module.scss';
import { Flex, Stack } from '@mantine/core';
import { Body } from 'components/typography';

import { PlanetList } from 'utils/planet';
import Image from 'next/image';
import { MagicMotion } from 'react-magic-motion';

const PlanetSection = ({ data }: any) => {
  const [activePlanet, setActivePlanet] = useState<number>(1);
  const [currentPlanet, setCurrentPlanet] = useState<any>(PlanetList[0]);

  const handlePlanetChange = (index: number) => {
    setActivePlanet(index + 1);
    setCurrentPlanet(PlanetList[index]);
  };

  return (
    <>
      <div id="fourth-section" className={styles.containerPlanetSection}>
        <div
          style={{
            position: 'absolute',
            marginTop: '16rem',
            padding: '0 200px',
            zIndex: 4,
          }}>
          {PlanetList.map((item, index) => (
            <Flex
              key={index}
              align={'center'}
              mb={'12px'}
              style={{ cursor: 'pointer' }}
              onClick={() => handlePlanetChange(index)}
              onMouseEnter={() => handlePlanetChange(index)}>
              <Image
                src={item.planet}
                alt=""
                className={styles.planetSize}
                style={
                  activePlanet === index + 1 ? { opacity: 1 } : { opacity: 0.5 }
                }
              />
              <Body
                color={activePlanet === index + 1 ? '#F2F3F7' : '#BBCDF5'}
                style={{
                  opacity: activePlanet === index + 1 ? 1 : 0.7,
                  marginLeft: 5,
                }}
                variant={8}>
                {index + 1}. {item.name}
              </Body>
            </Flex>
          ))}
        </div>
        <span style={{ textAlign: 'center', marginBottom: '24px' }}>
          <Body color="#F2F3F7" variant={9} style={{ display: 'inline' }}>
            {data.headline}
          </Body>
        </span>
        <Body color="#9198B0" variant={1} style={{ textAlign: 'center' }}>
          {data.subheader}
        </Body>

        <div style={{ position: 'relative' }}>
          <Stack align="center" justify="center" mt={'80px'} spacing={'24px'}>
            <MagicMotion transition={{ type: 'spring', stiffness: 100 }}>
              <>
                <Body color="#F2F3F7" variant={9}>
                  {currentPlanet.title}
                </Body>
                <Body color="#9198B0" variant={1}>
                  {currentPlanet.description}
                </Body>
              </>
            </MagicMotion>
            <MagicMotion transition={{ type: 'ease', damping: 300 }}>
              <Image
                key={currentPlanet.name}
                src={currentPlanet.planetCropped}
                alt=""
                style={{
                  position: 'absolute',
                  top: '-260px',
                  width: '130%',
                  height: '450%',
                }}
              />
            </MagicMotion>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default PlanetSection;
