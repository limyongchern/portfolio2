import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.scss';
import { Button, Flex, Stack } from '@mantine/core';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { CaretCircleLeft, CaretCircleRight } from '@phosphor-icons/react';
import dynamic from 'next/dynamic';

import DownloadSection from 'components/common/DownloadSection';
import DownloadMobileSection from 'components/common/DownloadMobileSection';
import { BACKEND_URL, API_KEY } from '../../utils/endpoints';

const WhitepaperData = {
  headline: '深入了解狼星球：技术架构、经济模型、治理机制',
  subheader:
    '狼星球白皮书是狼星球项目发展的路线图和指南针，阐述了项目的愿景、目标、技术架构、经济模型、治理机制等核心内容。白皮书的发布标志着狼星球项目从概念走向现实，迈入了关键发展阶段。',
};

const WhitepaperDataEn = {
  headline:
    'Exploring the WolfPlanet: Technical Framework, Economic Model, and Governance Mechanism',
  subheader: `The WolfPlanet whitepaper serves as the roadmap and guide for the project's development. It outlines the vision, goals, technical framework, economic model, and governance mechanism of the WolfPlanet initiative. The release of the whitepaper signals the project's transition from concept to reality, entering a critical stage of growth.`,
};

const PDFViewer = dynamic(
  () => import('../../components/whitepaper/PdfViewer'),
  {
    ssr: false,
  }
);
const Whitepaper = () => {
  const router = useRouter();
  //MOBILE AND DESKTOP
  const [isMobile, setIsMobile] = useState(false);
  const [whitepaperUrl, setWhitepaperUrl] = useState('');
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
      let wpId =
        router.locale === 'en'
          ? data.message[0].body.Whitepaper
          : data.message[0].body.WhitepaperCN;
      if (data) {
        const whitepaperRes = await fetch(
          `${BACKEND_URL}/api/bucket/pocketBase/cms/get/${wpId}`,
          {
            method: 'GET',
            // @ts-ignore
            headers: {
              'x-api-key': API_KEY,
              'Content-Type': 'application/json',
            },
          }
        );
        const dataWhitepaper = await whitepaperRes.json();
        setWhitepaperUrl(dataWhitepaper.message.url);
        localStorage.setItem('whitepaperUrl', dataWhitepaper.message.url);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getPageData();
  }, [router.locale]);

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
              {router.locale === 'en' ? (
                <>
                  <Heading
                    color="#F2F3F7"
                    variant={1}
                    style={{ textAlign: 'center' }}>
                    {WhitepaperDataEn.headline}
                  </Heading>
                  <BodyDmsans
                    color="#9198B0"
                    variant={2}
                    style={{ textAlign: 'center' }}>
                    {WhitepaperDataEn.subheader}
                  </BodyDmsans>
                </>
              ) : (
                <>
                  <BodyBold
                    color="#F2F3F7"
                    variant={7}
                    style={{ textAlign: 'center' }}>
                    {WhitepaperData.headline}
                  </BodyBold>
                  <Body
                    color="#9198B0"
                    variant={1}
                    style={{ textAlign: 'center' }}>
                    {WhitepaperData.subheader}
                  </Body>
                </>
              )}
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
              p={'0px 20px 0 20px'}>
              {router.locale === 'en' ? (
                <>
                  <Heading
                    color="#F2F3F7"
                    variant={2}
                    style={{ textAlign: 'center' }}>
                    {WhitepaperDataEn.headline}
                  </Heading>
                  <BodyDmsans
                    color="#9198B0"
                    variant={1}
                    style={{ textAlign: 'center' }}>
                    {WhitepaperDataEn.subheader}
                  </BodyDmsans>
                </>
              ) : (
                <>
                  <BodyBold
                    color="#F2F3F7"
                    variant={7}
                    style={{ textAlign: 'center' }}>
                    {WhitepaperData.headline}
                  </BodyBold>
                  <Body
                    color="#9198B0"
                    variant={1}
                    style={{ textAlign: 'center' }}>
                    {WhitepaperData.subheader}
                  </Body>
                </>
              )}
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
