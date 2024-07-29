import styles from './fifthSection.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { Body, BodyBold } from 'components/typography';
import { MagicMotion } from 'react-magic-motion';

const FifthSection = ({ data }: any) => {
  const [currentCard, setCurrentCard] = useState(0);

  const isActive = (index: number) => {
    return index === currentCard;
  };

  return (
    <div className={styles.fifthSection} style={{ backgroundColor: '#272935' }}>
      <Body variant={9} color="white" style={{ marginBottom: '-265px' }}>
        {data.headline}
      </Body>

      <MagicMotion transition={{ type: 'ease' }}>
        <div className={styles.cardsContainer}>
          {data.cards.map((item: any, index: number) => (
            <div
              className={
                isActive(index) ? styles.activeCard : styles.nonActiveCard
              }
              key={index}
              onClick={() => setCurrentCard(index)}
              onMouseEnter={() => setCurrentCard(index)}>
              <div
                style={{
                  marginTop: isActive(index) ? -160 : -130,
                  opacity: isActive(index) ? 1 : 0.5,
                  padding: isActive(index) ? '15px 0px' : '15px 15px',
                  height: 80,
                }}>
                {' '}
                <BodyBold
                  variant={isActive(index) ? 4 : 5}
                  color="white"
                  className={styles.activeTitle}>
                  {item.title}
                </BodyBold>
                <Body
                  variant={isActive(index) ? 8 : 3}
                  color="#9198B0"
                  className={
                    isActive(index)
                      ? styles.activeDescription
                      : styles.nonActiveDescription
                  }>
                  {item.description}
                </Body>
              </div>
              <Image
                src={item.image}
                className={
                  isActive(index) ? styles.activeImage : styles.nonActiveImage
                }
                style={{ opacity: isActive(index) ? 1 : 0.5 }}
                alt="phone-image"
              />
            </div>
          ))}
        </div>
      </MagicMotion>

      <div className={styles.bulletPoints}>
        {data.cards.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              height: 12,
              width: 12,
              borderRadius: 100,
              backgroundColor: index === currentCard ? '#9198B0' : '#3E404E',
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default FifthSection;
