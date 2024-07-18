import BackgroundVideo from 'components/BackgroundVideo';
import styles from './home.module.scss';
import { Body, Heading } from 'components/typography';

const firstSection = ({ data }: any) => {
  return (
    <>
      <div className={styles.video}>
        <BackgroundVideo />
      </div>
      <div style={{ padding: '32px' }}>
        <div className={styles.titleColumn}>
          <Body
            variant={9}
            color="#F2F3F7"
            fw={700}
            fs={40}
            style={{ paddingTop: '0px', lineHeight: 1.5 }}>
            {data.headline}
          </Body>
          <Body variant={8} className={styles.subheading}>
            {data.subheader}
          </Body>
        </div>
      </div>
    </>
  );
};

export default firstSection;
