import Image from 'next/image';
import { Body, BodyBold, Heading } from 'components/typography';
import styles from './thirdSection.module.scss';
import { Card, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import { MagicMotion } from 'react-magic-motion';

const ThirdSection = ({ data }: any) => {
  const [currentCard, setCurrentCard] = useState(0);

  const isActive = (index: number) => {
    return index === currentCard;
  };

  return (
    <div className={styles.outerContainer}>
      <Body variant={9} color="white">
        {data.headline}
      </Body>
      <div className={styles.cardsContainer}>
        {data.cards.map((card: any, index: number) => (
          <Card className={styles.card} key={index}>
            <Image
              src={card.logo}
              alt="card icon"
              width={84}
              height={84}
              color={'#9198B0'}
            />
            <div>
              <Heading variant={1} color="#F2F3F7" fw={700}>
                {card.title}
              </Heading>
              <div style={{ marginTop: 20 }}>
                {card.bulletPoints.map((point: any, index: number) => (
                  <Body
                    variant={1}
                    color="#F2F3F7"
                    key={index}
                    style={{
                      marginTop: '8px',
                      lineHeight: '2rem',
                      width: 320,
                    }}>
                    <li>{point}</li>
                  </Body>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'flex', marginTop: 200, gap: 50 }}>
        <div className={styles.nav} onMouseEnter={() => setCurrentCard(0)}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(0)}
            className={`${styles.link} ${isActive(0) ? styles.active : ''}`}>
            <BodyBold
              variant={4}
              color="#F2F3F7"
              className={`${isActive(0) ? styles.active : ''}`}>
              新手投资者
            </BodyBold>
          </UnstyledButton>
        </div>
        <div className={styles.nav} onMouseEnter={() => setCurrentCard(1)}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(1)}
            className={`${styles.link} ${isActive(1) ? styles.active : ''}`}>
            <BodyBold
              variant={4}
              color="#F2F3F7"
              className={`${isActive(1) ? styles.active : ''}`}>
              专业投资者
            </BodyBold>
          </UnstyledButton>
        </div>
      </div>

      <MagicMotion transition={{ type: 'ease' }}>
        <div className={styles.illustrationContainer}>
          {data.bottomCards.map((card: any, index: number) => (
            <div
              className={
                isActive(index)
                  ? styles.illustrationSectionActive
                  : styles.illustrationSection
              }
              onMouseEnter={() => setCurrentCard(index)}
              key={index}>
              <Image
                src={card.image}
                alt="card icon"
                className={
                  isActive(index)
                    ? styles.illustrationActive
                    : styles.illustration
                }
              />
              <Body
                variant={10}
                color={isActive(index) ? '#F2F3F7' : '#9198B0'}
                style={{ marginTop: 20 }}>
                {card.title}
              </Body>
              <div style={{ marginTop: 0 }}>
                {card.bulletPoints.map((point: any, index2: number) => (
                  <Body
                    variant={1}
                    color={isActive(index) ? '#F2F3F7' : '#9198B0'}
                    key={index2}
                    style={{
                      marginTop: '8px',
                      lineHeight: '2rem',
                    }}>
                    <li>{point}</li>
                  </Body>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MagicMotion>
    </div>
  );
};
export default ThirdSection;
