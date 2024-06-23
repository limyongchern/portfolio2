import { Image, Stack } from '@mantine/core';
import { BodyBold } from 'components/typography';
import { url } from 'inspector';
import React from 'react';
import styles from 'styles/pages/about/index.module.scss';

interface ICardProps {
  image: string;
  name: string;
  title: string;
}

const TeamCard = ({ image, name, title }: ICardProps) => {
  return (
    <Stack spacing={28} align="center">
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
        <BodyBold variant={1} fw={700} fs={24} color="#F2F3F7">
          {name}
        </BodyBold>
        <BodyBold variant={1} fw={700} color="#9198B0">
          {title}
        </BodyBold>
      </Stack>
    </Stack>
  );
};

export default TeamCard;
