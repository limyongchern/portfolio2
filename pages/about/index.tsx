import { Card, Container, Flex, Group, Image, Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';
import styles from 'styles/pages/about/index.module.scss';

const AboutUs = () => {
  return (
    <>
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
                  At WolfPlanet, we believe that banking should be more than
                  just transactions. It should be an experience that empowers
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
      <div className={styles.middleContainer}>
        <Stack align="center">
          <Heading variant={6} style={{ marginBottom: '16px' }}>
            Meet the Wolf Team
          </Heading>
          <Flex align={'center'} justify={'center'}>
            <Body variant={6} color="#9198B0" style={{ textAlign: 'center' }}>
              At Estatein, our success is driven by the dedication and expertise
              of our team. Get to know the people behind our mission to make
              your real estate dreams a reality.
            </Body>
          </Flex>
        </Stack>
      </div>
    </>
  );
};

export default AboutUs;
