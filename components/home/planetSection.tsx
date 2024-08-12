import React, { useState } from 'react';
import styles from './planetSection.module.scss';
import { Flex, Stack } from '@mantine/core';
import { Body, BodyBold } from 'components/typography';

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
            marginTop: '18rem',
            padding: '0 400px',
            zIndex: 4,
          }}>
          {PlanetList.map((item, index) => (
            <Flex
              key={index}
              align={'center'}
              mb={'20px'}
              style={{ cursor: 'pointer' }}
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
              <Body
                color={activePlanet === index + 1 ? '#F2F3F7' : '#BBCDF5'}
                style={{
                  opacity: activePlanet === index + 1 ? 1 : 0.7,
                  marginLeft: 5,
                }}
                variant={13}>
                {item.name}
              </Body>
            </Flex>
          ))}
        </div>
        <span style={{ textAlign: 'center', marginBottom: '24px' }}>
          <BodyBold color="#F2F3F7" variant={7} style={{ display: 'inline' }}>
            {data.headline}
          </BodyBold>
        </span>
        <Body color="#F2F3F7" variant={1} style={{ textAlign: 'center' }}>
          {data.subheader}
        </Body>

        <div style={{ position: 'relative', marginLeft: 200 }}>
          <Stack align="center" justify="center" mt={'60px'} spacing={'24px'}>
            <div key={currentPlanet.name}>
              <Image
                key={currentPlanet.name}
                src={currentPlanet.planetFull}
                alt=""
                style={{
                  // position: 'absolute',
                  // top: '-260px',
                  width: '480px',
                  height: '480px',
                  // width: '130%',
                  // height: '450%',
                }}
                className={styles.planetImage}
              />
            </div>

            <MagicMotion transition={{ type: 'spring', stiffness: 100 }}>
              <>
                <Body color="#F2F3F7" variant={9}>
                  {currentPlanet.title}
                </Body>
                <Body color="#F2F3F7" variant={1}>
                  {currentPlanet.description}
                </Body>
              </>
            </MagicMotion>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default PlanetSection;
