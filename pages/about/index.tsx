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
  ArrowLeft,
  ArrowRight,
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
              w={'100%'}
              spacing={0}
              style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
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
              fs={isMobile ? 18 : 20}
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
              image={'/Image1.png'}
              name={'Max Mitchell'}
              title={'Founder'}
            />
            <TeamCard
              image={'/Image2.png'}
              name={'Max Mitchell'}
              title={'Founder'}
            />
            <TeamCard
              image={'/Image3.png'}
              name={'Max Mitchell'}
              title={'Founder'}
            />
            <TeamCard
              image={'/Image4.png'}
              name={'Max Mitchell'}
              title={'Founder'}
            />
          </SimpleGrid>
        </Stack>
      </div>
      <div className={styles.botContainer}>
        <Stack align="center">
          {isMobile ? (
            <Stack justify="center" spacing={isMobile ? '80px' : '62px'}>
              <Stack
                justify="center"
                spacing={'11px'}
                w={isMobile ? '350px' : '403px'}
                style={{ textAlign: 'center' }}>
                <Heading variant={8} fs={isMobile ? 36 : 40} color="white">
                  Our values
                </Heading>
                <BodyBold variant={1} fs={18} color="#9198B0">
                  Our story is one of continuous growth and evolution. We
                  started as a small team with big dreams, determined to create
                  a real estate platform that transcended the ordinary.
                </BodyBold>
              </Stack>
              <Card
                p={isMobile ? '42px' : '32px'}
                w={isMobile ? '352px' : '370px'}
                bg={'#272935'}
                radius={isMobile ? 12 : 16}
                className={styles.card}>
                <Stack spacing={'20px'}>
                  <Group spacing={'11px'}>
                    <Image
                      src={'/shield.png'}
                      maw={isMobile ? '72px' : '56px'}
                      alt="Trust Icon"
                    />
                    <Heading
                      variant={2}
                      fs={isMobile ? 24 : 18.7}
                      color="white">
                      Trust
                    </Heading>
                  </Group>
                  <BodyBold
                    variant={1}
                    fs={isMobile ? 16 : 12.4}
                    color="#9198B0">
                    Trust is the cornerstone of every successful real estate
                    transaction.
                  </BodyBold>
                </Stack>
                <Divider my={'23px'} color="#3E404E" />
                <Stack spacing={'20px'}>
                  <Group spacing={'11px'}>
                    <Image
                      src={'/star.png'}
                      maw={isMobile ? '72px' : '56px'}
                      alt="Excellence Icon"
                    />
                    <Heading
                      variant={2}
                      fs={isMobile ? 24 : 18.7}
                      color="white">
                      Excellence
                    </Heading>
                  </Group>
                  <BodyBold
                    variant={1}
                    fs={isMobile ? 16 : 12.4}
                    color="#9198B0">
                    We set the bar high for ourselves. From the properties we
                    list to the services we provide.
                  </BodyBold>
                </Stack>
                <Divider my={'23px'} color="#3E404E" />
                <Stack spacing={'20px'}>
                  <Group spacing={'11px'}>
                    <Image
                      src={'/people.png'}
                      maw={isMobile ? '72px' : '56px'}
                      alt="Client-Centric Icon"
                    />
                    <Heading
                      variant={2}
                      fs={isMobile ? 24 : 18.7}
                      color="white">
                      Client-Centric
                    </Heading>
                  </Group>
                  <BodyBold
                    variant={1}
                    fs={isMobile ? 16 : 12.4}
                    color="#9198B0">
                    Your dreams and needs are at the center of our universe. We
                    listen, understand.
                  </BodyBold>
                </Stack>
              </Card>
            </Stack>
          ) : (
            <Group spacing={'62px'}>
              <Stack spacing={'11px'} w={'403px'}>
                <Heading variant={8} color="white">
                  Our values
                </Heading>
                <BodyBold variant={1} fs={18} color="#9198B0">
                  Our story is one of continuous growth and evolution. We
                  started as a small team with big dreams, determined to create
                  a real estate platform that transcended the ordinary.
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
                    <Image
                      src={'/shield.png'}
                      maw={isMobile ? '72px' : '56px'}
                      alt="Trust Icon"
                    />
                    <Heading
                      variant={2}
                      fs={isMobile ? 24 : 18.7}
                      color="white">
                      Trust
                    </Heading>
                  </Group>
                  <BodyBold
                    variant={1}
                    fs={isMobile ? 16 : 12.4}
                    color="#9198B0">
                    Trust is the cornerstone of every successful real estate
                    transaction.
                  </BodyBold>
                </Stack>
                <Divider my={'23px'} color="#3E404E" />
                <Stack spacing={'20px'}>
                  <Group spacing={'11px'}>
                    <Image
                      src={'/star.png'}
                      maw={'56px'}
                      alt="Excellence Icon"
                    />
                    <Heading variant={2} fs={18.7} color="white">
                      Excellence
                    </Heading>
                  </Group>
                  <BodyBold
                    variant={1}
                    fs={isMobile ? 16 : 12.4}
                    color="#9198B0">
                    We set the bar high for ourselves. From the properties we
                    list to the services we provide.
                  </BodyBold>
                </Stack>
                <Divider my={'23px'} color="#3E404E" />
                <Stack spacing={'20px'}>
                  <Group spacing={'11px'}>
                    <Image
                      src={'/people.png'}
                      maw={'56px'}
                      alt="Client-Centric Icon"
                    />
                    <Heading variant={2} fs={18.7} color="white">
                      Client-Centric
                    </Heading>
                  </Group>
                  <BodyBold
                    variant={1}
                    fs={isMobile ? 16 : 12.4}
                    color="#9198B0">
                    Your dreams and needs are at the center of our universe. We
                    listen, understand.
                  </BodyBold>
                </Stack>
              </Card>
            </Group>
          )}

          <Stack mt={isMobile ? '80px' : '150px'} align="center">
            <Stack
              spacing={'10px'}
              align="center"
              w={isMobile ? '278px' : 'auto'}
              style={{ textAlign: 'center' }}>
              <Heading variant={8} fs={isMobile ? 36 : 40} color="#F2F3F7">
                Press Releases
              </Heading>
              <BodyBold
                variant={1}
                color="#9198B0"
                fs={18}
                style={{
                  textAlign: 'center',
                  padding: isMobile ? '0' : '0px 36px',
                  // width: isMobile ? '350px' : '779px',
                }}>
                Stay updated with the latest happenings and exciting
                developments at WolfPlanet through our press releases.
              </BodyBold>
            </Stack>
            <Group py={'47px'} spacing={'28px'} noWrap>
              {isMobile ? (
                <Card
                  p={'24px'}
                  bg="#272935"
                  radius={'16px'}
                  withBorder
                  className={styles.bordercard}
                  w={'350px'}>
                  <Stack spacing={'40px'}>
                    <Image
                      src={'/pressImg1.png'}
                      width={'100%'}
                      alt="Press Release 1"
                    />
                    <Stack spacing={'14px'} align="center">
                      <Heading
                        variant={3}
                        color="#F2F3F7"
                        fs={18}
                        style={{ textAlign: 'center', padding: '0px 24px' }}>
                        WolfPlanet Launches New Rewards Program to Enhance
                        Customer Loyalty and Satisfaction
                      </Heading>
                      <Group position="apart" noWrap w={'100%'} pb={'24px'}>
                        <div className={styles.badge}>
                          <BodyBold variant={1} fs={14} color="#FEFEFEFE">
                            Location: India
                          </BodyBold>
                        </div>
                        <div className={styles.badge}>
                          <BodyBold variant={1} fs={14} color="#FEFEFEFE">
                            Date: 28/12/2024
                          </BodyBold>
                        </div>
                      </Group>
                      <BodyBold
                        variant={1}
                        fs={14}
                        color="#9198B0"
                        style={{ textAlign: 'center', padding: '0px 24px' }}>
                        WolfPlanet is pleased to announce the introduction of
                        our new Rewards Program, aimed at rewarding our loyal
                        customers and enhancing their banking experience. The
                        program offers exclusive benefits, discounts, and
                        personalized offers tailored to individual customer
                        preferences. With this initiative, WolfPlanet reaffirms
                        its commitment to delivering exceptional value and
                        building lasting relationships with our valued
                        customers.
                      </BodyBold>
                    </Stack>
                  </Stack>
                </Card>
              ) : (
                <>
                  <Card p={'33px'} bg="#272935" radius={'16px'} w={'403px'}>
                    <Stack spacing={'40px'}>
                      <Image
                        src={'/pressImg1.png'}
                        width={'100%'}
                        alt="Press Release 1"
                      />
                      <Stack spacing={'11px'} align="center" px={'18px'}>
                        <Heading
                          variant={3}
                          color="#F2F3F7"
                          style={{ textAlign: 'center' }}>
                          WolfPlanet Launches New Rewards Program to Enhance
                          Customer Loyalty and Satisfaction
                        </Heading>
                        <Group position="apart" noWrap w={'100%'}>
                          <div className={styles.badge}>
                            <BodyBold variant={1} fs={15} color="#FEFEFEFE">
                              Location: India
                            </BodyBold>
                          </div>
                          <div className={styles.badge}>
                            <BodyBold variant={1} fs={15} color="#FEFEFEFE">
                              Date: 28/12/2024
                            </BodyBold>
                          </div>
                        </Group>
                        <BodyBold variant={1} fs={16} color="#9198B0">
                          WolfPlanet is pleased to announce the introduction of
                          our new Rewards Program, aimed at rewarding our loyal
                          customers and enhancing their banking experience. The
                          program offers exclusive benefits, discounts, and
                          personalized offers tailored to individual customer
                          preferences. With this initiative, WolfPlanet
                          reaffirms its commitment to delivering exceptional
                          value and building lasting relationships with our
                          valued customers.
                        </BodyBold>
                      </Stack>
                    </Stack>
                  </Card>
                  <Card p={'33px'} bg="#272935" radius={'16px'} w={'403px'}>
                    <Stack spacing={'40px'}>
                      <Image
                        src={'/pressImg2.png'}
                        width={'100%'}
                        alt="Press Release 2"
                      />
                      <Stack spacing={'11px'} align="center" px={'18px'}>
                        <Heading
                          variant={3}
                          color="#F2F3F7"
                          style={{ textAlign: 'center' }}>
                          WolfPlanet Launches New Rewards Program to Enhance
                          Customer Loyalty and Satisfaction
                        </Heading>
                        <Group position="apart" noWrap w={'100%'}>
                          <div className={styles.badge}>
                            <BodyBold variant={1} fs={15} color="#FEFEFEFE">
                              Location: India
                            </BodyBold>
                          </div>
                          <div className={styles.badge}>
                            <BodyBold variant={1} fs={15} color="#FEFEFEFE">
                              Date: 28/12/2024
                            </BodyBold>
                          </div>
                        </Group>
                        <BodyBold variant={1} fs={16} color="#9198B0">
                          WolfPlanet is pleased to announce the introduction of
                          our new Rewards Program, aimed at rewarding our loyal
                          customers and enhancing their banking experience. The
                          program offers exclusive benefits, discounts, and
                          personalized offers tailored to individual customer
                          preferences. With this initiative, WolfPlanet
                          reaffirms its commitment to delivering exceptional
                          value and building lasting relationships with our
                          valued customers.
                        </BodyBold>
                      </Stack>
                    </Stack>
                  </Card>
                </>
              )}
            </Group>
          </Stack>
          <Divider pb={'15px'} color="rgba(145, 152, 176, 0.50)" w={'100%'} />
          <Group position="apart" w={'100%'} align="start">
            <Body variant={3} color="#9198B0">
              <span style={{ color: '#F2F3F7' }}>
                {currentPage.toString().padStart(2, '0')}
              </span>{' '}
              of 10
            </Body>
            <Group spacing={'10px'}>
              {currentPage === 1 ? (
                <ArrowCircleLeft color="#9198B080" size={45} />
              ) : isMobile ? (
                <UnstyledButton onClick={() => setCurrentPage(currentPage - 1)}>
                  <ArrowLeft color="#9198B080" size={30} />
                </UnstyledButton>
              ) : (
                <UnstyledButton onClick={() => setCurrentPage(currentPage - 1)}>
                  <ArrowCircleLeft color="#272935" size={45} weight="fill" />
                </UnstyledButton>
              )}
              {currentPage === 10 ? (
                <ArrowCircleRight color="#9198B080" size={45} />
              ) : isMobile ? (
                <UnstyledButton onClick={() => setCurrentPage(currentPage + 1)}>
                  <ArrowRight color="#9198B080" size={30} />
                </UnstyledButton>
              ) : (
                <UnstyledButton onClick={() => setCurrentPage(currentPage + 1)}>
                  <ArrowCircleRight color="#272935" size={45} weight="fill" />
                </UnstyledButton>
              )}
            </Group>
          </Group>
        </Stack>
      </div>
    </>
  );
};

export default AboutUs;
