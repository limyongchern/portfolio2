//@ts-nocheck
import { Card, Container, Divider, Group, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  Handshake,
  UsersThree,
  Star,
  CaretDoubleRight,
} from '@phosphor-icons/react';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';
import AboutUsTempImage from 'public/TempImages/AboutUsTempImage.png';
import WholePlanet3 from 'public/Planet/wholeplanet3.png';
import PressImg1 from 'public/PressImg1.png';
import PressImg2 from 'public/PressImg2.png';
import { BACKEND_URL, API_KEY } from '../../utils/endpoints';
import { formatDate, formatActivityContent } from 'utils/common';

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

const AboutUsDataEn = {
  about: 'About WolfPlanet',
  wolfPlanet: 'WolfPlanet',
  from: 'comes from',
  description:
    'One day, a group of innovative and ambitious wolf cubs used their keen senses to uncover investment opportunities in space, giving rise to the WolfPlanet investment community. The wolves explore planets like precious metals, forex, and digital collectibles, tracking market trends and collaborating on investment strategies. From interstellar wanderers to planetary commanders, the wolves grow and earn investment returns, forging a new era for the space investment community.',
  ourMission: 'Our Mission',
  ourMissionDescription:
    'By leveraging blockchain technology, we aim to create a cross-regional and cross-sectoral community for investors of diverse backgrounds and identities, enabling exchange, learning, and collaboration. We will provide an equitable communication environment, real-time information updates, and high-quality experience sharing, building a secure, reliable, and efficient investment exchange platform.',
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

const SecondSectionDataEn = {
  headline: 'Our Values',
  sections: [
    {
      id: 0,
      title: 'Professional Community',
      description:
        'We understand the importance of professionalism. We encourage in-depth analysis and the discovery of investment opportunities. We hope to grow together with our users and embrace lifelong learning.',
      icon: <UsersThree className={styles.icons} />,
    },
    {
      id: 1,
      title: 'Egalitarian Haven',
      description:
        'We firmly believe that equality fosters exchange, and exchange facilitates growth. We welcome investment enthusiasts from all backgrounds to join us, cultivating an investment haven with a win-win mindset and an egalitarian culture.',
      icon: <Handshake className={styles.icons} />,
    },
    {
      id: 2,
      title: 'Comprehensive Technology',
      description:
        'We strive for better technology and higher presentation standards. Through the application of Web3 technology and continuous innovation, we refuse to stand still, using action to make investing more rewarding.',
      icon: <Star className={styles.icons} />,
    },
  ],
};

const ThirdSectionData = {
  headline: '活动',
  sections: [
    {
      id: 1,
      title: '活动项目1',
      location: '印度',
      date: '28/12/2024',
      description:
        '羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。',
      image: PressImg1,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 2,
      title: '活动项目2',
      location: '印度',
      date: '28/12/2024',
      description:
        '羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。',
      image: PressImg2,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 3,
      title: '活动项目3',
      location: '印度',
      date: '28/12/2024',
      description:
        '羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。',
      image: PressImg1,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 4,
      title: '活动项目4',
      location: '印度',
      date: '28/12/2024',
      description:
        '羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。',
      image: PressImg2,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 5,
      title: '活动项目5',
      location: '印度',
      date: '28/12/2024',
      description:
        '羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。',
      image: PressImg1,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 6,
      title: '活动项目6',
      location: '印度',
      date: '28/12/2024',
      description:
        '羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。',
      image: PressImg2,
      mobileImage: AboutUsTempImage,
    },
  ],
};

const ThirdSectionDataEn = {
  headline: 'Activities',
  sections: [
    {
      id: 1,
      title: 'Activity 1',
      location: 'India',
      date: '28/12/2024',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin ex ipsum libero curabitur molestie; et praesent duis. Bibendum condimentum eu mi libero curae proin imperdiet egestas. Ornare nec taciti dictumst tempor viverra molestie, sit vivamus elementum.',
      image: PressImg1,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 2,
      title: 'Activity 2',
      location: 'India',
      date: '28/12/2024',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin ex ipsum libero curabitur molestie; et praesent duis. Bibendum condimentum eu mi libero curae proin imperdiet egestas. Ornare nec taciti dictumst tempor viverra molestie, sit vivamus elementum.',
      image: PressImg2,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 3,
      title: 'Activity 3',
      location: 'India',
      date: '28/12/2024',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin ex ipsum libero curabitur molestie; et praesent duis. Bibendum condimentum eu mi libero curae proin imperdiet egestas. Ornare nec taciti dictumst tempor viverra molestie, sit vivamus elementum.',
      image: PressImg1,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 4,
      title: 'Activity 4',
      location: 'India',
      date: '28/12/2024',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin ex ipsum libero curabitur molestie; et praesent duis. Bibendum condimentum eu mi libero curae proin imperdiet egestas. Ornare nec taciti dictumst tempor viverra molestie, sit vivamus elementum.',
      image: PressImg2,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 5,
      title: 'Activity 5',
      location: 'India',
      date: '28/12/2024',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin ex ipsum libero curabitur molestie; et praesent duis. Bibendum condimentum eu mi libero curae proin imperdiet egestas. Ornare nec taciti dictumst tempor viverra molestie, sit vivamus elementum.',
      image: PressImg1,
      mobileImage: AboutUsTempImage,
    },
    {
      id: 6,
      title: 'Activity 6',
      location: 'India',
      date: '28/12/2024',
      description:
        'Lorem ipsum odor amet, consectetuer adipiscing elit. Sollicitudin ex ipsum libero curabitur molestie; et praesent duis. Bibendum condimentum eu mi libero curae proin imperdiet egestas. Ornare nec taciti dictumst tempor viverra molestie, sit vivamus elementum.',
      image: PressImg2,
      mobileImage: AboutUsTempImage,
    },
  ],
};

const FourthSectionData = {
  headline: '公司公告',
  more: '更多',
  // sections: [
  //   {
  //     id: 0,
  //     title: '产品迭代',
  //     date: '28/12/2024',
  //   },
  //   {
  //     id: 1,
  //     title: '产品迭代',
  //     date: '28/12/2024',
  //   },
  //   {
  //     id: 2,
  //     title: '服务器更新',
  //     date: '28/12/2024',
  //   },
  //   {
  //     id: 3,
  //     title: '产品迭代',
  //     date: '28/12/2024',
  //   },
  //   {
  //     id: 4,
  //     title: '产品迭代',
  //     date: '28/12/2024',
  //   },
  // ],
};

const FourthSectionDataEn = {
  headline: 'Company Announcement',
  more: 'More',
  // sections: [
  //   {
  //     id: 0,
  //     title: 'Product Iteration',
  //     date: '28/12/2024',
  //   },
  //   {
  //     id: 1,
  //     title: 'Product Iteration',
  //     date: '28/12/2024',
  //   },
  //   {
  //     id: 2,
  //     title: 'Product Iteration',
  //     date: '28/12/2024',
  //   },
  //   {
  //     id: 3,
  //     title: 'Product Iteration',
  //     date: '28/12/2024',
  //   },
  //   {
  //     id: 4,
  //     title: 'Product Iteration',
  //     date: '28/12/2024',
  //   },
  // ],
};

const AboutUs = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [activities, setActivities] = useState([]);
  const [announcements, setAnnouncements] = useState();

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

  useEffect(() => {}, [currentPage]);

  const GetPageNumber = () => {
    if (isMobile) {
      if (router.locale === 'en') {
        return activities.length;
      } else {
        return activities.length;
      }
    } else {
      if (router.locale === 'en') {
        return Math.ceil(activities.length / 2);
      } else {
        return Math.ceil(activities.length / 2);
      }
    }
  };

  const IsLastPage = () => {
    if (isMobile) {
      if (router.locale === 'en') {
        if (currentPage === activities.length - 1) {
          return true;
        } else return false;
      } else {
        if (currentPage === activities.length - 1) {
          console.log('returning TRUE CHINESE');
          return true;
        } else {
          console.log('returning FALSE CHINESE');

          return false;
        }
      }
    } else {
      if (router.locale === 'en') {
        if (currentPage === Math.ceil(activities.length / 2) - 1) {
          return true;
        } else return false;
      } else {
        if (currentPage === Math.ceil(activities.length / 2) - 1) {
          return true;
        } else return false;
      }
    }
  };

  const getPageAnnouncementData = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/cms/website/content/list?contentTemplateName=Announcement`,
        {
          method: 'GET',
          // @ts-ignore
          headers: {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();
      console.log('getPageAnnouncementData', data);
      setAnnouncements(data.message);
    } catch (error) {
      console.log('error', error);
    }
  };

  const getPageActivityData = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/cms/website/content/list?contentTemplateName=Activity`,
        {
          method: 'GET',
          // @ts-ignore
          headers: {
            'x-api-key': API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();
      console.log('getPageActivityData', data);

      // const activityPromise = data.message.map(
      //   async (item: any) =>
      //     await fetch(
      //       `${BACKEND_URL}/api/bucket/pocketBase/cms/get/${item.body.Image}`,
      //       {
      //         method: 'GET',
      //         headers: {
      //           'x-api-key': API_KEY,
      //           'Content-Type': 'application/json',
      //         },
      //       }
      //     )
      // );
      const activityPromises = data.message.map(async (item: any) => {
        const response = await fetch(
          `${BACKEND_URL}/api/bucket/pocketBase/cms/get/${item.body.Image}`,
          {
            method: 'GET',
            headers: {
              'x-api-key': API_KEY,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch image for ${item.body.Image}`);
        }

        return await response.json(); // or `return await response.json();` if you need JSON data
      });
      const activityImages = await Promise.all(activityPromises);
      const activitiesFinal = data.message.map((item: any, index: number) => {
        return { ...item, imageUrl: activityImages[index].message.url };
      });

      // const whitepaperRes = await fetch(
      //   `${BACKEND_URL}/api/bucket/pocketBase/cms/get/${wpId}`,
      //   {
      //     method: 'GET',
      //     // @ts-ignore
      //     headers: {
      //       'x-api-key': API_KEY,
      //       'Content-Type': 'application/json',
      //     },
      //   }
      // );
      console.log('activitiesFinal', activitiesFinal);

      setActivities(activitiesFinal);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getPageAnnouncementData();
    getPageActivityData();
  }, []);

  console.log('GetPageNumber', GetPageNumber());
  console.log('IsLastPage', IsLastPage());
  console.log('currentPage', currentPage);

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
                  <div
                    className={styles.planetTextCard}
                    style={{ height: router.locale === 'en' ? 385 : 277 }}>
                    {router.locale === 'en' ? (
                      <>
                        <BodyDmsans
                          variant={2}
                          style={{ marginBottom: '10px' }}
                          color="#F2F3F7">
                          {AboutUsDataEn.about}
                        </BodyDmsans>
                        <Heading variant={9} color="#F2F3F7">
                          <span style={{ color: '#4178FA', lineHeight: 1.2 }}>
                            {AboutUsData.wolfPlanet}
                          </span>{' '}
                          {AboutUsDataEn.from}
                        </Heading>
                        <BodyDmsans
                          variant={2}
                          style={{ marginTop: '15px', textAlign: 'justify' }}
                          color="#F2F3F7">
                          {AboutUsDataEn.description}
                        </BodyDmsans>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
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
                  {router.locale === 'en' ? (
                    <Heading
                      variant={1}
                      style={{ marginBottom: '16px' }}
                      color="#F2F3F7">
                      {AboutUsDataEn.ourMission}
                    </Heading>
                  ) : (
                    <BodyBold
                      variant={7}
                      style={{ marginBottom: '16px' }}
                      color="#F2F3F7">
                      {AboutUsData.ourMission}
                    </BodyBold>
                  )}
                </div>

                <div className={styles.bottomTextContainer}>
                  {router.locale === 'en' ? (
                    <BodyDmsans
                      variant={2}
                      style={{ marginBottom: '16px' }}
                      color="#9198B0">
                      {AboutUsDataEn.ourMissionDescription}
                    </BodyDmsans>
                  ) : (
                    <Body
                      variant={1}
                      style={{ marginBottom: '16px' }}
                      color="#9198B0">
                      {AboutUsData.ourMissionDescription}
                    </Body>
                  )}
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
                  {router.locale === 'en' ? (
                    <>
                      <BodyDmsans
                        variant={1}
                        style={{ marginBottom: '10px' }}
                        color="#F2F3F7">
                        {AboutUsDataEn.about}
                      </BodyDmsans>
                      <Heading variant={1} color="#F2F3F7">
                        <span style={{ color: '#4178FA', lineHeight: 1.2 }}>
                          {AboutUsData.wolfPlanet}
                        </span>{' '}
                        {AboutUsDataEn.from}
                      </Heading>
                      <BodyDmsans
                        variant={1}
                        style={{ marginTop: '15px', textAlign: 'justify' }}
                        color="#F2F3F7">
                        {AboutUsDataEn.description}
                      </BodyDmsans>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </div>
              <div className={styles.bottomTextContainer}>
                {router.locale === 'en' ? (
                  <Heading
                    variant={2}
                    style={{ marginBottom: 16, marginTop: 30 }}
                    color="#F2F3F7">
                    {AboutUsDataEn.ourMission}
                  </Heading>
                ) : (
                  <BodyBold
                    variant={3}
                    style={{ marginBottom: 16, marginTop: 30 }}
                    color="#F2F3F7">
                    {AboutUsData.ourMission}
                  </BodyBold>
                )}
              </div>

              <div className={styles.bottomTextContainer}>
                {router.locale === 'en' ? (
                  <BodyDmsans
                    variant={1}
                    style={{
                      marginBottom: 80,
                      padding: '0px 10px',
                      textAlign: 'justify',
                    }}
                    color="#9198B0">
                    {AboutUsDataEn.ourMissionDescription}
                  </BodyDmsans>
                ) : (
                  <Body
                    variant={1}
                    style={{ marginBottom: 80 }}
                    color="#9198B0">
                    {AboutUsData.ourMissionDescription}
                  </Body>
                )}
              </div>
            </Group>
          )}
        </Container>
      </div>

      {/* Second section */}
      <div className={styles.middleContainer}>
        <Stack align="center" maw={'850px'} mt={isMobile ? '0px' : '80px'}>
          <Stack align="center" px={'36px'} w={isMobile ? '320px' : '262px'}>
            {router.locale === 'en' ? (
              <Heading
                variant={isMobile ? 2 : 1}
                style={{ marginBottom: '24px', textAlign: 'center' }}>
                {SecondSectionDataEn.headline}
              </Heading>
            ) : (
              <BodyBold
                variant={7}
                fs={isMobile ? 36 : 40}
                style={{ marginBottom: '24px', textAlign: 'center' }}>
                {SecondSectionData.headline}
              </BodyBold>
            )}

            {!isMobile ? (
              <div style={{ display: 'flex', gap: 15 }}>
                {router.locale === 'en' ? (
                  <>
                    {SecondSectionDataEn.sections.map((section, index) => (
                      <div className={styles.infoCard} key={index}>
                        <Stack spacing={'20px'} style={{ minWidth: 272 }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 11,
                            }}>
                            <div className={styles.iconContainer}>
                              {section.icon}
                            </div>
                            <Heading variant={3} color="#F2F3F7" style={{}}>
                              {section.title}
                            </Heading>
                          </div>
                          <BodyDmsans
                            variant={1}
                            lh={1.2}
                            color="#9198B0"
                            style={{ textAlign: 'justify' }}>
                            {section.description}
                          </BodyDmsans>
                        </Stack>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {SecondSectionData.sections.map((section, index) => (
                      <div className={styles.infoCard} key={index}>
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
                      </div>
                    ))}
                  </>
                )}
              </div>
            ) : (
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {router.locale === 'en' ? (
                  <>
                    {SecondSectionDataEn.sections.map((section, index) => (
                      <div className={styles.infoCard} key={index}>
                        <Stack spacing={'20px'}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 11,
                            }}>
                            <div className={styles.iconContainer}>
                              {section.icon}
                            </div>
                            <Heading variant={4} color="#F2F3F7" lh={1.1}>
                              {section.title}
                            </Heading>
                          </div>
                          <BodyDmsans
                            variant={6}
                            lh={1.5}
                            color="#9198B0"
                            style={{ textAlign: 'justify' }}>
                            {section.description}
                          </BodyDmsans>
                        </Stack>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    {SecondSectionData.sections.map((section, index) => (
                      <div className={styles.infoCard} key={index}>
                        <Stack spacing={'20px'}>
                          <Group spacing={'11px'}>
                            <div className={styles.iconContainer}>
                              {section.icon}
                            </div>
                            <BodyBold variant={1} color="#F2F3F7">
                              {section.title}
                            </BodyBold>
                          </Group>
                          <Body variant={2} lh={1.5} color="#9198B0">
                            {section.description}
                          </Body>
                        </Stack>
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </Stack>
        </Stack>
      </div>

      {/* Third section */}
      <div className={styles.botContainer}>
        <Stack align="center">
          <Stack mt={isMobile ? '80px' : '80px'} align="center">
            <Stack
              spacing={'10px'}
              align="center"
              w={isMobile ? '278px' : 'auto'}
              style={{ textAlign: 'center' }}>
              {router.locale === 'en' ? (
                <Heading variant={isMobile ? 2 : 1} color="#F2F3F7">
                  {ThirdSectionDataEn.headline}
                </Heading>
              ) : (
                <BodyBold variant={7} color="#F2F3F7">
                  {ThirdSectionData.headline}
                </BodyBold>
              )}
            </Stack>
            <Group py={'47px'} spacing={'28px'} noWrap>
              {!isMobile ? (
                <>
                  {router.locale === 'en' ? (
                    <>
                      {activities
                        .slice(currentPage * 2, (currentPage + 1) * 2)
                        .map((item, index) => (
                          <Link
                            href={`/activity/${item._id}`}
                            style={{ textDecoration: 'none' }}
                            key={index}>
                            <Card
                              p={'33px'}
                              radius={'16px'}
                              w={'403px'}
                              style={{
                                background:
                                  'linear-gradient(180deg, #3E404E 0%, #272935 100%)',
                              }}>
                              <Stack spacing={'40px'}>
                                <Image
                                  src={item.imageUrl}
                                  className={styles.activityCardImage}
                                  // fill={true}
                                  width={352}
                                  height={230}
                                  alt="Press Release 1"
                                />
                                <Stack
                                  spacing={'0px'}
                                  align="center"
                                  px={'18px'}>
                                  <Heading
                                    variant={7}
                                    color="#F2F3F7"
                                    style={{ textAlign: 'center' }}>
                                    {item.body.Title}
                                  </Heading>
                                  <Group
                                    position="apart"
                                    noWrap
                                    w={'100%'}
                                    style={{ marginTop: 20 }}>
                                    <div className={styles.badge}>
                                      <BodyDmsans
                                        variant={7}
                                        color="#FEFEFEFE"
                                        style={{ whiteSpace: 'nowrap' }}>
                                        Venue: {item.body.Location}
                                      </BodyDmsans>
                                    </div>
                                    <div className={styles.badge}>
                                      <BodyDmsans
                                        variant={7}
                                        color="#FEFEFEFE"
                                        style={{ whiteSpace: 'nowrap' }}>
                                        Date: {formatDate(item.createdAt)}
                                      </BodyDmsans>
                                    </div>
                                  </Group>
                                  <BodyDmsans
                                    variant={1}
                                    color="#F2F3F7"
                                    style={{
                                      paddingTop: 30,
                                      height: 234,
                                      textAlign: 'justify',
                                      display: 'inline-block',
                                      textOverflow: 'ellipsis',
                                      // whiteSpace: 'nowrap',
                                    }}>
                                    {formatActivityContent(
                                      item.body.Content,
                                      400
                                    )}
                                  </BodyDmsans>
                                </Stack>
                              </Stack>
                            </Card>
                          </Link>
                        ))}
                    </>
                  ) : (
                    <>
                      {activities
                        .slice(currentPage * 2, (currentPage + 1) * 2)
                        .map((item, index) => (
                          <Link
                            href={`/activity/${item._id}`}
                            style={{ textDecoration: 'none' }}
                            key={index}>
                            <Card
                              p={'33px'}
                              radius={'16px'}
                              w={'403px'}
                              style={{
                                background:
                                  'linear-gradient(180deg, #3E404E 0%, #272935 100%)',
                              }}>
                              <Stack spacing={'40px'}>
                                <Image
                                  src={item.imageUrl}
                                  className={styles.activityCardImage}
                                  width={352}
                                  height={230}
                                  alt="Press Release 1"
                                />
                                <Stack
                                  spacing={'0px'}
                                  align="center"
                                  px={'18px'}>
                                  <BodyBold
                                    variant={6}
                                    color="#F2F3F7"
                                    style={{ textAlign: 'center' }}>
                                    {item.body.TitleCN}
                                  </BodyBold>
                                  <Group
                                    position="apart"
                                    noWrap
                                    w={'100%'}
                                    style={{ marginTop: 20 }}>
                                    <div className={styles.badge}>
                                      <BodyBold
                                        variant={9}
                                        color="#FEFEFEFE"
                                        style={{ whiteSpace: 'nowrap' }}>
                                        地点: {item.body.LocationCN}
                                      </BodyBold>
                                    </div>
                                    <div className={styles.badge}>
                                      <BodyBold
                                        variant={9}
                                        color="#FEFEFEFE"
                                        style={{
                                          whiteSpace: 'nowrap',
                                          textOverflow: 'ellipsis',
                                        }}>
                                        日期: {formatDate(item.createdAt)}
                                      </BodyBold>
                                    </div>
                                  </Group>
                                  <Body
                                    variant={1}
                                    color="#F2F3F7"
                                    style={{
                                      paddingTop: 30,
                                      height: 234,
                                    }}>
                                    {formatActivityContent(
                                      item.body.ContentCN,
                                      125
                                    )}
                                  </Body>
                                </Stack>
                              </Stack>
                            </Card>
                          </Link>
                        ))}
                    </>
                  )}
                </>
              ) : (
                <Link
                  href={`/activity/${activities[currentPage]._id}`}
                  // href={`/activity/${currentPage}`}
                  style={{ textDecoration: 'none' }}>
                  <Card
                    p={'24px'}
                    bg="var(--Gradients-Card, linear-gradient(180deg, #3E404E 0%, #272935 100%))"
                    radius={'16px'}
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
                        src={ThirdSectionData.sections[currentPage].image}
                        alt="Press Release 1"
                        width={307}
                        height={280}
                        className={styles.mobileImage}
                        // style={{ width: '100%', height: 293, objectFit: 'cover' }}
                      />

                      {router.locale === 'en' ? (
                        <Heading
                          variant={4}
                          color="#F2F3F7"
                          style={{
                            textAlign: 'center',
                            padding: '0px 24px',
                            marginTop: 30,
                          }}>
                          {activities[currentPage].body.Title}
                        </Heading>
                      ) : (
                        <BodyBold
                          variant={9}
                          color="#F2F3F7"
                          style={{
                            textAlign: 'center',
                            padding: '0px 24px',
                            marginTop: 30,
                          }}>
                          {activities[currentPage].body.TitleCN}
                        </BodyBold>
                      )}

                      <div
                        style={{
                          // width: router.locale === 'en' ? 300 : 247,
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
                            {router.locale === 'en' ? (
                              <BodyDmsans variant={7} color="#FEFEFEFE">
                                Venue: {activities[currentPage].body.Location}
                              </BodyDmsans>
                            ) : (
                              <BodyBold variant={8} color="#FEFEFEFE">
                                地点: {activities[currentPage].body.LocationCN}
                              </BodyBold>
                            )}
                          </div>
                          <div className={styles.badge}>
                            {router.locale === 'en' ? (
                              <BodyDmsans variant={7} color="#FEFEFEFE">
                                Date:{' '}
                                {formatDate(activities[currentPage].createdAt)}
                              </BodyDmsans>
                            ) : (
                              <BodyBold variant={8} color="#FEFEFEFE">
                                日期:{' '}
                                {formatDate(activities[currentPage].createdAt)}
                              </BodyBold>
                            )}
                          </div>
                        </Group>
                      </div>

                      <div
                        style={{
                          // width: router.locale === 'en' ? 300 : 254,
                          display: 'flex',
                          justifyContent: 'center',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}>
                        {router.locale === 'en' ? (
                          <BodyDmsans
                            variant={6}
                            color="#F2F3F7"
                            style={{
                              paddingTop: 20,
                              paddingBottom: 20,
                              height: 119,
                              lineHeight: 1.4,
                              textAlign: 'justify',
                            }}>
                            {formatActivityContent(
                              activities[currentPage].body.Content,
                              320
                            )}
                          </BodyDmsans>
                        ) : (
                          <Body
                            variant={4}
                            color="#F2F3F7"
                            style={{
                              paddingTop: 30,
                              height: 119,
                              lineHeight: 1.4,
                            }}>
                            {formatActivityContent(
                              activities[currentPage].body.ContentCN,
                              160
                            )}
                          </Body>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
              )}
            </Group>
          </Stack>
          <Divider pb={'15px'} color="rgba(145, 152, 176, 0.50)" w={'100%'} />
          <Group position="apart" w={'100%'} align="start">
            <Body variant={3} color="#9198B0">
              <span style={{ color: '#F2F3F7' }}>
                {`${currentPage + 1}`.toString().padStart(2, '0')}
              </span>{' '}
              of {GetPageNumber()}
            </Body>
            <Group spacing={'10px'}>
              {currentPage === 0 ? (
                <div className={styles.arrowContainerDisabled}>
                  <ArrowLeft color="#9198B080" size={30} />
                </div>
              ) : (
                <div
                  className={styles.arrowContainer}
                  onClick={() => setCurrentPage(currentPage - 1)}>
                  <ArrowLeft color="#9198B080" size={30} />
                </div>
              )}
              {IsLastPage() ? (
                <div className={styles.arrowContainerDisabled}>
                  <ArrowRight color="#9198B080" size={30} />
                </div>
              ) : (
                <div
                  className={styles.arrowContainer}
                  onClick={() => setCurrentPage(currentPage + 1)}>
                  <ArrowRight color="#9198B0" size={30} />
                </div>
              )}
            </Group>
          </Group>
        </Stack>
      </div>

      {/* Fourth section (Announcements) */}
      <div className={styles.botContainer2}>
        <div style={{ width: '100%', maxWidth: 830 }}>
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
              <div style={{ width: 50 }}></div>
              {router.locale === 'en' ? (
                <Heading
                  variant={isMobile ? 2 : 1}
                  color="#F2F3F7"
                  style={{ textAlign: 'center' }}>
                  {FourthSectionDataEn.headline}
                </Heading>
              ) : (
                <BodyBold
                  variant={7}
                  color="#F2F3F7"
                  style={{ textAlign: 'center' }}>
                  {FourthSectionData.headline}
                </BodyBold>
              )}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  marginTop: isMobile ? 20 : 0,
                  color: '#9198B0',
                }}>
                <Link
                  href={'/announcement'}
                  style={{
                    textDecoration: 'none',
                    color: '#9198B0',
                  }}>
                  {router.locale === 'en' ? (
                    <BodyDmsans variant={4} onClick={() => {}}>
                      {FourthSectionDataEn.more}
                    </BodyDmsans>
                  ) : (
                    <BodyBold variant={9} onClick={() => {}}>
                      {FourthSectionData.more}
                    </BodyBold>
                  )}
                </Link>

                <CaretDoubleRight size={28} />
              </div>
            </div>
            <div style={{ width: '100%', maxWidth: '1064px' }}>
              {router.locale === 'en' ? (
                <>
                  {announcements &&
                    announcements.map((item: any, index: number) => (
                      <>
                        {index === 0 && (
                          <Divider
                            pb={'0px'}
                            color="rgba(145, 152, 176, 0.50)"
                            w={'100%'}
                          />
                        )}
                        <Link
                          href={`/announcement/${item._id}`}
                          style={{ textDecoration: 'none' }}>
                          <div
                            style={{
                              width: isMobile ? '' : '100%',
                              maxWidth: '1064px',
                              display: 'flex',
                              padding: '24px 24px',
                            }}>
                            <div style={{ display: 'flex', gap: 25 }}>
                              <BodyDmsans variant={2} color="#F2F3F7">
                                {formatDate(item.createdAt)}
                              </BodyDmsans>
                              <BodyDmsans
                                variant={4}
                                color="#4178FA"
                                style={{ cursor: 'pointer' }}>
                                {item.body.Title}
                              </BodyDmsans>
                            </div>
                          </div>
                        </Link>

                        <Divider
                          pb={'0px'}
                          color="rgba(145, 152, 176, 0.50)"
                          w={'100%'}
                        />
                      </>
                    ))}
                </>
              ) : (
                <>
                  {announcements &&
                    announcements.map((item: any, index: number) => (
                      <>
                        {index === 0 && (
                          <Divider
                            pb={'0px'}
                            color="rgba(145, 152, 176, 0.50)"
                            w={'100%'}
                          />
                        )}
                        <Link
                          href={`/announcement/${item._id}`}
                          style={{ textDecoration: 'none' }}>
                          <div
                            style={{
                              width: isMobile ? '' : '100%',
                              maxWidth: '1064px',
                              display: 'flex',
                              padding: '24px 24px',
                            }}>
                            <div style={{ display: 'flex', gap: 25 }}>
                              <Body variant={1} color="#F2F3F7">
                                {formatDate(item.createdAt)}
                              </Body>
                              <BodyBold
                                variant={1}
                                color="#4178FA"
                                style={{ cursor: 'pointer' }}>
                                {item.body.Title}
                              </BodyBold>
                            </div>
                          </div>
                        </Link>

                        <Divider
                          pb={'0px'}
                          color="rgba(145, 152, 176, 0.50)"
                          w={'100%'}
                        />
                      </>
                    ))}
                </>
              )}
            </div>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
