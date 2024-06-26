import {
  Badge,
  Card,
  Col,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import {
  ArrowArcRight,
  ArrowCircleLeft,
  ArrowCircleRight,
} from '@phosphor-icons/react';
import TeamCard from 'components/about/teamCard';
import { Body, BodyBold, Heading } from 'components/typography';
import { useEffect, useState } from 'react';
import styles from 'styles/pages/about/index.module.scss';

const AboutUs = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // MOBILE AND DESKTOP
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 835) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [width]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleWindowSizeChange);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    };
  }, [width]);

  return (
    <>
      <div className={styles.topContainer}>
        <Container fluid p={0}>
          {isMobile ? (
            <Group
              position="center"
              w={'100%'}
              spacing={0}
              style={{ alignItems: 'flex-start' }}>
              <div className={styles.planetCard}>
                <Image
                  src={'/aboutPlanet4.png'}
                  alt="About Planet"
                  // mt={'-160px'}
                />
              </div>
              <div className={styles.planetTextCont}>
                <div className={styles.planetTextCard}>
                  <div className={styles.textCard}></div>
                  <Heading
                    variant={4}
                    fs={isMobile && 18}
                    style={{ marginBottom: '16px' }}
                    color="#F2F3F7">
                    Welcome to WolfPlanet
                  </Heading>
                  <Heading variant={8} fs={isMobile && 36} color="#F2F3F7">
                    Where Something
                  </Heading>
                  <Heading
                    variant={8}
                    fs={isMobile && 36}
                    style={{ marginBottom: '24px' }}
                    color="#F2F3F7">
                    Meets <span style={{ color: '#4178FA' }}>Excellence!</span>{' '}
                  </Heading>
                  <BodyBold
                    variant={1}
                    fs={18}
                    style={{ marginBottom: '16px' }}
                    color="#F2F3F7">
                    At WolfPlanet, we believe that banking should be more than
                    just transactions. It should be an experience that empowers
                    individuals and businesses to thrive and reach their
                    financial goals. As a trusted financial institution, we are
                    committed to delivering exceptional banking services that go
                    beyond expectations. With a focus on innovation,
                    personalized solutions, and unwavering integrity, we strive
                    to provide the best banking experience for our valued
                    customers. Join us on this exciting journey and discover a
                    new level of banking excellence.
                  </BodyBold>
                </div>
              </div>
            </Group>
          ) : (
            <Group
              position="center"
              w={'100%'}
              spacing={0}
              style={{ alignItems: 'flex-start' }}>
              <div className={styles.planetTextCont}>
                <div className={styles.planetTextCard}>
                  <div className={styles.textCard}></div>
                  <Heading
                    variant={4}
                    style={{ marginBottom: '16px' }}
                    color="#F2F3F7">
                    Welcome to WolfPlanet
                  </Heading>
                  <Heading variant={8} color="#F2F3F7">
                    Where Something
                  </Heading>
                  <Heading
                    variant={8}
                    style={{ marginBottom: '24px' }}
                    color="#F2F3F7">
                    Meets <span style={{ color: '#4178FA' }}>Excellence!</span>{' '}
                  </Heading>
                  <BodyBold
                    variant={1}
                    fs={18}
                    style={{ marginBottom: '16px' }}
                    color="#F2F3F7">
                    At WolfPlanet, we believe that banking should be more than
                    just transactions. It should be an experience that empowers
                    individuals and businesses to thrive and reach their
                    financial goals. As a trusted financial institution, we are
                    committed to delivering exceptional banking services that go
                    beyond expectations. With a focus on innovation,
                    personalized solutions, and unwavering integrity, we strive
                    to provide the best banking experience for our valued
                    customers. Join us on this exciting journey and discover a
                    new level of banking excellence.
                  </BodyBold>
                </div>
              </div>

              <div className={styles.planetCard}>
                <Image src={'/aboutPlanet3.png'} alt="About Planet" />
              </div>
            </Group>
          )}
        </Container>
      </div>
      <div className={styles.middleContainer}>
        <Stack align="center" maw={'850px'}>
          <Stack align="center" px={'36px'} w={isMobile ? '278px' : 'auto'}>
            <Heading
              variant={8}
              fs={isMobile ? 36 : 40}
              style={{ marginBottom: '16px', textAlign: 'center' }}>
              Meet the Wolf Team
            </Heading>
            <BodyBold
              variant={1}
              fs={isMobile ? 20 : 18}
              color="#9198B0"
              style={{ textAlign: 'center' }}>
              At Estatein, our success is driven by the dedication and expertise
              of our team. Get to know the people behind our mission to make
              your real estate dreams a reality.
            </BodyBold>
          </Stack>

          <SimpleGrid
            mt={80}
            cols={4}
            spacing="lg"
            breakpoints={[{ maxWidth: 835, cols: 1 }]}>
            <TeamCard
              image={'/aboutImg1.png'}
              name={'Max Mitchell'}
              title={'Founder'}
            />
            <TeamCard
              image={'/aboutImg2.png'}
              name={'Max Mitchell'}
              title={'Founder'}
            />
            <TeamCard
              image={'/aboutImg3.png'}
              name={'Max Mitchell'}
              title={'Founder'}
            />
            <TeamCard
              image={'/aboutImg4.png'}
              name={'Max Mitchell'}
              title={'Founder'}
            />
          </SimpleGrid>
        </Stack>
      </div>
      <div className={styles.botContainer}>
        <Stack align="center">
          {/* {isMobile ? } */}
          <Group spacing={'62px'}>
            <Stack spacing={'11px'} w={'403px'}>
              <Heading variant={8} color="white">
                Our values
              </Heading>
              <BodyBold variant={1} fs={18} color="#9198B0">
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary.
              </BodyBold>
            </Stack>
            <Card
              p={'32px'}
              w={'370px'}
              bg={'#272935'}
              radius={16}
              className={styles.card}>
              <Stack spacing={'20px'}>
                <Group spacing={'11px'}>
                  <Image src={'/shield.png'} maw={'56px'} alt="Trust Icon" />
                  <Heading variant={2} fs={18.7} color="white">
                    Trust
                  </Heading>
                </Group>
                <BodyBold variant={1} fs={12.4} color="#9198B0">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </BodyBold>
              </Stack>
              <Divider my={'23px'} color="#3E404E" />
              <Stack spacing={'20px'}>
                <Group spacing={'11px'}>
                  <Image src={'/star.png'} maw={'56px'} alt="Excellence Icon" />
                  <Heading variant={2} fs={18.7} color="white">
                    Excellence
                  </Heading>
                </Group>
                <BodyBold variant={1} fs={12.4} color="#9198B0">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </BodyBold>
              </Stack>
              <Divider my={'23px'} color="#3E404E" />
              <Stack spacing={'20px'}>
                <Group spacing={'11px'}>
                  <Image
                    src={'/people.png'}
                    maw={'56px'}
                    alt="Transparency Icon"
                  />
                  <Heading variant={2} fs={18.7} color="white">
                    Transparency
                  </Heading>
                </Group>
                <BodyBold variant={1} fs={12.4} color="#9198B0">
                  Transparency is at the heart of everything we do.
                </BodyBold>
              </Stack>
            </Card>
          </Group>
        </Stack>
      </div>
    </>
  );
};

export default AboutUs;
