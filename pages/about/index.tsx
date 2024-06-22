import { Card, Image } from '@mantine/core';
import { Body } from 'components/typography';
import styles from 'styles/pages/about/index.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.planetCard}>
        <Image src={'/aboutPlanet3.png'} />
      </div>
    </div>
  );
};

export default AboutUs;
