import { Card, Image } from '@mantine/core';
import styles from 'styles/pages/about/index.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.topContainer}>
      <div className={styles.planetCard}>
        <Image src={'/aboutPlanet.png'} />
      </div>
    </div>
  );
};

export default AboutUs;
