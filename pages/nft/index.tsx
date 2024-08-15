import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Stack } from '@mantine/core';
import { Body, BodyBold } from 'components/typography';
import Image from 'next/image';
import BlueEar from 'public/NFT/BlueEar.png';
import BlueEyebrow from 'public/NFT/BlueEyebrow.png';
import BlueEye from 'public/NFT/BlueEye.png';
import BlueNose from 'public/NFT/BlueNose.png';
import BlueBody from 'public/NFT/BlueBody.png';
import WholePlanet3 from 'public/Planet/wholeplanet3.png';
import SecondSection from 'components/nft/secondSection';
import SecondMobileSection from 'components/nft/secondMobileSection';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FirstSectionData = {
  headline: 'Wolf NFT (Non-Fungible Token)',
  subheader:
    '作为全球领先的Web3投资交流社区Wolf Planet的用户，你可以通过社区互动获取到种类丰富的Wolf NFT，个性化自己的形象，并通过Wolf NFT的交换获取收益。',
};

const SecondSectionData = {
  headline: '个人形象NFT',
  subheader:
    '萌狼，是每一位冒险家在Wolf Planet探索过程当中个人形象的代表，更是社区身份的体现。用户在收集到包括眼睛、眉毛、耳朵、嘴巴和身体在内的五个碎片NFT后，便可以一步步打造出一只属于自己的萌狼。',
  title: '积极参与社区互动，收集稀有度更高的萌狼NFT，组合出独一无二的萌狼吧！',
  cards: [BlueEar, BlueEyebrow, BlueEye, BlueNose, BlueBody],
};

const ThirdSectionData = {
  headline: '角色成就NFT',
  subheader:
    '不断在社区中做出贡献，参与Wolf Planet不定期举办的活动即有机会获得社区发放的专属NFT勋章，可能是“最佳创作者”，或是“金牌评论家”，甚至是“社区管理员”。收集不同的NFT勋章，合成为你专属的SBT（Soulbound Token）吧！',
};

const FourthSectionData = {
  headline: '内容NFT',
  subheader1: `Wolf Planet希望更好地保护创作者的版权，每一位创作者都具有将自己原创的帖子铸造成为NFT的权利。`,
  list1:
    '每位用户都可以将自己认为有价值的文字或是一段宝贵的投资经验铸造为具有价值的NFT，从而将其分享给其他人，并从中获得收益；',
  list2:
    '对于课程的创作者们来说，平台提供了将课程以NFT形式存放在区块链上的功能，鼓励创作者们以更加安全高效的方式通过创作获利；',
  subheader2:
    '在Wolf Planet，我们鼓励“创作获利”（Create to Earn），你的每一次付出都应该有回报。',
};

const Nft = () => {
  //MOBILE AND DESKTOP
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [scrollPosition, setScrollPosition] = useState(0);
  const [displayFull, setDisplayFull] = useState(false);

  const handleWindowSizeChange = () => {
    setWidth(typeof window !== 'undefined' ? window.innerWidth : 0);
  };

  useEffect(() => {
    if (width <= 835) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, [width]);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    // console.log('scroll', position);
    if (!isMobile) {
      if (position > 900) {
        setDisplayFull(true);
      } else if (position < 520) {
        setDisplayFull(false);
      }
    } else {
      if (position > 3400) {
        setDisplayFull(true);
      } else if (position < 3200) {
        setDisplayFull(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  // const startValue = '25% 20%';
  // const startValue = 'top 5%';
  // const startValueMobile = 'top 20%';
  // const endValue = '+=800';
  // const endValueMobile = '+=100';
  // const toggleActionsValue = 'play pause reverse reset';
  // // const toggleActionsValue = 'play none none none';
  // const scrubValue = 1;
  // const durationValue = 0.5;

  //Desktop Animation

  // useGSAP(() => {
  //   gsap.to('.boxContainer', {
  //     scrollTrigger: {
  //       trigger: '.boxContainer',
  //       start: startValue,
  //       toggleActions: toggleActionsValue,
  //       // start: 'top 5%',
  //       // end: '34% 50%',
  //       end: endValue,
  //       pin: true,
  //     },
  //     duration: durationValue,
  //   });
  // });

  // useGSAP(() => {
  //   gsap.to('.boxContainerMobile', {
  //     scrollTrigger: {
  //       trigger: '.boxContainerMobile',
  //       start: startValue,
  //       toggleActions: toggleActionsValue,
  //       // start: 'top 5%',
  //       // end: '34% 50%',
  //       end: endValueMobile,
  //       pin: true,
  //     },
  //     duration: durationValue,
  //   });
  // });

  // useGSAP(() => {
  //   gsap.to('.box1', {
  //     scrollTrigger: {
  //       trigger: '.box1',
  //       start: startValue,
  //       toggleActions: toggleActionsValue,
  //       scrub: scrubValue,
  //       // markers: true,
  //     },
  //     x: 410,
  //     duration: durationValue,
  //   });
  // });
  // useGSAP(() => {
  //   gsap.to('.box2', {
  //     scrollTrigger: {
  //       trigger: '.box2',
  //       start: startValue,
  //       toggleActions: toggleActionsValue,
  //       scrub: scrubValue,
  //     },
  //     x: 205,
  //     duration: durationValue,
  //   });
  // });
  // useGSAP(() => {
  //   gsap.to('.box4', {
  //     scrollTrigger: {
  //       trigger: '.box4',
  //       start: startValue,
  //       toggleActions: toggleActionsValue,
  //       scrub: scrubValue,
  //     },
  //     x: -205,
  //     duration: durationValue,
  //   });
  // });
  // useGSAP(() => {
  //   gsap.to('.box5', {
  //     scrollTrigger: {
  //       trigger: '.box5',
  //       start: startValue,
  //       toggleActions: toggleActionsValue,
  //       scrub: scrubValue,
  //     },
  //     x: -410,
  //     duration: durationValue,
  //   });
  // });

  //Mobile Animation

  // useGSAP(() => {
  //   gsap.to('.boxMobileContainer', {
  //     scrollTrigger: {
  //       trigger: '.boxMobileContainer',
  //       start: startValue,
  //       toggleActions: toggleActionsValue,
  //       // start: 'top 5%',
  //       // end: '34% 50%',
  //       end: endValueMobile,
  //       pin: true,
  //     },
  //     duration: durationValue,
  //   });
  // });
  // useGSAP(() => {
  //   gsap.to('.boxMobile2', {
  //     scrollTrigger: {
  //       trigger: '.boxMobileContainer',
  //       start: startValueMobile,
  //       toggleActions: toggleActionsValue,
  //       scrub: scrubValue,
  //     },
  //     y: -205,
  //     duration: durationValue,
  //   });
  // });
  // useGSAP(() => {
  //   gsap.to('.boxMobile3', {
  //     scrollTrigger: {
  //       trigger: '.boxMobileContainer',
  //       start: startValueMobile,
  //       toggleActions: toggleActionsValue,
  //       scrub: scrubValue,
  //     },
  //     y: -410,
  //     duration: durationValue,
  //   });
  // });
  // useGSAP(() => {
  //   gsap.to('.boxMobile4', {
  //     scrollTrigger: {
  //       trigger: '.boxMobileContainer',
  //       start: startValueMobile,
  //       toggleActions: toggleActionsValue,
  //       scrub: scrubValue,
  //     },
  //     y: -615,
  //     duration: durationValue,
  //   });
  // });
  // useGSAP(() => {
  //   gsap.to('.boxMobile5', {
  //     scrollTrigger: {
  //       trigger: '.boxMobileContainer',
  //       start: startValueMobile,
  //       toggleActions: toggleActionsValue,
  //       scrub: scrubValue,
  //       // markers: true,
  //     },
  //     y: -820,
  //     duration: durationValue,
  //   });
  // });

  return (
    <>
      {/* First Section */}
      <div className={styles.container}>
        <div className={styles.containerWidth}>
          <Stack justify="center" align="center" spacing={'24px'} mt={'0px'}>
            {isMobile && (
              <Image
                src={WholePlanet3}
                alt=""
                className={styles.planetImage}
                style={{ marginTop: -50 }}
              />
            )}
            <BodyBold
              color="#F2F3F7"
              variant={7}
              style={{ textAlign: 'center', marginTop: isMobile ? 0 : 150 }}>
              {FirstSectionData.headline}
            </BodyBold>
            <Body
              color="#9198B0"
              variant={isMobile ? 1 : 8}
              style={{ textAlign: 'center' }}>
              {FirstSectionData.subheader}
            </Body>
          </Stack>
        </div>
      </div>
      {/* Second Desktop Section */}
      {!isMobile ? <SecondSection /> : <SecondMobileSection />}
    </>
  );
};

export default Nft;
