import NFT from 'public/NFT.png';
import card4Icon from 'public/card4Icon.png';
import card2Icon from 'public/card2Icon.png';
import card1Icon from 'public/GlobeHemisphereWest.png';
import Image from 'next/image';
import { Body, Heading } from 'components/typography';
import styles from './thirdSection.module.scss';
import { Card, Flex, Stack } from '@mantine/core';

const ThirdMobileSection = ({ data }: any) => {
  return (
    <div className={styles.outerContainerMobile}>
      <Body
        variant={9}
        color="white"
        style={{ marginBottom: '0px', textAlign: 'center' }}>
        {data.headline}
      </Body>
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
              <Heading variant={1} color="#F2F3F7" fw={700}>
                {card.title}
              </Heading>
              <ul
                className="custom-list"
                style={{ marginTop: 20, marginLeft: -10 }}>
                {card.bulletPoints.map((point: any, index: number) => (
                  <Body
                    variant={1}
                    color="#9198B0"
                    key={index}
                    style={{
                      marginTop: '8px',
                      lineHeight: '2.2rem',
                      width: 220,
                    }}>
                    <li>{point}</li>
                  </Body>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
      <div className={styles.illustrationContainer}>
        {data.bottomCards.map((card: any, index: number) => (
          <div className={styles.illustrationSection} key={index}>
            <div className={styles.illustration}></div>
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
export default ThirdMobileSection;
