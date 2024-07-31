import { Flex, Grid, Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const SecondSection = ({ data }: any) => {
  return (
    <div id="second-section" className={styles.containerSecondSection}>
      <div className={styles.widthContainerSecondSection}>
        <Stack
          align="center"
          justify="center"
          spacing={'18.67px'}
          p={'0px 48.222px 32.667px 48.222px'}>
          <span>
            <BodyBold color="#F2F3F7" variant={7}>
              {data.headline}
            </BodyBold>
          </span>
          <Body color="#9198B0" variant={1} style={{ textAlign: 'center' }}>
            {data.subheader}
          </Body>
        </Stack>
        <Flex align="center" justify="center" mt={'14px'}>
          <Grid gutter="xl">
            {data.cards.map((card: any, index: number) => (
              <Grid.Col span={4} key={index}>
                <Image
                  src={card.image}
                  alt="wolfavatar"
                  className={`${styles[`daoCardImages${index + 1}`]}`}
                />
                <div className={styles.cardDarkContainer}>
                  <BodyBold color="#F2F3F7" variant={7}>
                    {card.title}
                  </BodyBold>
                  <Body color="#9198B0" variant={1}>
                    {card.description}
                  </Body>
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </Flex>
      </div>
    </div>
  );
};

export default SecondSection;
