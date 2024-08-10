import styles from './home.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Body, BodyBold } from 'components/typography';
import { MagicTabSelect } from 'react-magic-motion';
import { CaretUp, CaretDown } from '@phosphor-icons/react';

const FourthMobileSection = ({ data }: any) => {
  const [selectedImage, setSelectedImage] = useState(
    data.cardsContent[0].image
  );
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) setSelectedImage(data.cardsContent[hoveredIndex].image);
  }, [hoveredIndex, isMounted, data.cardsContent]);

  const tabsComponents = data.cardsContent.map((item: any, i: number) => {
    return (
      <button
        key={item.id}
        onMouseEnter={() => setHoveredIndex(i)}
        className={styles.buttonsContainer}
        style={{
          background:
            hoveredIndex != i
              ? 'none'
              : 'linear-gradient(180deg, #3e404e 0%, #272935 100%)',
          backdropFilter: 'blur(20px)',
        }}>
        {hoveredIndex === i && (
          <span
            style={{
              borderRadius: '16px',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              // background:
              //   'var(--neutral-glass-1-add-blur, rgba(255, 255, 255, 0.12))',
            }}
          />
        )}
        {/* <BodyBold variant={2} color="white" className={styles.cardTitle3}>
          {item.title}
        </BodyBold> */}
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Body variant={10} color="white" className={styles.cardTitle3}>
            {item.title}
          </Body>
          {hoveredIndex === i ? (
            <CaretUp
              style={{ cursor: 'not-allowed' }}
              width={'32px'}
              height={'32px'}
              color="white"
            />
          ) : (
            <CaretDown
              style={{ cursor: 'not-allowed' }}
              width={'32px'}
              height={'32px'}
              color="white"
            />
          )}
        </div>

        {hoveredIndex === i && (
          <>
            {item.content.map((content: string, i: number) => (
              <Body
                variant={1}
                color="#9198B0"
                key={i}
                style={{ marginTop: '8px', lineHeight: '2rem' }}>
                <li>{content}</li>
              </Body>
            ))}
          </>
        )}
      </button>
    );
  });

  return (
    <div
      className={styles.fourthSection}
      style={{ backgroundColor: '#272935' }}>
      <BodyBold
        variant={3}
        color="white"
        style={{ marginBottom: '-240px', padding: '0px 20px' }}>
        {data.headline}
      </BodyBold>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div className={styles.selectedImageContainer} style={{}}>
          <Image
            src={selectedImage}
            className={styles.selectedImage}
            alt="temp-image"
          />
        </div>
        {isMounted && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              margin: '0.75rem 0',
            }}>
            {tabsComponents}
          </div>
        )}
      </div>
    </div>
  );
};

export default FourthMobileSection;
