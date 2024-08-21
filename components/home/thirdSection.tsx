import Image from 'next/image';
import { useRouter } from 'next/router';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import styles from './thirdSection.module.scss';
import { Card, UnstyledButton } from '@mantine/core';
import { useState } from 'react';
import { MagicMotion } from 'react-magic-motion';

const ThirdSection = ({ data }: any) => {
  const router = useRouter();
  const [currentCard, setCurrentCard] = useState(0);

  const isActive = (index: number) => {
    return index === currentCard;
  };

  return (
    <div className={styles.outerContainer}>
      {router.locale === 'en' ? (
        <Heading variant={1} color="white">
          {data.headline}
        </Heading>
      ) : (
        <Body variant={9} color="white">
          {data.headline}
        </Body>
      )}

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
              {router.locale === 'en' ? (
                <Heading variant={3} color="white">
                  {card.title}
                </Heading>
              ) : (
                <BodyBold variant={4} color="#F2F3F7">
                  {card.title}
                </BodyBold>
              )}

              <div style={{ marginTop: 20 }}>
                {card.bulletPoints.map((point: any, index: number) => (
                  <>
                    {router.locale === 'en' ? (
                      <BodyDmsans
                        variant={1}
                        color="#9198B0"
                        key={index}
                        style={{
                          marginTop: '8px',
                          lineHeight: '2rem',
                          width: 320,
                        }}>
                        &bull; {point}
                      </BodyDmsans>
                    ) : (
                      <Body
                        variant={1}
                        color="#9198B0"
                        key={index}
                        style={{
                          marginTop: '8px',
                          lineHeight: '2rem',
                          width: 320,
                        }}>
                        &middot;{point}
                      </Body>
                    )}
                  </>
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
            {router.locale === 'en' ? (
              <Heading
                variant={2}
                className={`${isActive(0) ? styles.active : ''}`}
                style={{
                  color: isActive(0) ? '#F2F3F7' : '#9198B0',
                  paddingBottom: 2,
                }}>
                {data.bottomCards[0].title}
              </Heading>
            ) : (
              <BodyBold
                variant={4}
                className={`${isActive(0) ? styles.active : ''}`}
                style={{ color: isActive(0) ? '#F2F3F7' : '#9198B0' }}>
                {data.bottomCards[0].title}
              </BodyBold>
            )}
          </UnstyledButton>
        </div>
        <div className={styles.nav} onMouseEnter={() => setCurrentCard(1)}>
          <UnstyledButton
            key={'0'}
            onClick={() => setCurrentCard(1)}
            className={`${styles.link} ${isActive(1) ? styles.active : ''}`}>
            {router.locale === 'en' ? (
              <Heading
                variant={2}
                className={`${isActive(1) ? styles.active : ''}`}
                style={{
                  color: isActive(1) ? '#F2F3F7' : '#9198B0',
                  paddingBottom: 2,
                }}>
                {data.bottomCards[1].title}
              </Heading>
            ) : (
              <BodyBold
                variant={4}
                className={`${isActive(1) ? styles.active : ''}`}
                style={{ color: isActive(1) ? '#F2F3F7' : '#9198B0' }}>
                {data.bottomCards[1].title}
              </BodyBold>
            )}
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
              {router.locale === 'en' ? (
                <Heading
                  variant={isActive(index) ? 2 : 4}
                  color={isActive(index) ? '#F2F3F7' : '#9198B0'}
                  style={{ marginTop: isActive(index) ? 20 : 20 }}>
                  {card.title}
                </Heading>
              ) : (
                <BodyBold
                  variant={isActive(index) ? 4 : 6}
                  color={isActive(index) ? '#F2F3F7' : '#9198B0'}
                  style={{ marginTop: isActive(index) ? 20 : 20 }}>
                  {card.title}
                </BodyBold>
              )}

              <div
                style={{
                  marginTop: isActive(index) ? 10 : 0,
                  marginBottom: isActive(index) ? 0 : 30,
                }}>
                {card.bulletPoints.map((point: any, index2: number) => (
                  <>
                    {router.locale === 'en' ? (
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
                    ) : (
                      <Body
                        variant={isActive(index) ? 1 : 2}
                        color={isActive(index) ? '#F2F3F7' : '#9198B0'}
                        key={index2}
                        style={{
                          marginTop: '8px',
                          lineHeight: '2rem',
                        }}>
                        &middot;{point}
                      </Body>
                    )}
                  </>
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
