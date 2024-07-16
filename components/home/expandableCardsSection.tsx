import NFT from 'public/NFT.png';
import card4Icon from 'public/card4Icon.png';
import card2Icon from 'public/card2Icon.png';
import card1Icon from 'public/GlobeHemisphereWest.png';
import Image from 'next/image';
import { Body, Heading } from 'components/typography';
import styles from './home.module.scss';
import { Card, Flex, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';

const expandanbleCardsSection = ({ data }: any) => {
  const [cardOpen, setCardOpen] = useState(0);

  const CollapsibleCardMobile = ({ data, index }: any) => {
    return (
      <div
        className={styles.collapsibleCard}
        onClick={() => {
          setCardOpen(index);
        }}
        key={index}
        style={{
          height: cardOpen === index ? '400px' : '100px',
        }}>
        <Image
          src={data.image}
          className={styles.collapsibleImage}
          alt="wolfavatar"
        />

        {cardOpen === index ? (
          <>
            <Body variant={11} color="white" className={styles.cardTitleOpen}>
              {data.title}
            </Body>
            <Body
              variant={12}
              color="white"
              className={styles.cardDescription2}>
              {data.description}
            </Body>
          </>
        ) : (
          <Body variant={11} color="white" className={styles.cardNumber}>
            {data.title}
          </Body>
        )}
      </div>
    );
  };

  return (
    <div className={styles.planetsSection}>
      <Heading
        variant={0}
        color="white"
        style={{ marginBottom: '-200px' }}
        fs={36}
        fw={700}>
        故事的起点
      </Heading>
      <div className={styles.collapsibleCardsContainer}>
        {data.map((item: any, index: number) => (
          <CollapsibleCardMobile data={item} index={index} />
        ))}
      </div>
    </div>
  );
};
export default expandanbleCardsSection;
