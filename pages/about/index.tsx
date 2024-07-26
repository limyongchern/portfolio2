import {
  Badge,
  Card,
  Col,
  Container,
  Divider,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import Image from 'next/image';
import {
  ArrowArcRight,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowLeft,
  ArrowRight,
  Handshake,
  UsersThree,
  Star,
  CaretDoubleRight,
} from '@phosphor-icons/react';
import TeamCard from 'components/about/teamCard';
import { Body, BodyBold, Heading } from 'components/typography';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import AboutUsTempImage from 'public/TempImages/AboutUsTempImage.png';
import WholePlanet3 from 'public/Planet/wholeplanet3.png';

const AboutUsData = {
  about: '关于 WolfPlanet',
  wolfPlanet: 'WolfPlanet',
  from: '来自',
  description:
    '一天，一群富有创新和拼搏精神的萌狼们用精准的嗅觉发现了深藏于太空的投资机会，Wolf Planet投资社区应运而生。萌狼们汇聚于此，在贵金属、外汇、数字藏品等星球上探索前行，把握市场动向，共谋投资策略。从星际间的流浪者到星球上的指挥官，萌狼们不断成长，实现投资回报，书写太空投资社区新篇章。',
  ourMission: '我们的使命',
  ourMissionDescription:
    '运用区块链技术，为不同背景不同身份投资爱好者们创建一个跨地域、跨领域的交流、学习合作社区，以促进相互交流及知识共享。我们将提供平等的沟通环境，实时的资讯更新，以及高质量的经验分享，打造一个安全、可靠、高效的投资交流平台',
};

const SecondSectionData = {
  headline: '我们的价值观',
  sections: [
    {
      id: 0,
      title: '专业的社区',
      description:
        '我们明白专业的重要性； 鼓励深度分析， 发掘投资机会， 我们希望能够与用户一同成长， 学无止境',
      icon: <UsersThree className={styles.icons} />,
    },
    {
      id: 1,
      title: '平等的乐土',
      description:
        '我们坚信平等带来交流， 交流促进成长；欢迎来自各行各业的投资爱好者加入我们， 一同用共赢的思维和平等的文化浇灌出投资的乐土',
      icon: <Handshake className={styles.icons} />,
    },
    {
      id: 2,
      title: '完善的技术',
      description:
        '我们追求更好的技术和更高标准的呈现； 通过Web3技术的应用和不断的创新， 我们拒绝停步不前， 用行动让投资更美好',
      icon: <Star className={styles.icons} />,
    },
  ],
};

const ThirdSectionData = {
  headline: '活动',
  sections: [
    {
      id: 0,
      title: '活动项目1',
      location: '印度',
      date: '28/12/2024',
      description:
        '羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。',
      image: '/pressImg1.png',
      mobileImage: AboutUsTempImage,
    },
    {
      id: 1,
      title: '活动项目2',
      location: '印度',
      date: '28/12/2024',
      description:
        '羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。',
      image: '/pressImg2.png',
      mobileImage: AboutUsTempImage,
    },
  ],
};

const FourthSectionData = {
  headline: '公司公告',
  more: '更多',
  sections: [
    {
      id: 0,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 1,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 2,
      title: '服务器更新',
      date: '28/12/2024',
    },
    {
      id: 3,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 4,
      title: '产品迭代',
      date: '28/12/2024',
    },
  ],
};

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
      {/* First section */}
      <div className={styles.topContainer}>
        <Container fluid p={0}>
          {!isMobile ? (
            <>
              <Group
                position="center"
                w={'100%'}
                spacing={0}
                style={{ alignItems: 'center', justifyContent: 'center' }}>
                <div className={styles.planetTextCont}>
                  <div className={styles.planetTextCard}>
                    <BodyBold
                      variant={5}
                      style={{ marginBottom: '16px' }}
                      color="#F2F3F7">
                      {AboutUsData.about}
                    </BodyBold>
                    <BodyBold variant={7} color="#F2F3F7">
                      <span style={{ color: '#4178FA' }}>
                        {AboutUsData.wolfPlanet}
                      </span>{' '}
                      {AboutUsData.from}
                    </BodyBold>
                    <Body
                      variant={1}
                      style={{ marginTop: '20px' }}
                      color="#F2F3F7">
                      {AboutUsData.description}
                    </Body>
                  </div>
                </div>

                <div className={styles.planetImage}>
                  <Image
                    src={WholePlanet3}
                    alt="About Planet"
                    width={588}
                    height={588}
                  />
                </div>
              </Group>
              <div className={styles.bottomTextOuterContainer}>
                <div className={styles.bottomTextContainer}>
                  <BodyBold
                    variant={7}
                    style={{ marginBottom: '16px' }}
                    color="#F2F3F7">
                    {AboutUsData.ourMission}
                  </BodyBold>
                </div>

                <div className={styles.bottomTextContainer}>
                  <Body
                    variant={1}
                    style={{ marginBottom: '16px' }}
                    color="#9198B0">
                    {AboutUsData.ourMissionDescription}
                  </Body>
                </div>
              </div>
            </>
          ) : (
            <Group w={'100%'} spacing={0} style={{ justifyContent: 'center' }}>
              <div className={styles.planetImageMobileContainer}>
                <Image
                  src={WholePlanet3}
                  alt="About Planet"
                  width={388}
                  height={388}
                  className={styles.planetImageMobile}
                />
              </div>
              <div className={styles.planetTextCont}>
                <div className={styles.planetTextCard}>
                  <BodyBold
                    variant={5}
                    style={{ marginBottom: '16px' }}
                    color="#F2F3F7">
                    {AboutUsData.about}
                  </BodyBold>
                  <BodyBold variant={7} color="#F2F3F7">
                    <span style={{ color: '#4178FA' }}>
                      {AboutUsData.wolfPlanet}
                    </span>
                  </BodyBold>
                  <BodyBold variant={7} color="#F2F3F7">
                    {AboutUsData.from}
                  </BodyBold>
                  <Body
                    variant={1}
                    style={{ marginTop: '20px' }}
                    color="#F2F3F7">
                    {AboutUsData.description}
                  </Body>
                </div>
              </div>
              <div className={styles.bottomTextContainer}>
                <BodyBold
                  variant={3}
                  style={{ marginBottom: 16, marginTop: 30 }}
                  color="#F2F3F7">
                  {AboutUsData.ourMission}
                </BodyBold>
              </div>

              <div className={styles.bottomTextContainer}>
                <Body variant={1} style={{ marginBottom: 80 }} color="#9198B0">
                  {AboutUsData.ourMissionDescription}
                </Body>
              </div>
            </Group>
          )}
        </Container>
      </div>

      {/* Second section */}
      <div className={styles.middleContainer}>
        <Stack align="center" maw={'850px'}>
          <Stack align="center" px={'36px'} w={isMobile ? '278px' : 'auto'}>
            <BodyBold
              variant={7}
              fs={isMobile ? 36 : 40}
              style={{ marginBottom: '24px', textAlign: 'center' }}>
              {SecondSectionData.headline}
            </BodyBold>
            {!isMobile ? (
              <Card bg={'#272935'} radius={16} className={styles.card}>
                <div style={{ display: 'flex' }}>
                  {SecondSectionData.sections.map((section, index) => (
                    <>
                      <Stack spacing={'20px'} style={{ minWidth: 228 }}>
                        <Group spacing={'11px'}>
                          <div className={styles.iconContainer}>
                            {section.icon}
                          </div>
                          <BodyBold variant={1} color="#F2F3F7">
                            {section.title}
                          </BodyBold>
                        </Group>
                        <Body
                          variant={2}
                          lh={1.3}
                          color="#9198B0"
                          style={{ letterSpacing: 1.2 }}>
                          {section.description}
                        </Body>
                      </Stack>
                      {index !== SecondSectionData.sections.length - 1 && (
                        <Divider mx={'23px'} color="#3E404E" />
                      )}
                    </>
                  ))}
                </div>
              </Card>
            ) : (
              <Card
                p={'32px'}
                w={'352px'}
                bg={'#272935'}
                radius={12}
                className={styles.cardMobile}>
                {SecondSectionData.sections.map((section, index) => (
                  <>
                    <Stack spacing={'20px'}>
                      <Group spacing={'11px'}>
                        <div className={styles.iconContainer}>
                          {section.icon}
                        </div>
                        <BodyBold variant={1} color="#F2F3F7">
                          {section.title}
                        </BodyBold>
                      </Group>
                      <Body
                        variant={2}
                        lh={1.5}
                        color="#9198B0"
                        // style={{ letterSpacing: 1.2 }}
                      >
                        {section.description}
                      </Body>
                    </Stack>
                    {index !== SecondSectionData.sections.length - 1 && (
                      <Divider my={'23px'} color="#3E404E" />
                    )}
                  </>
                ))}
              </Card>
            )}
          </Stack>
        </Stack>
      </div>

      {/* Third section */}
      <div className={styles.botContainer}>
        <Stack align="center">
          <Stack mt={isMobile ? '80px' : '150px'} align="center">
            <Stack
              spacing={'10px'}
              align="center"
              w={isMobile ? '278px' : 'auto'}
              style={{ textAlign: 'center' }}>
              <BodyBold variant={7} color="#F2F3F7">
                {ThirdSectionData.headline}
              </BodyBold>
            </Stack>
            <Group py={'47px'} spacing={'28px'} noWrap>
              {!isMobile ? (
                <>
                  {ThirdSectionData.sections.map((section, index) => (
                    <Card
                      p={'33px'}
                      bg="#272935"
                      radius={'16px'}
                      w={'403px'}
                      key={index}>
                      <Stack spacing={'40px'}>
                        <Image
                          src={section.image}
                          width={352}
                          height={230}
                          // width={'100%'}
                          alt="Press Release 1"
                        />
                        <Stack spacing={'0px'} align="center" px={'18px'}>
                          <BodyBold
                            variant={6}
                            color="#F2F3F7"
                            style={{ textAlign: 'center' }}>
                            {section.title}
                          </BodyBold>
                          <Group
                            position="apart"
                            noWrap
                            w={'100%'}
                            style={{ marginTop: 20 }}>
                            <div className={styles.badge}>
                              <BodyBold variant={9} color="#FEFEFEFE">
                                地点: {section.location}
                              </BodyBold>
                            </div>
                            <div className={styles.badge}>
                              <BodyBold variant={9} color="#FEFEFEFE">
                                日期: {section.date}
                              </BodyBold>
                            </div>
                          </Group>
                          <Body
                            variant={1}
                            color="#9198B0"
                            style={{ paddingTop: 30, height: 234 }}>
                            {section.description}
                          </Body>
                        </Stack>
                      </Stack>
                    </Card>
                  ))}
                </>
              ) : (
                <Card
                  p={'24px'}
                  bg="#272935"
                  radius={'16px'}
                  withBorder
                  className={styles.bordercard}
                  w={'350px'}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}>
                    <Image
                      src={ThirdSectionData.sections[0].image}
                      alt="Press Release 1"
                      width={307}
                      height={280}
                      // className={styles.mobileImage}
                      // style={{ width: '100%', height: 293, objectFit: 'cover' }}
                    />

                    <BodyBold
                      variant={9}
                      color="#F2F3F7"
                      style={{
                        textAlign: 'center',
                        padding: '0px 24px',
                        marginTop: 30,
                      }}>
                      {ThirdSectionData.sections[0].title}
                    </BodyBold>
                    <div
                      style={{
                        width: 247,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}>
                      <Group
                        position="apart"
                        noWrap
                        w={'100%'}
                        style={{ marginTop: 20 }}>
                        <div className={styles.badge}>
                          <BodyBold variant={8} color="#FEFEFEFE">
                            地点: {ThirdSectionData.sections[0].location}
                          </BodyBold>
                        </div>
                        <div className={styles.badge}>
                          <BodyBold variant={8} color="#FEFEFEFE">
                            日期: {ThirdSectionData.sections[0].date}
                          </BodyBold>
                        </div>
                      </Group>
                    </div>

                    <div
                      style={{
                        width: 254,
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}>
                      <Body
                        variant={4}
                        color="#9198B0"
                        style={{
                          paddingTop: 30,
                          height: 119,
                          lineHeight: 1.4,
                        }}>
                        {ThirdSectionData.sections[0].description}
                      </Body>
                    </div>
                  </div>
                </Card>
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
                <div className={styles.arrowContainerDisabled}>
                  <ArrowLeft color="#9198B080" size={30} />
                </div>
              ) : (
                <div className={styles.arrowContainer}>
                  <ArrowLeft color="#9198B080" size={30} />
                </div>
              )}

              <div className={styles.arrowContainer}>
                <ArrowRight color="#9198B0" size={30} />
              </div>
            </Group>
          </Group>
        </Stack>
      </div>

      {/* Fourth section (Announcements) */}
      <div className={styles.botContainer}>
        <div style={{ width: '100%', maxWidth: 788 }}>
          <Stack mt={isMobile ? '80px' : '150px'} align="center">
            <div
              style={{
                display: 'flex',
                justifyContent: isMobile ? 'center' : 'space-between',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',

                width: '100%',
                maxWidth: '1064px',
                marginBottom: 40,
              }}>
              <div></div>
              <BodyBold variant={7} color="#F2F3F7">
                {FourthSectionData.headline}
              </BodyBold>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginTop: isMobile ? 20 : 0,
                }}>
                <BodyBold variant={9} color="#9198B0">
                  {FourthSectionData.more}
                </BodyBold>
                <CaretDoubleRight color="#9198B0" size={28} />
              </div>
            </div>
            <div style={{ width: '100%', maxWidth: '1064px' }}>
              {FourthSectionData.sections.map((section, index) => (
                <>
                  {index === 0 && (
                    <Divider
                      pb={'0px'}
                      color="rgba(145, 152, 176, 0.50)"
                      w={'100%'}
                    />
                  )}
                  <div
                    style={{
                      width: isMobile ? '' : '100%',
                      maxWidth: '1064px',
                      display: 'flex',
                      padding: '24px 24px',
                    }}>
                    <div style={{ display: 'flex', gap: 25 }}>
                      <Body variant={1} color="#F2F3F7">
                        {section.date}
                      </Body>
                      <BodyBold
                        variant={1}
                        color="#4178FA"
                        style={{ cursor: 'pointer' }}>
                        {section.title}
                      </BodyBold>
                    </div>
                  </div>

                  <Divider
                    pb={'0px'}
                    color="rgba(145, 152, 176, 0.50)"
                    w={'100%'}
                  />
                </>
              ))}
            </div>
          </Stack>
          <Divider pb={'15px'} color="rgba(145, 152, 176, 0.50)" w={'100%'} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
