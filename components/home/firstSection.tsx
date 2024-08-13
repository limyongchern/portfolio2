import styles from './firstSection.module.scss';
import { Body, BodyBold } from 'components/typography';
import Image from 'next/image';

const FirstSection = ({ data }: any) => {
  return (
    <>
      <div id="first-section" className={styles.container}>
        <div className={styles.widthContainer}>
          <span
            style={{
              textAlign: 'start',
              marginBottom: 230,
              marginLeft: 60,
            }}>
            <BodyBold color="#F2F3F7" variant={11} style={{ marginTop: 0 }}>
              {data.headline1}
            </BodyBold>
            <BodyBold
              color="#F2F3F7"
              variant={11}
              style={{ marginTop: 0, width: 620, whiteSpace: 'nowrap' }}>
              {data.headline2}
            </BodyBold>
            <Body
              color="#9198B0"
              variant={8}
              style={{ marginTop: 15, width: 550 }}>
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

export default FirstSection;
