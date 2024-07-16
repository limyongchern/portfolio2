import NFT from 'public/NFT.png';
import card4Icon from 'public/card4Icon.png';
import card2Icon from 'public/card2Icon.png';
import card1Icon from 'public/GlobeHemisphereWest.png';
import Image from 'next/image';
import { Body, Heading } from 'components/typography';
import styles from './home.module.scss';
import { Card, Flex, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { MagicMotion } from 'react-magic-motion';
import TempImage1 from 'public/TempImages/TempImage1.jpg';
import TempImage2 from 'public/TempImages/TempImage2.jpg';
import TempImage3 from 'public/TempImages/TempImage3.jpg';
import TempImage4 from 'public/TempImages/TempImage4.jpg';

const dummyCollapsibleCardData = [
  {
    id: 1,
    title: '1',
    description: '某一天，萌狼们开始探索太空投资的机会',
    image: TempImage1,
  },
  {
    id: 2,
    title: '2',
    description: '某二天，萌狼们开始探索太空投资的机会',
    image: TempImage2,
  },
  {
    id: 3,
    title: '3',
    description: '某三天，萌狼们开始探索太空投资的机会',
    image: TempImage3,
  },
  {
    id: 4,
    title: '4',
    description: '某四天，萌狼们开始探索太空投资的机会',
    image: TempImage4,
  },
];

const expandanbleCardsSection = () => {
  const [cardOpen, setCardOpen] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCardOpen((cardOpen + 1) % 4);
    }, 3500);

    return () => clearTimeout(timer);
  }, [cardOpen]);

  const CollapsibleCardMobile = ({ data, index }: any) => {
    return (
      <div
        className={styles.collapsibleCardMobile}
        onMouseEnter={() => setCardOpen(index)}
        onClick={() => {
          setCardOpen(index);
        }}
        key={index}
        style={{
          height: cardOpen === index ? '400px' : '100px',
        }}>
        <Image
          src={data.image}
          className={styles.collapsibleImageMobile}
          alt="wolfavatar"
        />

        {cardOpen === index ? (
          <>
            <Body
              variant={11}
              color="white"
              className={styles.cardTitleOpenMobile}>
              {data.title}
            </Body>
            <Body
              variant={12}
              color="white"
              className={styles.cardDescription2Mobile}>
              {data.description}
            </Body>
          </>
        ) : (
          <Body variant={11} color="white" className={styles.cardNumberMobile}>
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
      <MagicMotion transition={{ type: 'spring', stiffness: 100 }}>
        <div className={styles.collapsibleCardsContainerMobile}>
          {dummyCollapsibleCardData.map((item: any, index: number) => (
            <CollapsibleCardMobile data={item} index={index} />
          ))}
        </div>
      </MagicMotion>
    </div>
  );
};
export default expandanbleCardsSection;
