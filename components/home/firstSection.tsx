import BackgroundVideo from 'components/BackgroundVideo';
import styles from './firstSection.module.scss';
import { Body, BodyBold } from 'components/typography';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const firstSection = ({ data }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 835) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [width]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    };
  }, [width]);

  return (
    <>
      <div id="first-section" className={styles.container}>
        <div className={styles.widthContainer}>
          <span
            style={{
              textAlign: isMobile ? 'center' : 'start',
              marginBottom: 100,
              marginLeft: -20,
            }}>
            <BodyBold color="#F2F3F7" variant={10} style={{ marginTop: 15 }}>
              {data.headline1}
            </BodyBold>
            <BodyBold
              color="#F2F3F7"
              variant={10}
              style={{ marginTop: 0, width: 620, whiteSpace: 'nowrap' }}>
              {data.headline2}
            </BodyBold>
            <Body
              color="#9198B0"
              variant={8}
              style={{ marginTop: 15, width: 520 }}>
              {data.subheader}
            </Body>
          </span>
          <Image
            src={data.homeHeroImage}
            className={styles.homeHeroImage}
            alt="wolfavatar"
          />
        </div>
      </div>
    </>
  );
};

export default firstSection;
