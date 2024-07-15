import { Image, Stack } from '@mantine/core';
import { BodyBold } from 'components/typography';
import { url } from 'inspector';
import React, { useEffect, useState } from 'react';
import styles from './about.module.scss';

interface ICardProps {
  image: string;
  name: string;
  title: string;
}

const TeamCard = ({ image, name, title }: ICardProps) => {
  // MOBILE AND DESKTOP
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 835) {
      setIsMobile(true);
    } else setIsMobile(false);
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
  return (
    <Stack spacing={28} align="center" mb={isMobile ? '60px' : 0}>
      <div
        className={styles.imgCardContainer}
        style={{ backgroundImage: `url(${image})` }}>
        <Image
          src={'/twitter.png'}
          width={50}
          className={styles.twitter}
          alt="twitter"
        />
      </div>
      <Stack spacing={5} align="center">
        <BodyBold variant={1} fw={700} fs={isMobile ? 24 : 18} color="#F2F3F7">
          {name}
        </BodyBold>
        <BodyBold variant={1} fw={700} fs={isMobile ? 20 : 16} color="#9198B0">
          {title}
        </BodyBold>
      </Stack>
    </Stack>
  );
};

export default TeamCard;
