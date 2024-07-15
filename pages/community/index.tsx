import React, { useEffect, useState } from 'react';
import styles from '../../styles/pages/community/index.module.scss';
import { Flex, Grid, Stack, Transition } from '@mantine/core';
import { Body, Heading } from 'components/typography';
import WolfTooth from '../../public/Coin.svg';
import WolfToken from '../../public/WolfCoin.svg';
import Image from 'next/image';

import SecondSection from 'components/community/secondSection';
import ThirdSection from 'components/community/thirdSection';
import FirstSection from 'components/community/firstSection';
import FourthSection from 'components/community/fourthSection';
import FirstMobileSection from 'components/community/firstMobileSection';
import SecondMobileSection from 'components/community/secondMobileSection';
import ThirdMobileSection from 'components/community/thirdMobileSection';
import FourthMobileSection from 'components/community/fourthMobileSection';

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
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
        </>
      )}
      {isMobile && (
        <>
          <FirstMobileSection />
          <SecondMobileSection />
          <ThirdMobileSection />
          <FourthMobileSection />
        </>
      )}
    </>
  );
};

export default Community;
