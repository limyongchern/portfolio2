import styles from './home.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { MagicMotion } from 'react-magic-motion';
import { PauseCircle, PlayCircle } from '@phosphor-icons/react';

const SecondSection = ({ data }: any) => {
  const router = useRouter();
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

  const getZIndex = (index: number) => {
    if (index === 0) {
      if (cardOpen === 0) return 4;
      if (cardOpen === 1) return 3;
      if (cardOpen === 2) return 2;
      if (cardOpen === 3) return 1;
    }
    if (index === 1) {
      if (cardOpen === 0) return 3;
      if (cardOpen === 1) return 4;
      if (cardOpen === 2) return 3;
      if (cardOpen === 3) return 2;
    }
    if (index === 2) {
      if (cardOpen === 0) return 2;
      if (cardOpen === 1) return 3;
      if (cardOpen === 2) return 4;
      if (cardOpen === 3) return 3;
    }
    if (index === 3) {
      if (cardOpen === 0) return 1;
      if (cardOpen === 1) return 2;
      if (cardOpen === 2) return 3;
      if (cardOpen === 3) return 4;
    }
  };

  const Cards = ({ data, index }: any) => {
    return (
      <div
        className={
          index === 0 ? styles.collapsibleCard : styles.collapsibleCardUnfocused
        }
        onMouseEnter={() => setCardOpen(index)}
        onClick={() => {
          setCardOpen(index);
        }}
        key={index}
        style={{
          width: cardOpen === index ? '680px' : '680px',
          zIndex: getZIndex(index),
        }}>
        {cardOpen === index ? (
          <Image
            src={data.image}
            className={
              cardOpen === index
                ? styles.collapsibleImage
                : styles.collapsibleImageUnfocused
            }
            alt="wolfavatar"
          />
        ) : (
          <div className={styles.gradientContainer}>
            <Image
              src={data.image}
              className={
                cardOpen === index
                  ? styles.collapsibleImage
                  : styles.collapsibleImageUnfocused
              }
              alt="wolfavatar"
            />
            <div className={styles.gradientOverlay}></div>
          </div>
        )}

        {cardOpen === index && (
          <div
            style={{
              display: 'flex',
              height: 25,
              padding: '0px 40px',

              width: '80%',
            }}>
            {router.locale === 'en' ? (
              <BodyDmsans
                variant={4}
                color="white"
                style={{
                  marginBottom: 60,
                  display: 'inline-block',
                  alignSelf: 'flex-end',
                }}>
                {data.description}
              </BodyDmsans>
            ) : (
              <BodyBold
                variant={4}
                color="white"
                style={{
                  marginBottom: 60,
                  display: 'inline-block',
                  alignSelf: 'flex-end',
                }}>
                {data.description}
              </BodyBold>
            )}
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      className={styles.collapsibleCardSection}
      style={{ backgroundColor: '#272935' }}>
      {router.locale === 'en' ? (
        <Heading variant={1} color="white" style={{ marginBottom: '-265px' }}>
          {data.headline}
        </Heading>
      ) : (
        <Body variant={9} color="white" style={{ marginBottom: '-265px' }}>
          {data.headline}
        </Body>
      )}

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
