import { Card, Container, Group, Image } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import styles from 'styles/pages/about/index.module.scss';

const AboutUs = () => {
  return (
    <div className={styles.topContainer}>
      <Container fluid>
        <Group
          position="center"
          w={'100%'}
          spacing={0}
          style={{ alignItems: 'flex-start' }}>
          <div className={styles.planetTextCont}>
            <div className={styles.planetTextCard} />
            <div className={styles.textCard}>
              <Body variant={6} style={{ marginBottom: '16px' }}>
                Welcome to WolfPlanet
              </Body>
              <Heading variant={6}>Where Something</Heading>
              <Heading variant={6} style={{ marginBottom: '24px' }}>
                Meets <span style={{ color: '#4178FA' }}>Excellence!</span>{' '}
              </Heading>
              <Body variant={6} style={{ marginBottom: '16px' }}>
                At WolfPlanet, we believe that banking should be more than just
                transactions. It should be an experience that empowers
                individuals and businesses to thrive and reach their financial
                goals. As a trusted financial institution, we are committed to
                delivering exceptional banking services that go beyond
                expectations. With a focus on innovation, personalized
                solutions, and unwavering integrity, we strive to provide the
                best banking experience for our valued customers. Join us on
                this exciting journey and discover a new level of banking
                excellence.
              </Body>
            </div>
          </div>

          <div className={styles.planetCard}>
            <Image src={'/aboutPlanet3.png'} />
          </div>
        </Group>
      </Container>
    </div>
  );
};

export default AboutUs;
