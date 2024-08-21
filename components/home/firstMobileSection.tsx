import BackgroundVideo from 'components/BackgroundVideo';
import styles from './firstSection.module.scss';
import { useRouter } from 'next/router';

import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import Image from 'next/image';
import HomeHeroImage from 'public/Home/Home-Hero-Image.png';
import HomeHeroMascot from 'public/Home/Home-Hero-Mascot.png';

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
            {router.locale === 'en' ? (
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
            ) : (
              <>
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
              </>
            )}
          </span>
          <Image
            src={HomeHeroImage}
            className={styles.homeHeroImagePhone}
            alt="wolfavatar"
          />
          <Image
            src={HomeHeroMascot}
            className={styles.homeHeroMascot}
            alt="wolfavatar"
          />
          {/* <Image
            src={data.homeHeroImage}
            className={styles.homeHeroImage}
            alt="wolfavatar"
          /> */}
        </div>
      </div>
    </>
  );
};

export default FirstMobileSection;
