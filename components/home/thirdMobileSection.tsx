import Image from 'next/image';
import { Card, UnstyledButton } from '@mantine/core';
import { Body, BodyBold } from 'components/typography';
import styles from './thirdSection.module.scss';
import { MagicMotion } from 'react-magic-motion';
import { useState } from 'react';

const ThirdMobileSection = ({ data }: any) => {
  const [currentCard, setCurrentCard] = useState(0);

  const isActive = (index: number) => {
    return index === currentCard;
  };

  return (
    <div className={styles.outerContainerMobile}>
      <BodyBold
        variant={3}
        color="white"
        style={{
          marginBottom: '0px',
          textAlign: 'center',
          padding: '0px 20px',
        }}>
        {data.headline}
      </BodyBold>
      <div className={styles.cardsContainerMobile}>
        {data.cards.map((card: any, index: number) => (
          <Card className={styles.card} key={index}>
            <Image
              src={card.logo}
              alt="card icon"
              width={56}
              height={56}
              color={'#9198B0'}
            />
            <div>
              <BodyBold variant={2} color="#F2F3F7">
                {card.title}
              </BodyBold>
              <ul
                className="custom-list"
                style={{ marginTop: 0, marginLeft: -15 }}>
                {card.bulletPoints.map((point: any, index: number) => (
                  <Body
                    variant={2}
                    color="#F2F3F7"
                    key={index}
                    style={{
                      marginTop: '5px',
                      lineHeight: '2rem',
                      width: 200,
                    }}>
                    <li>{point}</li>
                  </Body>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
      {/* <div className={styles.illustrationContainer}>
        {data.bottomCards.map((card: any, index: number) => (
          <div className={styles.illustrationSection} key={index}>
            <Image
              src={card.image}
              alt="card icon"
              className={styles.illustration}
            />
            <BodyBold variant={2} color="#F2F3F7" style={{ marginTop: 40 }}>
              {card.title}
            </BodyBold>
            <div style={{ marginTop: 0, marginBottom: 30 }}>
              {card.bulletPoints.map((point: any, index: number) => (
                <Body
                  variant={2}
                  color="#9198B0"
                  key={index}
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
      </div> */}
      <div style={{ display: 'flex', marginTop: 100, gap: 10 }}>
        <div className={styles.nav}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(0)}
            className={`${styles.link} ${isActive(0) ? styles.active : ''}`}>
            <BodyBold
              variant={1}
              color="#F2F3F7"
              className={`${isActive(0) ? styles.active : ''}`}>
              新手投资者
            </BodyBold>
          </UnstyledButton>
        </div>
        <div className={styles.nav}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(1)}
            className={`${styles.link} ${isActive(1) ? styles.active : ''}`}>
            <BodyBold
              variant={1}
              color="#F2F3F7"
              className={`${isActive(1) ? styles.active : ''}`}>
              专业投资者
            </BodyBold>
          </UnstyledButton>
        </div>
      </div>

      <MagicMotion transition={{ type: 'ease' }}>
        <div className={styles.illustrationContainer}>
          <>
            <Image
              src={data.bottomCards[currentCard].image}
              alt="card icon"
              className={styles.illustrationMobile}
            />
            <div style={{ marginTop: 0 }}>
              {data.bottomCards[currentCard].bulletPoints.map(
                (point: any, index2: number) => (
                  <Body
                    variant={1}
                    key={index2}
                    color={'#F2F3F7'}
                    style={{
                      marginTop: '8px',
                      lineHeight: '2rem',
                    }}>
                    <li>{point}</li>
                  </Body>
                )
              )}
            </div>
          </>
        </div>
      </MagicMotion>
    </div>
  );
};
export default ThirdMobileSection;
