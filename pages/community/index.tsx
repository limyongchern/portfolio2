import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Flex, Grid, Stack, Transition } from '@mantine/core';
import { Body, Heading } from 'components/typography';
// import WolfTooth from '../../public/Coin.svg';
// import WolfToken from '../../public/WolfCoin.svg';
import Image from 'next/image';

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

const FourthSectionData = {
  headline: '个性化的“你”',
  subheader:
    '不断地互动和完成社区任务，即可获得能够彰显个人专业性的勋章！佩戴多种多样的勋章，抽取然后组合出独特的萌狼NFT，打造SBT，个性化属于你的狼星身份吧！',
  image: MobilePersonalized,
};

const FifthSectionData = {
  headline: '学习，成为更好的自己',
  subheader:
    '害怕知识不足，跟不上伙伴们投资的步伐？别担心！Wolf Planet不但为你准备了全方位的投资课程让你少走弯路，更汇聚了全球各地的顶尖分析师为你的投资之旅保驾护航！无论是金融知识还是投资技巧，我们都会为您提供最优质的资源，让您在投资中游刃有余，快人一步！',
  image: CommunityIllustration2,
};

const Community = () => {
  //MOBILE AND DESKTOP
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
  console.log(width);

  return (
    <>
      {!isMobile && (
        <>
          <FirstSection data={FirstSectionData} />
          <SecondSection data={SecondSectionData} />
          <ThirdSection data={ThirdSectionData} />
          <FourthSection data={FourthSectionData} />
          <FifthSection data={FifthSectionData} />
        </>
      )}
      {isMobile && (
        <>
          <FirstMobileSection data={FirstSectionData} />
          <SecondMobileSection data={SecondSectionData} />
          <ThirdMobileSection data={ThirdSectionData} />
          <FourthMobileSection data={FourthSectionData} />
          <FifthMobileSection data={FifthSectionData} />
        </>
      )}
    </>
  );
};

export default Community;
