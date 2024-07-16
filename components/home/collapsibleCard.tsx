import styles from './home.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Body, Heading } from 'components/typography';
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

const CollapsibleCard = ({ data, index }: any) => {
  const [cardOpen, setCardOpen] = useState(0);

  const Cards = ({ data, index }: any) => {
    return (
      <div
        className={styles.collapsibleCard}
        onClick={() => {
          setCardOpen(index);
        }}
        key={index}
        style={{
          width: cardOpen === index ? '440px' : '177px',
        }}>
        <Image
          src={data.image}
          // width={}
          className={styles.collapsibleImage}
          alt="wolfavatar"
        />

        {cardOpen === index ? (
          <>
            <Body variant={9} color="white" className={styles.cardTitleOpen}>
              {data.title}
            </Body>
            <Body
              variant={10}
              color="white"
              className={styles.cardDescription2}>
              {data.description}
            </Body>
          </>
        ) : (
          <Body variant={9} color="white" className={styles.cardTitle2}>
            {data.title}
          </Body>
        )}
      </div>
    );
  };
  return (
    <MagicMotion transition={{ type: 'spring', stiffness: 100 }}>
      <div className={styles.collapsibleCardsContainer}>
        {dummyCollapsibleCardData.map((data, index) => (
          <Cards data={data} index={index} />
        ))}
      </div>
    </MagicMotion>
  );
};

export default CollapsibleCard;
