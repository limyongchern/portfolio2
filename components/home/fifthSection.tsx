import styles from './fifthSection.module.scss';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { MagicMotion } from 'react-magic-motion';

const FifthSection = ({ data }: any) => {
  const router = useRouter();
  const [currentCard, setCurrentCard] = useState(2);

  const isActive = (index: number) => {
    return index === currentCard;
  };

  const getHeight = (index: number) => {
    if (router.locale !== 'en') {
      return 80;
    } else if (router.locale === 'en' && !isActive(index)) {
      return 120;
    } else {
      return 65;
    }
  };

  return (
    <div className={styles.fifthSection} style={{}}>
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
                  height: getHeight(index),
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                {' '}
                {router.locale === 'en' ? (
                  <>
                    <Heading
                      variant={isActive(index) ? 3 : 3}
                      color="white"
                      className={styles.activeTitle}
                      style={{}}>
                      {item.title}
                    </Heading>
                    <BodyDmsans
                      variant={isActive(index) ? 1 : 1}
                      color="#9198B0"
                      className={
                        isActive(index)
                          ? styles.activeDescription
                          : styles.nonActiveDescription
                      }
                      style={{ marginTop: 5 }}>
                      {item.description}
                    </BodyDmsans>
                  </>
                ) : (
                  <>
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
                  </>
                )}
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
