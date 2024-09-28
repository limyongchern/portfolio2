import { Stack } from '@mantine/core';
import styles from './index.module.scss';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
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

const AnnouncementDetail = () => {
  const router = useRouter();
  console.log('Activity page router.query.id', router.query.id);
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [announcementData, setAnnouncementData] = useState<any>();
  const [fbLink, setFbLink] = useState('');
  const [igLink, setIgLink] = useState('');
  const [linkedInLink, setLinkedInLink] = useState('');

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
      console.log('ANNOUCEMENT data', data);
      if (data) {
        setAnnouncementData(data.message);
        setFbLink(data.message.body.Facebook);
        setIgLink(data.message.body.Instagram);
        setLinkedInLink(data.message.body.LinkedIn);
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
                {announcementData?.body?.Title}
              </Heading>
            ) : (
              <BodyBold variant={7} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
                {announcementData?.body?.TitleCN}
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
                  {announcementData?.publishedDatetime &&
                    formatDate(announcementData?.publishedDatetime)}
                </Heading>
              ) : (
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {announcementData?.publishedDatetime &&
                    formatDate(announcementData?.publishedDatetime)}
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
                </Heading>
              ) : (
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {DummyData.author}
                </BodyBold>
              )}
            </div>
          </div>
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
              {announcementData?.body?.Content}
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
              {announcementData?.body?.ContentCN}
            </Body>
          )}
        </Stack>
      </div>

      {!isMobile ? <DownloadSection /> : <DownloadMobileSection />}
    </>
  );
};

export default AnnouncementDetail;
