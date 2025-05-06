import Image from 'next/image';
import { useRouter } from 'next/router';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
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
      <Heading variant={1} color="white">
        {data.headline}
      </Heading>

      <div style={{ display: 'flex', marginTop: 100, gap: 50 }}>
        <div className={styles.nav} onMouseEnter={() => setCurrentCard(0)}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(0)}
            className={`${styles.link} ${isActive(0) ? styles.active : ''}`}>
            <Heading
              variant={2}
              className={`${isActive(0) ? styles.active : ''}`}
              style={{
                color: isActive(0) ? '#F2F3F7' : '#9198B0',
                paddingBottom: 2,
              }}>
              {data.bottomCards[0].title}
            </Heading>
          </UnstyledButton>
        </div>
        <div className={styles.nav} onMouseEnter={() => setCurrentCard(1)}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(1)}
            className={`${styles.link} ${isActive(1) ? styles.active : ''}`}>
            <Heading
              variant={2}
              className={`${isActive(1) ? styles.active : ''}`}
              style={{
                color: isActive(1) ? '#F2F3F7' : '#9198B0',
                paddingBottom: 2,
              }}>
              {data.bottomCards[1].title}
            </Heading>
          </UnstyledButton>
        </div>

        <div className={styles.nav} onMouseEnter={() => setCurrentCard(2)}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(2)}
            className={`${styles.link} ${isActive(2) ? styles.active : ''}`}>
            <Heading
              variant={2}
              className={`${isActive(2) ? styles.active : ''}`}
              style={{
                color: isActive(2) ? '#F2F3F7' : '#9198B0',
                paddingBottom: 2,
              }}>
              {data.bottomCards[2].title}
            </Heading>
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
              <div>
                <Heading
                  variant={isActive(index) ? 2 : 4}
                  color={isActive(index) ? '#F2F3F7' : '#9198B0'}
                  style={{
                    marginTop: isActive(index) ? 20 : 20,
                    textAlign: 'left',
                  }}>
                  {card.title}
                </Heading>

                <div
                  style={{
                    marginTop: isActive(index) ? 10 : 0,
                    marginBottom: isActive(index) ? 0 : 30,
                  }}>
                  {card.bulletPoints.map((point: any, index2: number) => (
                    <>
                      <div>
                        <BodyDmsans
                          variant={isActive(index) ? 1 : 3}
                          color={isActive(index) ? '#F2F3F7' : '#9198B0'}
                          key={index2}
                          style={{
                            marginTop: '8px',
                            lineHeight: '2rem',
                          }}>
                          &bull; {point}
                        </BodyDmsans>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MagicMotion>
    </div>
  );
};
export default ThirdSection;
