import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './community.module.scss';
import Image from 'next/image';

const SecondMobileSection = ({ data }: any) => {
  const router = useRouter();
  return (
    <div id="second-section" className={styles.containerSecondMobileSection}>
      <div className={styles.widthContainerSecondMobileSection}>
        <span style={{ marginBottom: '24px' }}>
          {router.locale === 'en' ? (
            <Heading color="#F2F3F7" variant={2}>
              {data.headline}
            </Heading>
          ) : (
            <BodyBold color="#F2F3F7" variant={3}>
              {data.headline}
            </BodyBold>
          )}
        </span>
        {router.locale === 'en' ? (
          <BodyDmsans
            color="#9198B0"
            variant={1}
            fs={'18px'}
            style={{ marginBottom: '36px', textAlign: 'justify' }}>
            {data.subheader}
          </BodyDmsans>
        ) : (
          <Body
            color="#9198B0"
            variant={1}
            fs={'18px'}
            style={{ textAlign: 'center', marginBottom: '36px' }}>
            {data.subheader}
          </Body>
        )}

        {data.cards.map((card: any, index: number) => (
          <>
            <Image
              src={card.image}
              alt="wolfavatar"
              className={`${styles[`daoCardImagesMobile${index + 1}`]}`}
            />
            <div className={styles.cardDarkMobileContainer} key={index}>
              {router.locale === 'en' ? (
                <>
                  <Heading color="#F2F3F7" variant={2}>
                    {card.title}
                  </Heading>
                  <BodyDmsans
                    color="#9198B0"
                    variant={1}
                    style={{ textAlign: 'justify' }}>
                    {card.description}
                  </BodyDmsans>
                </>
              ) : (
                <>
                  <BodyBold color="#F2F3F7" variant={7}>
                    {card.title}
                  </BodyBold>
                  <Body color="#9198B0" variant={1}>
                    {card.description}
                  </Body>
                </>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SecondMobileSection;
