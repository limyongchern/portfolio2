import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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

//image for FirstSection
import HomeHeroPhone from 'public/Home/HomeHeroPhone.png';

//images for SecondSection
import IllustrationStory1 from 'public/Home/IllustrationStory1.png';
import IllustrationStory2 from 'public/Home/IllustrationStory2.png';
import IllustrationStory3 from 'public/Home/IllustrationStory3.png';
import IllustrationStory4 from 'public/Home/IllustrationStory4.png';

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
import iPhoneImage1 from 'public/Home/iPhoneImage1.png';
import iPhoneImage2 from 'public/Home/iPhoneImage2.png';
import iPhoneImage3 from 'public/Home/iPhoneImage3.png';
import iPhoneImage4 from 'public/Home/iPhoneImage4.png';
import iPhoneImage5 from 'public/Home/iPhoneImage5.png';

import { BACKEND_URL, API_KEY } from '../utils/endpoints';

interface IProps {}

const FirstSectionData = {
  headline: '全球领先的 Web3投资交流社区',
  headline1: '全球领先的',
  headline2: 'Web3投资交流社区',
  subheader:
    'WolfPlanet 是基于区块链技术，让投资知识交流无界限，让创作更有价值',
  homeHeroImage: HomeHeroPhone,
};

const FirstSectionDataEn = {
  headline: 'Globally Leading Web3 Investment and Communication Community',
  headline1: 'Globally Leading Web3',
  headline2: 'Investment and Communication Community',
  subheader:
    'Based on blockchain technology, make investment knowledge exchange limitless and creation more valuable',
  homeHeroImage: HomeHeroPhone,
};

const SecondSectionData = {
  headline: '故事的起点',
  cards: [
    {
      id: 1,
      title: '1',
      description: '某一天，萌狼们开始探索太空投资的机会',
      image: IllustrationStory1,
    },
    {
      id: 2,
      title: '2',
      description:
        '萌狼们化身太空流浪者在太空中探索并共同创立了Wolf Planet投资交流社区',
      image: IllustrationStory2,
    },
    {
      id: 3,
      title: '3',
      description: '太空流浪者们在外太空中探索发现了不同的星球',
      image: IllustrationStory3,
    },
    {
      id: 4,
      title: '4',
      description: '每个星球都是一个理想的投资交流场所，故事由此开始...',
      image: IllustrationStory4,
    },
  ],
};

const SecondSectionDataEn = {
  headline: 'The starting point of the Investment Journey',
  cards: [
    {
      id: 1,
      title: '1',
      description:
        'One day, the young wolves began exploring space investment opportunities.',
      image: IllustrationStory1,
    },
    {
      id: 2,
      title: '2',
      description:
        'The wolves transformed into space wanderers, co-founding WolfPlanet investment community.',
      image: IllustrationStory2,
    },
    {
      id: 3,
      title: '3',
      description:
        'Venturing deeper, the wanderers discovered planets with investment and communication potential.',
      image: IllustrationStory3,
    },
    {
      id: 4,
      title: '4',
      description:
        'Each planet they discovered proved to be an ideal place for investment communication. And the Investment Journey of the WolfPlanet community begins here…',
      image: IllustrationStory4,
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
const ThirdSectionDataEn = {
  headline: 'A Comprehensive Global Investment Community',
  cards: [
    {
      id: 1,
      title: 'Knowledge Sharing',
      bulletPoints: [
        'Global Community of Investment Enthusiasts',
        'Exchanging investment Insights and Strategies',
        'Real-time interactive discussions',
      ],
      logo: CardIcon1,
    },
    {
      id: 2,
      title: 'Tribal Camaraderie',
      bulletPoints: [
        'Building a Global, Cross-Disciplinary Investor Community',
        'Share Investment Insights in Real-Time',
        'Connect with Like-Minded Investment Partners',
      ],
      logo: CardIcon2,
    },
    {
      id: 3,
      title: 'Global Perspective',
      bulletPoints: [
        'Insights on Global Market Dynamics',
        'Explore investment opportunities across asset classes',
        'Accessing real-time investment Insights',
      ],
      logo: CardIcon3,
    },
    {
      id: 4,
      title: 'Investment Education',
      bulletPoints: [
        'Professional investment Education Courses',
        'Investment Skills Development Guided by Industry Experts',
        'Stay Ahead of the Curve with Continuously Updated Insights',
      ],
      logo: CardIcon4,
    },
  ],
  bottomCards: [
    {
      id: 1,
      title: 'New Investor',
      bulletPoints: [
        'Accelerate Your Investment Skills ',
        'Connect with investment experts',
        'Gain Insights into global market trends',
      ],
      image: IllustrationImage1,
    },
    {
      id: 2,
      title: 'Professional Investor',
      bulletPoints: [
        'Knowledge sharing for economic benefits',
        'Grow Your Audience Reach',
        'Share investment knowledge Across Borders',
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

const FourthSectionDataEn = {
  headline:
    'Leveraging blockchain technology, establish an independent, secure, and limitless investment exchange community.',
  cardsContent: [
    {
      id: 1,
      title: 'Decentralization',
      content: [
        'Robust system security',
        'Transparent and Immutable Information',
        'Safer, More Equitable, and Transparent Technology',
      ],
      image: IllustrationDecentralisation,
    },
    {
      id: 2,
      title: 'Borderless Ecosystem',
      content: [
        'Borderless Communication and Collaboration',
        'Global Community Building and Resource Sharing',
        'Equitable Opportunities and Access',
      ],
      image: IllustrationNoGeographical,
    },
    {
      id: 3,
      title: 'DAO Governance',
      content: [
        'Decentralized Autonomy via Smart Contracts',
        'Community-Driven User Participation',
        'Transparent and open governance',
      ],
      image: IllustrationDAOCommunity,
    },
    {
      id: 4,
      title: 'Revenue Model',
      content: [
        'Community contributions Rewarded in Tokens',
        'Participation Rewarded',
        'Monetize Content through NFTs',
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

const PlanetSectionDataEn = {
  headline:
    'Embark on an Odyssey through the Seven Stars: Discover the WolfPlanet Universe',
  subheader:
    'WolfPlanet is a captivating interplanetary community, where seven distinct worlds offer diverse attributes and gameplay experiences.',
};

const FifthSectionDataEn = {
  headline: 'Application User Interface',
  cards: [
    {
      id: 1,
      title: 'DAO community',
      description: 'Empower the community with shared governance.',
      image: iPhoneImage1,
    },
    {
      id: 2,
      title: 'NFT',
      description: 'Collect Digital Asset Collections',
      image: iPhoneImage2,
    },
    {
      id: 3,
      title: 'Investment course',
      description:
        'Explore a diverse range of investment courses shared by global experts. ',
      image: iPhoneImage3,
    },
    {
      id: 4,
      title: 'Mystery box',
      description: 'Discover delightful surprises and joyful experiences.',
      image: iPhoneImage4,
    },
    {
      id: 5,
      title: 'Wolf Tooth',
      description: 'Exciting rewards and events await you.',
      image: iPhoneImage5,
    },
  ],
};

const FifthSectionData = {
  headline: '應用界面展示',
  cards: [
    {
      id: 1,
      title: 'DAO社区',
      description: '让每个人拥有社区治理权力',
      image: iPhoneImage1,
    },
    {
      id: 2,
      title: 'NFT',
      description: '收藏数字资产藏品',
      image: iPhoneImage2,
    },
    {
      id: 3,
      title: '投资课程',
      description: '来自全球的投资课程分享任你选择 ',
      image: iPhoneImage3,
    },
    {
      id: 4,
      title: '盲盒',
      description: '收获意想不到的惊喜与乐趣',
      image: iPhoneImage4,
    },
    {
      id: 5,
      title: '狼牙',
      description: '更多权益和活动等着你',
      image: iPhoneImage5,
    },
  ],
};

const Home = (props: IProps) => {
  const router = useRouter();
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

  const getPageData = async () => {
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/cms/website/content/list?contentTemplateName=CMS`,
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
      console.log('res', res);
      console.log('data JSON', data);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  useEffect(() => {
    console.log('homepage router.locale', router.locale);
  }, [router]);

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
          <FirstSection
            data={
              router.locale === 'en' ? FirstSectionDataEn : FirstSectionData
            }
          />
          <SecondSection
            data={
              router.locale === 'en' ? SecondSectionDataEn : SecondSectionData
            }
          />
          <ThirdSection
            data={
              router.locale === 'en' ? ThirdSectionDataEn : ThirdSectionData
            }
          />
          <FourthSection
            data={
              router.locale === 'en' ? FourthSectionDataEn : FourthSectionData
            }
          />
          <PlanetSection
            data={
              router.locale === 'en' ? PlanetSectionDataEn : PlanetSectionData
            }
          />
          <FifthSection
            data={
              router.locale === 'en' ? FifthSectionDataEn : FifthSectionData
            }
          />
          <DownloadSection />
        </div>
      )}

      {isMobile && (
        <>
          <FirstMobileSection
            data={
              router.locale === 'en' ? FirstSectionDataEn : FirstSectionData
            }
          />
          <SecondMobileSection
            data={
              router.locale === 'en' ? SecondSectionDataEn : SecondSectionData
            }
          />
          <ThirdMobileSection
            data={
              router.locale === 'en' ? ThirdSectionDataEn : ThirdSectionData
            }
          />
          <FourthMobileSection
            data={
              router.locale === 'en' ? FourthSectionDataEn : FourthSectionData
            }
          />
          <PlanetMobileSection
            data={
              router.locale === 'en' ? PlanetSectionDataEn : PlanetSectionData
            }
          />
          <FifthMobileSection
            data={
              router.locale === 'en' ? FifthSectionDataEn : FifthSectionData
            }
          />
          <DownloadMobileSection />
        </>
      )}
    </>
  );
};

export default Home;
