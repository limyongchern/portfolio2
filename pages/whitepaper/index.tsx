import React, { useState } from 'react';
import styles from '../../styles/pages/whitepaper/index.module.scss';
import { Button, Flex, Stack } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
const Whitepaper = () => {
  return (
    <div className={styles.container}>
      <Stack justify="center" align="center" spacing={'24px'} p={'0 120px'}>
        <Heading
          color="#F2F3F7"
          variant={6}
          fs={'56px'}
          fw={400}
          lh={'60px'}
          style={{ textAlign: 'center' }}>
          Turn Slack requests into actionable issues
        </Heading>
        <Heading
          color="#9198B0"
          variant={6}
          fs={'20px'}
          fw={700}
          lh={'normal'}
          style={{ textAlign: 'center' }}>
          Linear Asks is the easiest way to create and manage workplace
          requests. Streamline bug reports, feature ideas, IT tickets, HR
          requests, and more.
        </Heading>
      </Stack>
      <Flex align="center" gap={'20px'} m={'56px 0'}>
        <CaretCircleLeft width={'56px'} height={'56px'} color="#9198B0" />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            width: '1080px',
            height: '1100px',
            background: 'rgba(255, 255, 255, 0.12)',
          }}>
          pdf placeholder
        </div>
        <CaretCircleRight width={'56px'} height={'56px'} color="#9198B0" />
      </Flex>
      <Stack justify="center" align="center" spacing={'24px'}>
        <Heading
          color="#F2F3F7"
          variant={6}
          fs={'43.875px'}
          fw={600}
          lh={'52px'}
          style={{ textAlign: 'center' }}>
          Short text about V Systems
        </Heading>
        <Body
          color="#9198B0"
          variant={6}
          fs={'20px'}
          fw={700}
          lh={'normal'}
          style={{
            textAlign: 'center',
            padding: '0 150px',
            marginBottom: '42px',
          }}>
          Linear Asks is a new take on intake. Submit requests directly from
          Slack and automatically send them to the relevant team in Linear.
          Eliminate cluttered channels and reduce context switching.
        </Body>
        <Button size="xl" color="#4178FA" radius={'8px'} h={'40px'}>
          Learn more about V Systems
        </Button>
      </Stack>
    </div>
  );
};

export default Whitepaper;
