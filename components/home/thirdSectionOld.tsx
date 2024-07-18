import { Flex, Grid, Stack } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import React from 'react';
import styles from './home.module.scss';
import Image from 'next/image';
import backgroundImage from 'public/Bg1.png';
import planetHome from 'public/Planet4Home.png';

const thirdSection = ({ data }: any) => {
  return (
    <>
      <div className={styles.section3}>
        <div className={styles.backgroundWrapper}>
          <Image
            src={backgroundImage}
            alt="Background Image"
            className={styles.backgroundImage}
          />
        </div>
        <Flex className={styles.section3Content}>
          <Stack className={styles.section3Word}>
            <Heading
              variant={0}
              color="#F2F3F7"
              style={{ lineHeight: 1.5 }}
              fs={40}
              fw={700}>
              Wolf Planet 星球汇聚了来自全球各地的专业投资
            </Heading>
            <Body
              variant={1}
              color="#9198B0"
              style={{ lineHeight: 1.5 }}
              fw={700}>
              Wolf Planet
              星球汇聚了来自全球各地的专业投资者和分析师，为您提供高质量的投资资讯和分析，助力您做出更明智的投资决策。
            </Body>
          </Stack>
          <Image
            src={planetHome}
            alt="Planet"
            className={styles.section3Planet}
          />
        </Flex>
      </div>
    </>
  );
};

export default thirdSection;
