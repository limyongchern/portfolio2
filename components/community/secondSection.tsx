import { useRouter } from 'next/router';
import { Flex, Grid, Stack } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const SecondSection = ({ data }: any) => {
  const router = useRouter();
  return (
    <div id="second-section" className={styles.containerSecondSection}>
      <div className={styles.widthContainerSecondSection}>
        <Stack
          align="center"
          justify="center"
          spacing={'18.67px'}
          p={'0px 48.222px 32.667px 48.222px'}>
          <span>
            {router.locale === 'en' ? (
              <Heading color="#F2F3F7" variant={1}>
                {data.headline}
              </Heading>
            ) : (
              <BodyBold color="#F2F3F7" variant={7}>
                {data.headline}
              </BodyBold>
            )}
          </span>
          {router.locale === 'en' ? (
            <BodyDmsans
              color="#9198B0"
              variant={2}
              style={{ textAlign: 'center', width: 836 }}>
              {data.subheader}
            </BodyDmsans>
          ) : (
            <Body color="#9198B0" variant={1} style={{ textAlign: 'center' }}>
              {data.subheader}
            </Body>
          )}
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
                <div
                  className={styles.cardDarkContainer}
                  style={{
                    width: router.locale === 'en' ? 276 : 201,
                    height: router.locale === 'en' ? 326 : 299,
                  }}>
                  {router.locale === 'en' ? (
                    <>
                      <Heading color="#F2F3F7" variant={2}>
                        {card.title}
                      </Heading>
                      <BodyDmsans
                        color="#9198B0"
                        variant={2}
                        style={{ textAlign: 'justify' }}>
                        {card.description}
                      </BodyDmsans>
                    </>
                  ) : (
                    <>
                      <BodyBold color="#F2F3F7" variant={7}>
                        {card.title}
                      </BodyBold>
                      <Body color="#9198B0" variant={1}>
                        {card.description}
                      </Body>
                    </>
                  )}
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
