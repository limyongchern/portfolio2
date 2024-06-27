import BackgroundVideo from 'components/BackgroundVideo';
import styles from '../../styles/pages/index.module.scss';
import { Body, Heading } from 'components/typography';

const firstSection = () => {
  return (
    <>
      <div className={styles.video}>
        <BackgroundVideo />
      </div>
      {/* <div className={styles.section1}> */}
      <div className={styles.titleColumnMobile}>
        <Heading
          variant={0}
          color="#F2F3F7"
          fs={36}
          fw={700}
          style={{ paddingTop: '16px', lineHeight: 1.5 }}>
          Wolf Planet 星球：跨域投资交流平台
        </Heading>
        <Body variant={1} fw={700} className={styles.subheading}>
          Wolf Planet
          星球是基于区块链技术的去中心化投资交流平台，旨在为用户提供跨域、专业、高效的投资交流体验。
        </Body>
      </div>
      {/* </div> */}
    </>
  );
};

export default firstSection;
