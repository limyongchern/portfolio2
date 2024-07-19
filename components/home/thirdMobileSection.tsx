import NFT from 'public/NFT.png';
import card4Icon from 'public/card4Icon.png';
import card2Icon from 'public/card2Icon.png';
import card1Icon from 'public/GlobeHemisphereWest.png';
import Image from 'next/image';
import { Body, BodyBold, Heading } from 'components/typography';
import styles from './thirdSection.module.scss';
import { Card, Flex, Stack } from '@mantine/core';

const ThirdMobileSection = ({ data }: any) => {
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
              <Body variant={7} color="#F2F3F7" fw={700}>
                {card.title}
              </Body>
              <ul
                className="custom-list"
                style={{ marginTop: 0, marginLeft: -15 }}>
                {card.bulletPoints.map((point: any, index: number) => (
                  <Body
                    variant={2}
                    color="#9198B0"
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
      <div className={styles.illustrationContainer}>
        {data.bottomCards.map((card: any, index: number) => (
          <div className={styles.illustrationSection} key={index}>
            <div className={styles.illustration}></div>
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
      </div>
    </div>
  );
};
export default ThirdMobileSection;
