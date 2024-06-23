import {
  Badge,
  Card,
  Container,
  Divider,
  Flex,
  Group,
  Image,
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
import { useState } from 'react';
import styles from 'styles/pages/about/index.module.scss';

const AboutUs = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
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
                <Body variant={8} style={{ marginBottom: '16px' }}>
                  Welcome to WolfPlanet
                </Body>
                <Heading variant={8}>Where Something</Heading>
                <Heading variant={8} style={{ marginBottom: '24px' }}>
                  Meets <span style={{ color: '#4178FA' }}>Excellence!</span>{' '}
                </Heading>
                <Body variant={8} style={{ marginBottom: '16px' }}>
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
        <Stack align="center" maw={'1080px'}>
          <Heading variant={8} style={{ marginBottom: '16px' }}>
            Meet the Wolf Team
          </Heading>
          <Flex align={'center'} justify={'center'}>
            <Body variant={8} color="#9198B0" style={{ textAlign: 'center' }}>
              At Estatein, our success is driven by the dedication and expertise
              of our team. Get to know the people behind our mission to make
              your real estate dreams a reality.
            </Body>
          </Flex>
          <Group mt={80} position="apart" w={'100%'}>
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
          </Group>
        </Stack>
      </div>
      <div className={styles.botContainer}>
        <Stack align="center">
          <Group spacing={80}>
            <Stack spacing={14} w={'600px'}>
              <Heading variant={8} color="white">
                Our values
              </Heading>
              <BodyBold variant={1} color="#9198B0">
                Our story is one of continuous growth and evolution. We started
                as a small team with big dreams, determined to create a real
                estate platform that transcended the ordinary.
              </BodyBold>
            </Stack>
            <Card
              p={42}
              w={534}
              bg={'#272935'}
              radius={16}
              className={styles.card}>
              <Stack spacing={'20px'}>
                <Group>
                  <Image src={'/shield.png'} maw={'72px'} />
                  <Heading variant={2} color="white">
                    Trust
                  </Heading>
                </Group>
                <BodyBold variant={1} fs={16} color="#9198B0">
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </BodyBold>
              </Stack>
              <Divider my={'30px'} color="#3E404E" />
              <Stack spacing={'20px'}>
                <Group>
                  <Image src={'/star.png'} maw={'72px'} />
                  <Heading variant={2} color="white">
                    Excellence
                  </Heading>
                </Group>
                <BodyBold variant={1} fs={16} color="#9198B0">
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </BodyBold>
              </Stack>
              <Divider my={'30px'} color="#3E404E" />
              <Stack spacing={'20px'}>
                <Group>
                  <Image src={'/people.png'} maw={'72px'} />
                  <Heading variant={2} color="white">
                    Client-Centric
                  </Heading>
                </Group>
                <BodyBold variant={1} fs={16} color="#9198B0">
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </BodyBold>
              </Stack>
            </Card>
          </Group>
          <Stack mt={'150px'} align="center">
            <Stack spacing={'10px'} align="center">
              <Heading variant={8} color="#F2F3F7">
                Press Release
              </Heading>
              <BodyBold
                variant={1}
                color="#9198B0"
                style={{ textAlign: 'center', padding: '0px 36px' }}>
                Stay updated with the latest happenings and exciting
                developments at WolfPlanet through our press releases.
              </BodyBold>
            </Stack>
            <Group py={'60px'} spacing={'36px'} noWrap>
              <Card p={'42px'} bg="#272935" radius={'16px'} w={'520px'}>
                <Stack spacing={'40px'}>
                  <Image src={'/pressImg1.png'} width={'100%'} />
                  <Stack py={'24px'} spacing={'14px'} align="center">
                    <Heading variant={3} color="#F2F3F7">
                      WoldPlanet Launches New Rewards Program to Enhance
                      Customer Loyalty and Satisfaction
                    </Heading>
                    <Group spacing={'24px'}>
                      <div className={styles.badge}>
                        <BodyBold
                          variant={1}
                          fs={14}
                          color="#FEFEFEFE"
                          style={{ padding: '' }}>
                          Location: India
                        </BodyBold>
                      </div>
                      <div className={styles.badge}>
                        <BodyBold
                          variant={1}
                          fs={14}
                          color="#FEFEFEFE"
                          style={{ padding: '' }}>
                          Date: 28/12/2024
                        </BodyBold>
                      </div>
                    </Group>
                    <BodyBold variant={1} fs={16} color="#9198B0">
                      WolfPlanet is pleased to announce the introduction of our
                      new Rewards Program, aimed at rewarding our loyal
                      customers and enhancing their banking experience. The
                      program offers exclusive benefits, discounts, and
                      personalized offers tailored to individual customer
                      preferences. With this initiative, WolfPlanet reaffirms
                      its commitment to delivering exceptional value and
                      building lasting relationships with our valued customers.
                    </BodyBold>
                  </Stack>
                </Stack>
              </Card>
              <Card p={'42px'} bg="#272935" radius={'16px'} w={'520px'}>
                <Stack spacing={'40px'}>
                  <Image src={'/pressImg2.png'} width={'100%'} />
                  <Stack py={'24px'} spacing={'14px'} align="center">
                    <Heading variant={3} color="#F2F3F7">
                      WoldPlanet Launches New Rewards Program to Enhance
                      Customer Loyalty and Satisfaction
                    </Heading>
                    <Group spacing={'24px'}>
                      <div className={styles.badge}>
                        <BodyBold
                          variant={1}
                          fs={14}
                          color="#FEFEFEFE"
                          style={{ padding: '' }}>
                          Location: India
                        </BodyBold>
                      </div>
                      <div className={styles.badge}>
                        <BodyBold
                          variant={1}
                          fs={14}
                          color="#FEFEFEFE"
                          style={{ padding: '' }}>
                          Date: 28/12/2024
                        </BodyBold>
                      </div>
                    </Group>
                    <BodyBold variant={1} fs={16} color="#9198B0">
                      WolfPlanet is pleased to announce the introduction of our
                      new Rewards Program, aimed at rewarding our loyal
                      customers and enhancing their banking experience. The
                      program offers exclusive benefits, discounts, and
                      personalized offers tailored to individual customer
                      preferences. With this initiative, WolfPlanet reaffirms
                      its commitment to delivering exceptional value and
                      building lasting relationships with our valued customers.
                    </BodyBold>
                  </Stack>
                </Stack>
              </Card>
            </Group>
          </Stack>
          <Divider pb={'20px'} color="rgba(145, 152, 176, 0.50)" w={'100%'} />
          <Group position="apart" w={'100%'} align="start">
            <Body variant={1} color="#9198B0">
              <span style={{ color: '#F2F3F7' }}>
                {currentPage.toString().padStart(2, '0')}
              </span>{' '}
              of 10
            </Body>
            <Group spacing={'10px'}>
              {currentPage === 1 ? (
                <ArrowCircleLeft color="#9198B080" size={58} />
              ) : (
                <UnstyledButton onClick={() => setCurrentPage(currentPage - 1)}>
                  <ArrowCircleLeft color="#272935" size={58} weight="fill" />
                </UnstyledButton>
              )}
              {currentPage === 10 ? (
                <ArrowCircleRight color="#9198B080" size={58} />
              ) : (
                <UnstyledButton onClick={() => setCurrentPage(currentPage + 1)}>
                  <ArrowCircleRight color="#272935" size={58} weight="fill" />
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
