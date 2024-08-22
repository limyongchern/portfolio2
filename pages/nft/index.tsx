import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { Stack } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
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

const FirstSectionDataEn = {
  headline: 'Wolf NFT (Non-Fungible Token)',
  subheader: `As a user of the leading global Web3 investment community WolfPlanet, you can acquire a diverse range of Wolf NFTs through community interactions, personalize your identity, and generate earnings by exchanging these Wolf NFTs.`,
};

const Nft = () => {
  const router = useRouter();
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
            {router.locale === 'en' ? (
              <>
                <Heading
                  color="#F2F3F7"
                  variant={isMobile ? 2 : 1}
                  style={{
                    textAlign: 'center',
                    marginTop: isMobile ? 0 : 150,
                  }}>
                  {FirstSectionDataEn.headline}
                </Heading>
                <BodyDmsans
                  color="#9198B0"
                  variant={isMobile ? 1 : 2}
                  style={{ textAlign: 'center' }}>
                  {FirstSectionDataEn.subheader}
                </BodyDmsans>
              </>
            ) : (
              <>
                <BodyBold
                  color="#F2F3F7"
                  variant={7}
                  style={{
                    textAlign: 'center',
                    marginTop: isMobile ? 0 : 150,
                  }}>
                  {FirstSectionData.headline}
                </BodyBold>
                <Body
                  color="#9198B0"
                  variant={isMobile ? 1 : 8}
                  style={{ textAlign: 'center' }}>
                  {FirstSectionData.subheader}
                </Body>
              </>
            )}
          </Stack>
        </div>
      </div>
      {/* Second Desktop Section */}
      {!isMobile ? <SecondSection /> : <SecondMobileSection />}
    </>
  );
};

export default Nft;
