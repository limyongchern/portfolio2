import styles from './firstSection.module.scss';
import { useRouter } from 'next/router';

import { BodyDmsans, Heading } from 'components/typography';
import Image from 'next/image';
import HomeHeroImage from 'public/Home/Home-Hero-Image2.png';

const FirstMobileSection = ({ data }: any) => {
  const router = useRouter();
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
            <>
              <Heading color="#F2F3F7" variant={1} style={{ marginTop: 80 }}>
                {data.headline1}
              </Heading>
              <Heading
                color="#F2F3F7"
                variant={1}
                style={{ marginTop: 0, padding: '0px 30px' }}>
                {data.headline2}
              </Heading>

              <BodyDmsans
                color="#9198B0"
                variant={1}
                style={{ marginTop: 15, padding: '0px 35px' }}>
                {data.subheader}
              </BodyDmsans>
            </>
          </span>
          <Image
            src={HomeHeroImage}
            className={styles.homeHeroImagePhone}
            alt="wolfavatar"
          />
        </div>
      </div>
    </>
  );
};

export default FirstMobileSection;
