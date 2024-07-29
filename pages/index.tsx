import { useEffect, useState } from 'react';
import FirstSection from 'components/home/firstSection';
import FirstMobileSection from 'components/home/firstMobileSection';
import SecondSection from 'components/home/secondSection';
import SecondMobileSection from 'components/home/secondMobileSection';
import ThirdSection from 'components/home/thirdSection';
import ThirdMobileSection from 'components/home/thirdMobileSection';

import FourthSection from 'components/home/fourthSection';
import FourthMobileSection from 'components/home/fourthMobileSection';

import FifthSection from 'components/home/fifthSection';
import FifthMobileSection from 'components/home/fifthMobileSection';

import PlanetSection from 'components/home/planetSection';
import PlanetMobileSection from 'components/home/planetMobileSection';

import DownloadSection from 'components/common/DownloadSection';
import DownloadMobileSection from 'components/common/DownloadMobileSection';

//images for SecondSection
import TempImage1 from 'public/TempImages/TempImage1.jpg';
import TempImage2 from 'public/TempImages/TempImage2.jpg';
import TempImage3 from 'public/TempImages/TempImage3.jpg';
import TempImage4 from 'public/TempImages/TempImage4.jpg';

//images for ThirdSection
import CardIcon1 from 'public/Home/CardIcon1.png';
import CardIcon2 from 'public/Home/CardIcon2.svg';
import CardIcon3 from 'public/Home/CardIcon3.svg';
import CardIcon4 from 'public/Home/CardIcon4.svg';
import IllustrationImage1 from 'public/Home/IllustrationImage1.png';
import IllustrationImage2 from 'public/Home/IllustrationImage2.png';

//images for FourthSection
import IllustrationDecentralisation from 'public/Home/IllustrationDecentralisation.png';
import IllustrationNoGeographical from 'public/Home/IllustrationNoGeographical.png';
import IllustrationDAOCommunity from 'public/Home/IllustrationDAOCommunity.png';
import IllustrationRevenue from 'public/Home/IllustrationRevenue.png';

//images for FifthSection
import iPhoneImage from 'public/Home/iPhoneImage.png';

import { PlanetList } from 'utils/planet';

interface IProps {}

const FirstSectionData = {
  headline: '全球领先的Web3投资交流社区',
  subheader:
    'WolfPlanet 是基于区块链技术，让投资知识交流无界限，让创作更有价值',
};

const SecondSectionData = {
  headline: '故事的起点',
  cards: [
    {
      id: 1,
      title: '1',
      description: '某一天，萌狼们开始探索太空投资的机会',
      image: TempImage1,
    },
    {
      id: 2,
      title: '2',
      description:
        '萌狼们化身太空流浪者在太空中探索并共同创立了Wolf Planet投资交流社区',
      image: TempImage2,
    },
    {
      id: 3,
      title: '3',
      description: '太空流浪者们在外太空中探索发现了不同的星球',
      image: TempImage3,
    },
    {
      id: 4,
      title: '4',
      description: '每个星球都是一个理想的投资交流场所，故事由此开始…',
      image: TempImage4,
    },
  ],
};

const ThirdSectionData = {
  headline: '汇聚全球投资者的全方位、全领域的投资交流社区',
  cards: [
    {
      id: 1,
      title: '知识交流',
      bulletPoints: [
        '来自世界各地的投资爱好者',
        '投资观点、技巧交流',
        '实时互动讨论',
      ],
      logo: CardIcon1,
    },
    {
      id: 2,
      title: '部落同行',
      bulletPoints: [
        '建立跨地域、跨领域的投资者社交圈',
        '及时交流投资见解',
        '寻找志同道合的投资伙伴',
      ],
      logo: CardIcon2,
    },
    {
      id: 3,
      title: '全球视野',
      bulletPoints: [
        '洞察全球市场动态',
        '了解各类产品的投资机会',
        '获取实时投资情报',
      ],
      logo: CardIcon3,
    },
    {
      id: 4,
      title: '投资教育',
      bulletPoints: [
        '专业投资课程',
        '名师指导，系统培养投资技能',
        '持续更新，紧跟市场变化',
      ],
      logo: CardIcon4,
    },
  ],
  bottomCards: [
    {
      id: 1,
      title: '新手投资者',
      bulletPoints: ['快速提升投资技能', '结识投资大牛', '洞察全球市场动向'],
      image: IllustrationImage1,
    },
    {
      id: 2,
      title: '专业投资者',
      bulletPoints: [
        '知识分享带来经济效益',
        '拥有更广阔的追随者',
        '跨地域分享投资知识',
      ],
      image: IllustrationImage2,
    },
  ],
};

const FourthSectionData = {
  headline: '区块链驱动，打造自主安全的无界投资交流社区',
  cardsContent: [
    {
      id: 1,
      title: '去中心化',
      content: [
        '系统安全性高',
        '信息公开透明、不可篡改',
        '技术更安全、更平等、更透明',
      ],
      image: IllustrationDecentralisation,
    },
    {
      id: 2,
      title: '无地域界限',
      content: [
        '跨越地理边界的交流互动',
        '全球投资者共建共享',
        '机会平等,资源共享',
      ],
      image: IllustrationNoGeographical,
    },
    {
      id: 3,
      title: 'DAO 社区治理',
      content: [
        '基于智能合约的去中心化自治',
        '社区用户参与管理',
        '透明公开的治理机制',
      ],
      image: IllustrationDAOCommunity,
    },
    {
      id: 4,
      title: '收益模式',
      content: [
        '将社区贡献转化为代币',
        '参与互动获得奖励',
        '内容可铸造成NFT，获取收益',
      ],
      image: IllustrationRevenue,
    },
  ],
};

const PlanetSectionData = {
  headline: '七星奇遇：探索Wolf Planet 星球',
  subheader:
    'Wolf Planet 星球是一个由七个独具特色的星球组成的神秘社区，每个星球都拥有独特的属性和玩法。',
};

const FifthSectionData = {
  headline: '應用界面展示',
  cards: [
    {
      id: 1,
      title: 'DAO社区',
      description: '让每个人拥有社区治理权力',
      image: iPhoneImage,
    },
    {
      id: 2,
      title: 'NFT',
      description: '收藏数字资产藏品',
      image: iPhoneImage,
    },
    {
      id: 3,
      title: '投资课程',
      description: '来自全球的投资课程分享任你选择 ',
      image: iPhoneImage,
    },
    {
      id: 4,
      title: '盲盒',
      description: '收获意想不到的惊喜与乐趣',
      image: iPhoneImage,
    },
    {
      id: 5,
      title: '狼牙',
      description: '更多权益和活动等着你',
      image: iPhoneImage,
    },
  ],
};

const Home = (props: IProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };
  // const [cardOpen, setCardOpen] = useState(0);

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
      {!isMobile && (
        <div>
          <FirstSection data={FirstSectionData} />

          <SecondSection data={SecondSectionData} />

          {/* <SecondSectionOld /> */}

          <ThirdSection data={ThirdSectionData} />

          {/* <div className={styles.section3}>
            <div className={styles.backgroundWrapper}>
              <Image
                src={backgroundImage}
                alt="Background Image"
                className={styles.backgroundImage}
              />
            </div>
            <Flex className={styles.section3Content}>
              <Stack className={styles.section3Word}>
                <Heading
                  variant={0}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}
                  fs={40}
                  fw={700}>
                  Wolf Planet 星球汇聚了来自全球各地的专业投资
                </Heading>
                <Body
                  variant={1}
                  color="#9198B0"
                  style={{ lineHeight: 1.5 }}
                  fw={700}>
                  Wolf Planet
                  星球汇聚了来自全球各地的专业投资者和分析师，为您提供高质量的投资资讯和分析，助力您做出更明智的投资决策。
                </Body>
              </Stack>
              <Image
                src={planetHome}
                alt="Planet"
                className={styles.section3Planet}
              />
            </Flex>
          </div> */}

          <FourthSection data={FourthSectionData} />
          <PlanetSection data={PlanetSectionData} />
          <FifthSection data={FifthSectionData} />
          <DownloadSection />

          {/* <div className={styles.section4}>
            <div className={styles.section4p2}>
              <Stack>
                <Heading
                  variant={0}
                  color={'#F2F3F7'}
                  style={{ lineHeight: 1.5 }}
                  fs={40}
                  fw={700}>
                  Wolf Planet space for video
                </Heading>
                <Body
                  variant={1}
                  color={'#9198B0'}
                  style={{ padding: '24px 0px', lineHeight: 1.5 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  doeiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Body>
                <Image
                  src={section4vid}
                  alt="Video"
                  className={styles.sec4Vid}
                />
              </Stack>
            </div>
          </div> */}
          {/* <div className={styles.section5}>
            <div className={styles.section5p2}>
              <Heading
                variant={0}
                color={'#F2F3F7'}
                style={{ lineHeight: 1.5 }}
                fs={40}
                fw={700}>
                CTA text to contact or smth
              </Heading>
              <Body
                variant={1}
                color={'#9198B0'}
                style={{ paddingTop: '24px', lineHeight: 1.5 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Body>
              <Button className={styles.button}>Contact Us</Button>
            </div>
          </div> */}
        </div>
      )}

      {isMobile && (
        <>
          <FirstMobileSection data={FirstSectionData} />
          <SecondMobileSection data={SecondSectionData} />
          {/* <SecondMobileSectionOld /> */}
          <ThirdMobileSection data={ThirdSectionData} />
          <FourthMobileSection data={FourthSectionData} />
          <PlanetMobileSection data={PlanetSectionData} />
          <FifthMobileSection data={FifthSectionData} />
          <DownloadMobileSection />
        </>
      )}
    </>
  );
};

export default Home;
