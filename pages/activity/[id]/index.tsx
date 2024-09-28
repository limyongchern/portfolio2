import { Stack } from '@mantine/core';
import styles from './index.module.scss';
import Image from 'next/image';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import Sample from 'public/Cards-Landing.png';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  Link,
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import DownloadSection from 'components/common/DownloadSection';
import DownloadMobileSection from 'components/common/DownloadMobileSection';
import { BACKEND_URL, API_KEY } from '../../../utils/endpoints';
import { formatDate } from '../../../utils/common';

const DummyData = {
  author: 'WolfPlanet',
};

const DummyDataEn = {
  author: 'WolfPlanet',
};

const Activity = () => {
  const router = useRouter();
  console.log('Activity page router.query.id', router.query.id);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [activityData, setActivityData] = useState<any>();
  const [fbLink, setFbLink] = useState('');
  const [igLink, setIgLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState('');
  const [imageUrl, setImageUrl] = useState('');

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
        `${BACKEND_URL}/api/cms/website/content/info/${router.query.id}`,
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
      console.log('ACTIVITY data', data);
      if (data) {
        setActivityData(data.message);
        setFbLink(data.message.body.Facebook);
        setIgLink(data.message.body.Instagram);
        setLinkedInLink(data.message.body.LinkedIn);
        const imageRes = await fetch(
          `${BACKEND_URL}/api/bucket/pocketBase/cms/get/${data.message.body.Image}`,
          {
            method: 'GET',
            // @ts-ignore
            headers: {
              'x-api-key': API_KEY,
              'Content-Type': 'application/json',
            },
          }
        );
        const imageData = await imageRes.json();
        console.log('imageData', imageData);
        setImageUrl(imageData.message.url);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    if (router.query.id) {
      getPageData();
    }
  }, [router.query.id]);

  return (
    <>
      <div className={styles.container}>
        <Stack className={styles.content}>
          <div
            style={{
              maxWidth: 706.667,
              textAlign: 'start',
              paddingLeft: isMobile ? 0 : 4,
            }}>
            {router.locale === 'en' ? (
              <Heading
                variant={isMobile ? 2 : 1}
                color="#F2F3F7"
                style={{ lineHeight: 1.5 }}>
                {activityData?.body?.Title}
              </Heading>
            ) : (
              <BodyBold variant={7} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
                {activityData?.body?.TitleCN}
              </BodyBold>
            )}
            <div style={{ display: 'flex', gap: '16px', marginTop: 28 }}>
              {fbLink !== '' && (
                <a href={fbLink} target="_blank">
                  <FacebookLogo className={styles.icons} />
                </a>
              )}

              {igLink !== '' && (
                <a href={igLink} target="_blank">
                  <InstagramLogo className={styles.icons} />
                </a>
              )}
              {linkedInLink !== '' && (
                <a href={linkedInLink} target="_blank">
                  <LinkedinLogo className={styles.icons} />
                </a>
              )}
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: 28 }}>
              {router.locale === 'en' ? (
                <Heading
                  variant={isMobile ? 4 : 5}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {activityData?.publishedDatetime &&
                    formatDate(activityData?.publishedDatetime)}
                </Heading>
              ) : (
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {activityData?.publishedDatetime &&
                    formatDate(activityData?.publishedDatetime)}
                </BodyBold>
              )}
              <Body
                variant={2}
                color="#9198B0"
                style={{ marginTop: router.locale === 'en' ? 1 : 7 }}>
                |
              </Body>
              {router.locale === 'en' ? (
                <Heading
                  variant={isMobile ? 4 : 5}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {DummyDataEn.author}
                  {/* {activityData.author} */}
                </Heading>
              ) : (
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {DummyData.author}
                  {/* {activityData.author} */}
                </BodyBold>
              )}
            </div>
          </div>
          <Image
            src={imageUrl}
            alt="sample"
            width={836}
            height={492}
            className={styles.image}
          />
          {router.locale === 'en' ? (
            <BodyDmsans
              variant={isMobile ? 6 : 2}
              color={isMobile ? '#F2F3F7' : 'rgba(254, 254, 254, 1.00)'}
              style={{
                paddingLeft: isMobile ? 0 : 4,
                paddingTop: 20,
                whiteSpace: 'pre-line',
                textAlign: 'justify',
              }}>
              {activityData?.body?.Content}
            </BodyDmsans>
          ) : (
            <Body
              variant={1}
              color={isMobile ? '#F2F3F7' : 'rgba(254, 254, 254, 1.00)'}
              style={{
                paddingLeft: isMobile ? 8 : 4,
                paddingTop: 20,
                whiteSpace: 'pre-line',
              }}>
              {activityData?.body?.ContentCN}
            </Body>
          )}
        </Stack>
      </div>

      {!isMobile ? <DownloadSection /> : <DownloadMobileSection />}
    </>
  );
};

export default Activity;
