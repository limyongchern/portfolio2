import BackgroundVideo from 'components/BackgroundVideo';
import styles from './firstSection.module.scss';

import { Body, BodyBold } from 'components/typography';
import Image from 'next/image';

const FirstMobileSection = ({ data }: any) => {
  return (
    <>
      <div id="first-section-mobile" className={styles.containerMobile}>
        <div className={styles.widthContainer}>
          <span
            style={{
              textAlign: 'center',

              // marginBottom: 230,
              // marginLeft: 90,
            }}>
            <BodyBold color="#F2F3F7" variant={7} style={{ marginTop: 80 }}>
              {data.headline1}
            </BodyBold>
            <BodyBold
              color="#F2F3F7"
              variant={7}
              style={{ marginTop: 0, padding: '0px 50px' }}>
              {data.headline2}
            </BodyBold>
            <Body
              color="#9198B0"
              variant={1}
              style={{ marginTop: 15, padding: '0px 35px' }}>
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

export default FirstMobileSection;
