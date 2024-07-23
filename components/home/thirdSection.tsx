import NFT from 'public/NFT.png';
import card4Icon from 'public/card4Icon.png';
import card2Icon from 'public/card2Icon.png';
import card1Icon from 'public/GlobeHemisphereWest.png';
import Image from 'next/image';
import { Body, Heading } from 'components/typography';
import styles from './thirdSection.module.scss';
import { Card, Flex, Stack } from '@mantine/core';

const ThirdSection = ({ data }: any) => {
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
                    color="#9198B0"
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
      <div className={styles.illustrationContainer}>
        {data.bottomCards.map((card: any, index: number) => (
          <div className={styles.illustrationSection} key={index}>
            <Image
              src={card.image}
              alt="card icon"
              className={styles.illustration}
            />
            <Body variant={10} color="#F2F3F7" style={{ marginTop: 20 }}>
              {card.title}
            </Body>
            <div style={{ marginTop: 0 }}>
              {card.bulletPoints.map((point: any, index: number) => (
                <Body
                  variant={1}
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
      </div>
    </div>
  );
};
export default ThirdSection;
