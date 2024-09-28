import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import FirstSection from 'components/community/firstSection';
import FirstMobileSection from 'components/community/firstMobileSection';

import SecondSection from 'components/community/secondSection';
import SecondMobileSection from 'components/community/secondMobileSection';

import ThirdSection from 'components/community/thirdSection';
import ThirdMobileSection from 'components/community/thirdMobileSection';

import FourthSection from 'components/community/fourthSection';
import FourthMobileSection from 'components/community/fourthMobileSection';

import FifthSection from 'components/community/fifthSection';
import FifthMobileSection from 'components/community/fifthMobileSection';

// Images for first section
import CommunityIllustration1 from 'public/Community/CommunityIllustration1.png';

// Images for second section
// import DaoImage1 from 'public/Community/DaoImage1.png';
import DaoImage1 from 'public/Planet/wholeplanet5.png';
import DaoImage2 from 'public/Community/DaoImage2.png';
import DaoImage3 from 'public/Community/DaoImage3.png';

//Images for third section
import WolfTooth from 'public/WolfToken.svg';
import WolfToken from 'public/WolfCoin.svg';

//Images for fourth section
import MobilePersonalized from 'public/Community/MobilePersonalized.png';

// Images for fifth section
import CommunityIllustration2 from 'public/Community/CommunityIllustration2.png';

const FirstSectionData = {
  title: '社区玩法',
  headline: '加入Wolf Planet',
  description:
    '即刻与世界各地各领域投资爱好者一起，一起在全球领先的去中心化投资交流社区学习、交流，掌握行业一手资讯，享受安全高效的投资交流新体验！',
  image: CommunityIllustration1,
};

const FirstSectionDataEn = {
  title: 'Community Gameplay',
  headline: 'Join Wolf Planet',
  description: `Join the world's leading decentralized investment community to learn, exchange ideas, and access industry insights with investment enthusiasts globally. Experience a secure and efficient new investment exchange.`,
  image: CommunityIllustration1,
};

const SecondSectionData = {
  headline: '欢迎来到DAO',
  subheader:
    'Wolf Planet的每一个星球/部落/小队都是一个独立的DAO，拥有真正的去中心化和用户自治性。我们鼓励每一个有想法的你加入并参与到DAO的创建和治理中去，发挥你的影响力，共同塑造社群的未来！',
  cards: [
    {
      id: 0,
      title: '星球',
      description:
        '星球是狼星球的基础单位，是用户参与投资交流、创作内容、打造个人 IP 形象等活动的主要场所。每一个星球都有自己的治理机制，用户可以通过投票、提案等方式参与星球的治理。',
      image: DaoImage1,
    },
    {
      id: 1,
      title: '部落',
      description:
        '部落是星球内的子单位，是一个由志同道合用户组成的社区。部落可以根据用户的兴趣爱好、投资理念等因素进行划分。部落可以制定自己的规则和规范，自主管理部落的内部事务。',
      image: DaoImage2,
    },
    {
      id: 2,
      title: '小队',
      description:
        '小队是用户自发创建、自主管理的跨星球跨领域社交群组。让来自不同星球不同部落的同好们也能够进行直接的交流，分享彼此的观点，共同学习进步。',
      image: DaoImage3,
    },
  ],
};

const SecondSectionDataEn = {
  headline: 'Welcome to DAO',
  subheader: `Each planet/tribe/squad in WolfPlanet is an independent DAO with genuine decentralization and user autonomy. We encourage every visionary to join and participate in the creation and governance of the DAO, exerting your influence to collectively shape the future of the community!`,
  cards: [
    {
      id: 0,
      title: 'Planet',
      description: `Planets are the fundamental units of WolfPlanet, where users can engage in investment exchange, content creation, and personal IP development. Each planet has its own governance mechanism, enabling user participation through voting, proposals, and other means.`,
      image: DaoImage1,
    },
    {
      id: 1,
      title: 'Tribe',
      description: `Tribes are sub-units within the planets, comprising communities of like-minded users. Tribes can be organized based on shared interests, investment approaches, and other criteria. Tribes have the autonomy to establish their own rules and manage their internal affairs.`,
      image: DaoImage2,
    },
    {
      id: 2,
      title: 'Squad',
      description: `Squads are self-organized, cross-planetary and cross-domain social groups that allow users with shared interests to communicate directly, share experiences, and learn together.`,
      image: DaoImage3,
    },
  ],
};

const ThirdSectionData = {
  firstCard: {
    title: '让内容 “有回响”，更“有价值”',
    description:
      '在Wolf Planet，每一次发声都算数！发表你独特的观点贴文，参与评论一起讨论；抑或是点赞、分享、收藏令你感同身受、醍醐灌顶的文字。不论以何种形式，你都可以在这里找到志同道合的伙伴，发掘投资道路上的无限可能。同时，每一次发帖和互动都将为你积累升级所需的经验值和狼牙奖励。更高的等级意味着在社群中的身份，而狼牙的数量则是日后获取狼币的保证。',
  },
  secondCard: {
    icon: WolfTooth,
    title: '狼牙',
    description:
      '狼牙是平台上的股票币，狼牙的主要功能是用于平台的分红，平台会在特定时间根据用户持有的狼牙比例进行狼币空投。',
  },
  thirdCard: {
    icon: WolfToken,
    title: '狼币',
    description:
      '狼币是平台的通用货币，可以用于购买课程、铸造NFT，或进行其他交易。',
  },
};

const ThirdSectionDataEn = {
  firstCard: {
    title: `Making content "resonate" and more "valuable"`,
    description: `In WolfPlanet, every voice matters! Share your unique perspectives and insights through posts, engage in discussions through comments, or show your appreciation by liking, sharing, and saving meaningful content. No matter how you choose to participate, you can find like-minded partners here and uncover endless investment possibilities. Each post and interaction will also earn you experience points and Wolf Tooth rewards, which will determine your status within the community and serve as a guarantee for future Wolf Coin acquisition.`,
  },
  secondCard: {
    icon: WolfTooth,
    title: 'Wolf Tooth',
    description: `Wolf Tooth is the platform's equity token. The primary function of Wolf Tooth is to facilitate platform dividends, as the platform will periodically airdrop Wolf Coins to users based on their proportional Wolf Tooth holdings.`,
  },
  thirdCard: {
    icon: WolfToken,
    title: 'Wolf Coin',
    description: `Wolf Coin is the platform's universal currency, which can be used to purchase courses, mint NFTs, and conduct other transactions.
`,
  },
};

const FourthSectionData = {
  headline: '个性化的“你”',
  subheader:
    '不断地互动和完成社区任务，即可获得能够彰显个人专业性的勋章！佩戴多种多样的勋章，抽取然后组合出独特的萌狼NFT，打造SBT，个性化属于你的狼星身份吧！',
  image: MobilePersonalized,
};

const FourthSectionDataEn = {
  headline: `Personalized "You"`,
  subheader: `By continuously interacting and completing community tasks, you can earn badges that showcase your personal expertise. Collect and combine a variety of badges to randomly generate unique Wolf NFTs, creating your own SBT and personalized WolfPlanet identity.`,
  image: MobilePersonalized,
};

const FifthSectionData = {
  headline: '学习，成为更好的自己',
  subheader:
    '害怕知识不足，跟不上伙伴们投资的步伐？别担心！Wolf Planet不但为你准备了全方位的投资课程让你少走弯路，更汇聚了全球各地的顶尖分析师为你的投资之旅保驾护航！无论是金融知识还是投资技巧，我们都会为您提供最优质的资源，让您在投资中游刃有余，快人一步！',
  image: CommunityIllustration2,
};

const FifthSectionDataEn = {
  headline: 'Learn, become your best self',
  subheader: `Afraid of lacking knowledge and falling behind your peers in investments? Don’t Worry! WolfPlanet has prepared comprehensive investment courses to save you from pitfalls, and also assembled top global analysts to guide you on your investment journey. Whether it's financial knowledge or investment skills, we will provide you with the highest-quality resources to ensure you excel in investments and stay ahead of the curve.`,
  image: CommunityIllustration2,
};

const Community = () => {
  const router = useRouter();
  //MOBILE AND DESKTOP
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 850) {
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
  console.log(width);

  return (
    <>
      {!isMobile && (
        <>
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
          <FifthSection
            data={
              router.locale === 'en' ? FifthSectionDataEn : FifthSectionData
            }
          />
        </>
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
          <FifthMobileSection
            data={
              router.locale === 'en' ? FifthSectionDataEn : FifthSectionData
            }
          />
        </>
      )}
    </>
  );
};

export default Community;
