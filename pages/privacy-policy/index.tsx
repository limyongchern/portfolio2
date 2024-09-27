import { Flex, Stack } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from './index.module.scss';

import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';

import { useEffect, useState } from 'react';
import { BACKEND_URL, API_KEY } from '../../utils/endpoints';

const DummyData = {
  headline: '隐私政策',
  date: '28/12/2024',
  updateYear: '2024',
  updateMonth: '8',
  updateDay: '28',
  effectiveYear: '2024',
  effectiveMonth: '8',
  effectiveDay: '28',
};

const DummyDataEn = {
  headline: 'Privacy Policy',
  date: '28/12/2024',
  updateYear: '2024',
  updateMonth: '8',
  updateDay: '28',
  effectiveYear: '2024',
  effectiveMonth: '8',
  effectiveDay: '28',
};

const PrivacyPolicy = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [content, setContent] = useState('');
  const [contentCN, setContentCN] = useState('');

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
      console.log('data JSON', data);
      if (data) {
        setContent(data.message[0].body.PrivacyPolicy);
        setContentCN(data.message[0].body.PrivacyPolicyCN);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  const DisplayRichText = () => {
    const description = {
      __html: content,
    };
    const descriptionCN = {
      __html: contentCN,
    };

    return (
      <div
        dangerouslySetInnerHTML={
          router.locale === 'en' ? description : descriptionCN
        }
        className={router.locale === 'en' ? styles.myClassEn : styles.myClassCn}
      />
    );
  };

  return (
    <>
      <div className={styles.container}>
        <Stack className={styles.content}>
          <div
            style={{
              maxWidth: 706.667,
              textAlign: 'start',
              paddingLeft: isMobile ? 0 : 4,
              marginBottom: -30,
            }}>
            {router.locale === 'en' ? (
              <>
                <Heading
                  variant={isMobile ? 1 : 10}
                  color="#F2F3F7"
                  style={{ lineHeight: 1 }}>
                  {DummyDataEn.headline}
                </Heading>
                <Heading
                  variant={3}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, marginTop: 25 }}>
                  Update date: {DummyDataEn.updateYear}-
                  {DummyDataEn.updateMonth}-{DummyDataEn.updateDay}
                </Heading>
                <Heading
                  variant={3}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, marginTop: 10 }}>
                  Effective date: {DummyDataEn.effectiveYear}-
                  {DummyDataEn.effectiveMonth}-{DummyDataEn.effectiveDay}
                </Heading>
              </>
            ) : (
              <>
                <BodyBold
                  variant={7}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {DummyData.headline}
                </BodyBold>
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, marginTop: 25 }}>
                  更新日期：{DummyData.updateYear} 年 {DummyData.updateMonth} 月{' '}
                  {DummyData.updateDay} 日
                </BodyBold>
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5, marginTop: 10 }}>
                  生效日期：{DummyData.effectiveYear} 年{' '}
                  {DummyData.effectiveMonth} 月 {DummyData.effectiveDay} 日
                </BodyBold>
              </>
            )}
          </div>
          {DisplayRichText()}
        </Stack>
      </div>
    </>
  );
};

export default PrivacyPolicy;
