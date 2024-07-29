import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { Button, Flex, Stack } from '@mantine/core';
import { Body, BodyBold, Heading } from 'components/typography';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import dynamic from 'next/dynamic';

import DownloadSection from 'components/common/DownloadSection';
import DownloadMobileSection from 'components/common/DownloadMobileSection';

const WhitepaperData = {
  headline: '深入了解狼星球：技术架构、经济模型、治理机制',
  subheader:
    '狼星球白皮书是狼星球项目发展的路线图和指南针，阐述了项目的愿景、目标、技术架构、经济模型、治理机制等核心内容。白皮书的发布标志着狼星球项目从概念走向现实，迈入了关键发展阶段。',
};

const PDFViewer = dynamic(
  () => import('../../components/whitepaper/PdfViewer'),
  {
    ssr: false,
  }
);
const Whitepaper = () => {
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

  return (
    <>
      {!isMobile ? (
        <div className={styles.container}>
          <div className={styles.containerWidth}>
            <Stack justify="center" align="center" spacing={'24px'}>
              <BodyBold
                color="#F2F3F7"
                variant={7}
                style={{ textAlign: 'center' }}>
                {WhitepaperData.headline}
              </BodyBold>
              <Body color="#9198B0" variant={1} style={{ textAlign: 'center' }}>
                {WhitepaperData.subheader}
              </Body>
            </Stack>
            <div style={{ margin: '56px 0' }}>
              <PDFViewer />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.mobileContainer}>
          <div className={styles.containerMobileWidth}>
            <Stack
              justify="center"
              align="center"
              spacing={'24px'}
              p={'0px 10px 0 10px'}>
              <BodyBold
                color="#F2F3F7"
                variant={7}
                style={{ textAlign: 'center' }}>
                {WhitepaperData.headline}
              </BodyBold>
              <Body color="#9198B0" variant={1} style={{ textAlign: 'center' }}>
                {WhitepaperData.subheader}
              </Body>
            </Stack>
            <div style={{ margin: '56px 0' }}>
              <PDFViewer />
            </div>
          </div>
        </div>
      )}
      {!isMobile ? <DownloadSection /> : <DownloadMobileSection />}
    </>
  );
};

export default Whitepaper;
