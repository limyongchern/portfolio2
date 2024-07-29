import styles from './home.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Body } from 'components/typography';
import { MagicMotion } from 'react-magic-motion';
import { PauseCircle, PlayCircle } from '@phosphor-icons/react';

const SecondSection = ({ data }: any) => {
  const timerLength = 3000;
  const [cardOpen, setCardOpen] = useState(0);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  useEffect(() => {
    if (isTimerPaused) return;
    const timer = setTimeout(() => {
      setCardOpen((cardOpen + 1) % 4);
    }, timerLength);

    return () => clearTimeout(timer);
  }, [cardOpen, isTimerPaused]);

  const Cards = ({ data, index }: any) => {
    return (
      <div
        className={styles.collapsibleCard}
        onMouseEnter={() => setCardOpen(index)}
        onClick={() => {
          setCardOpen(index);
        }}
        key={index}
        style={{
          width: cardOpen === index ? '440px' : '177px',
        }}>
        <Image
          src={data.image}
          className={styles.collapsibleImage}
          alt="wolfavatar"
        />

        {cardOpen === index ? (
          <div style={{ marginTop: index === 1 ? -210 : -130 }}>
            <Body variant={9} color="white" className={styles.cardTitleOpen}>
              {data.title}
            </Body>
            <Body
              variant={10}
              color="white"
              className={styles.cardDescription2}>
              {data.description}
            </Body>
          </div>
        ) : (
          <Body variant={9} color="white" className={styles.cardTitle2}>
            {data.title}
          </Body>
        )}
      </div>
    );
  };
  return (
    <div
      className={styles.collapsibleCardSection}
      style={{ backgroundColor: '#272935' }}>
      <Body variant={9} color="white" style={{ marginBottom: '-265px' }}>
        {data.headline}
      </Body>
      <MagicMotion transition={{ type: 'ease' }}>
        <div className={styles.collapsibleCardsContainer}>
          {data.cards.map((item: any, index: number) => (
            <Cards data={item} index={index} key={index} />
          ))}
        </div>
      </MagicMotion>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: -270,
          width: 1054,
        }}>
        <div></div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {data.cards.map((item: any, index: number) => (
            <div
              key={index}
              style={{
                height: 12,
                width: 12,
                borderRadius: 100,
                backgroundColor: index === cardOpen ? '#9198B0' : '#3E404E',
              }}></div>
          ))}
        </div>
        <div style={{ cursor: 'pointer' }}>
          {isTimerPaused ? (
            <PlayCircle
              size={40}
              style={{ color: '#9198B0' }}
              onClick={() => setIsTimerPaused(false)}
            />
          ) : (
            <PauseCircle
              size={40}
              style={{ color: '#9198B0' }}
              onClick={() => setIsTimerPaused(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
