import Image from 'next/image';
import { useRouter } from 'next/router';
import { Card, UnstyledButton } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import styles from './thirdSection.module.scss';
import { MagicMotion } from 'react-magic-motion';
import { useState } from 'react';

const ThirdMobileSection = ({ data }: any) => {
  const router = useRouter();
  const [currentCard, setCurrentCard] = useState(0);

  const isActive = (index: number) => {
    return index === currentCard;
  };

  return (
    <div className={styles.outerContainerMobile}>
      {router.locale === 'en' ? (
        <Heading
          variant={2}
          color="white"
          style={{
            marginBottom: '0px',
            textAlign: 'center',
            padding: '0px 20px',
          }}>
          {data.headline}
        </Heading>
      ) : (
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
      )}

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
              {router.locale === 'en' ? (
                <Heading variant={4} color="#F2F3F7">
                  {card.title}
                </Heading>
              ) : (
                <BodyBold variant={2} color="#F2F3F7">
                  {card.title}
                </BodyBold>
              )}

              <ul
                className="custom-list"
                style={{ marginTop: 10, marginLeft: -35 }}>
                {card.bulletPoints.map((point: any, index: number) => (
                  <>
                    {router.locale === 'en' ? (
                      <BodyDmsans
                        variant={6}
                        color="#9198B0"
                        key={index}
                        style={{
                          marginTop: '3px',
                          // lineHeight: '2rem',
                          width: 220,
                        }}>
                        &bull; {point}
                      </BodyDmsans>
                    ) : (
                      <Body
                        variant={2}
                        color="#9198B0"
                        key={index}
                        style={{
                          marginTop: '5px',
                          lineHeight: '2rem',
                          width: 220,
                        }}>
                        &middot;{point}
                      </Body>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </Card>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: 100, gap: 10 }}>
        <div className={styles.nav}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(0)}
            className={`${styles.link} ${isActive(0) ? styles.active : ''}`}>
            {router.locale === 'en' ? (
              <Heading
                variant={4}
                style={{ color: isActive(0) ? '#F2F3F7' : '#9198B0' }}
                className={`${isActive(0) ? styles.active : ''}`}>
                {data.bottomCards[0].title}
              </Heading>
            ) : (
              <BodyBold
                variant={1}
                style={{ color: isActive(0) ? '#F2F3F7' : '#9198B0' }}
                className={`${isActive(0) ? styles.active : ''}`}>
                {data.bottomCards[0].title}
              </BodyBold>
            )}
          </UnstyledButton>
        </div>
        <div className={styles.nav}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(1)}
            className={`${styles.link} ${isActive(1) ? styles.active : ''}`}>
            {router.locale === 'en' ? (
              <Heading
                variant={4}
                style={{ color: isActive(1) ? '#F2F3F7' : '#9198B0' }}
                className={`${isActive(1) ? styles.active : ''}`}>
                {data.bottomCards[1].title}
              </Heading>
            ) : (
              <BodyBold
                variant={1}
                style={{ color: isActive(1) ? '#F2F3F7' : '#9198B0' }}
                className={`${isActive(1) ? styles.active : ''}`}>
                {data.bottomCards[1].title}
              </BodyBold>
            )}
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
                  <>
                    {router.locale === 'en' ? (
                      <div>
                        <BodyDmsans
                          variant={6}
                          key={index2}
                          color={'#F2F3F7'}
                          style={{
                            marginTop: '8px',
                            // lineHeight: '2rem',
                            transform: 'none',
                          }}>
                          &bull; {point}
                        </BodyDmsans>
                      </div>
                    ) : (
                      <div>
                        <Body
                          variant={1}
                          key={index2}
                          color={'#F2F3F7'}
                          style={{
                            marginTop: '8px',
                            lineHeight: '2rem',
                          }}>
                          &middot;{point}
                        </Body>
                      </div>
                    )}
                  </>
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
