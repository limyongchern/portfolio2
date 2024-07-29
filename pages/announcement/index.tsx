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
    {
      id: 5,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 6,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 7,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 8,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 9,
      title: '产品迭代',
      date: '28/12/2024',
    },
  ],
};

const Announcement = () => {
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
              <div></div>
              <BodyBold variant={7} color="#F2F3F7">
                {FourthSectionData.headline}
              </BodyBold>
              <div></div>
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

export default Announcement;
