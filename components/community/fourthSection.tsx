import React, { useState } from 'react';
import styles from '../../styles/pages/community/index.module.scss';
import { Flex, Stack, Transition } from '@mantine/core';
import { Body, Heading } from 'components/typography';
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
import Image from 'next/image';

const FourthSection = () => {
  const [activePlanet, setActivePlanet] = useState<number>(1);
  const [transitioning, setTransitioning] = useState<boolean>(true);

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
      planet: Planet1,
    },
    {
      name: '璀璨星球',
      planet: Planet2,
    },
    {
      name: '汇神星球',
      planet: Planet3,
    },
    {
      name: '时光星球',
      planet: Planet4,
    },
    {
      name: '虚幻星球',
      planet: Planet5,
    },
    {
      name: '债魔星球',
      planet: Planet6,
    },
    {
      name: '繁荣星球',
      planet: Planet7,
    },
  ];

  return (
    <div style={{ position: 'relative' }}>
      <div id="fourth-section" className={styles.containerFourthSection}>
        <div className={styles.widthContainerFourthSection}>
          <span style={{ textAlign: 'center' }}>
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
              lh={'60px'}
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
            fw={700}
            lh={'normal'}
            fs={'18px'}
            style={{ textAlign: 'center' }}>
            Wolf Planet
            星球是一个由七个独具特色的星球组成的神秘社区，每个星球都拥有独特的属性和玩法。
          </Body>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          padding: '0 80px',
          marginTop: '-55rem',
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
                activePlanet === index + 1 ? { opacity: 1 } : { opacity: 0.5 }
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
    </div>
  );
};

export default FourthSection;
