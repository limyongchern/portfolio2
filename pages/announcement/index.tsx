import { Divider, Stack } from '@mantine/core';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { Body, BodyBold, BodyDmsans, Heading } from 'components/typography';
import { useEffect, useState } from 'react';
import styles from './index.module.scss';

const FourthSectionData = {
  headline: '公司公告',
  more: '更多',
  sections: [
    {
      id: 0,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 1,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 2,
      title: '服务器更新',
      date: '28/12/2024',
    },
    {
      id: 3,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 4,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 5,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 6,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 7,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 8,
      title: '产品迭代',
      date: '28/12/2024',
    },
    {
      id: 9,
      title: '产品迭代',
      date: '28/12/2024',
    },
  ],
};
const FourthSectionDataEn = {
  headline: 'Company Announcement',
  more: 'More',
  sections: [
    {
      id: 0,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 1,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 2,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 3,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 4,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 5,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 6,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 7,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 8,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
    {
      id: 9,
      title: 'Product Iteration',
      date: '28/12/2024',
    },
  ],
};

const Announcement = () => {
  const router = useRouter();
  // MOBILE AND DESKTOP
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
      {/* Fourth section (Announcements) */}
      <div className={styles.botContainer2}>
        <div style={{ width: '100%', maxWidth: 830 }}>
          <Stack mt={isMobile ? '120px' : '150px'} align="center">
            <div
              style={{
                display: 'flex',
                justifyContent: isMobile ? 'center' : 'space-between',
                flexDirection: isMobile ? 'column' : 'row',
                alignItems: 'center',

                width: '100%',
                maxWidth: '1064px',
                marginBottom: 40,
              }}>
              <div></div>
              {router.locale === 'en' ? (
                <Heading
                  variant={isMobile ? 2 : 1}
                  color="#F2F3F7"
                  style={{ textAlign: 'center' }}>
                  {FourthSectionDataEn.headline}
                </Heading>
              ) : (
                <BodyBold variant={7} color="#F2F3F7">
                  {FourthSectionData.headline}
                </BodyBold>
              )}

              <div></div>
            </div>
            <div style={{ width: '100%', maxWidth: '1064px' }}>
              {router.locale === 'en' ? (
                <>
                  {FourthSectionDataEn.sections.map((section, index) => (
                    <>
                      {index === 0 && (
                        <Divider
                          pb={'0px'}
                          color="rgba(145, 152, 176, 0.50)"
                          w={'100%'}
                        />
                      )}
                      <Link
                        href={`/announcement/${index}`}
                        style={{ textDecoration: 'none' }}>
                        <div
                          style={{
                            width: isMobile ? '' : '100%',
                            maxWidth: '1064px',
                            display: 'flex',
                            padding: '24px 24px',
                          }}>
                          <div style={{ display: 'flex', gap: 25 }}>
                            <BodyDmsans variant={2} color="#F2F3F7">
                              {section.date}
                            </BodyDmsans>
                            <BodyDmsans
                              variant={4}
                              color="#4178FA"
                              style={{ cursor: 'pointer' }}>
                              {section.title}
                            </BodyDmsans>
                          </div>
                        </div>
                      </Link>

                      <Divider
                        pb={'0px'}
                        color="rgba(145, 152, 176, 0.50)"
                        w={'100%'}
                      />
                    </>
                  ))}
                </>
              ) : (
                <>
                  {FourthSectionData.sections.map((section, index) => (
                    <>
                      {index === 0 && (
                        <Divider
                          pb={'0px'}
                          color="rgba(145, 152, 176, 0.50)"
                          w={'100%'}
                        />
                      )}
                      <Link
                        href={`/announcement/${index}`}
                        style={{ textDecoration: 'none' }}>
                        <div
                          style={{
                            width: isMobile ? '' : '100%',
                            maxWidth: '1064px',
                            display: 'flex',
                            padding: '24px 24px',
                          }}>
                          <div style={{ display: 'flex', gap: 25 }}>
                            <Body variant={1} color="#F2F3F7">
                              {section.date}
                            </Body>
                            <BodyBold
                              variant={1}
                              color="#4178FA"
                              style={{ cursor: 'pointer' }}>
                              {section.title}
                            </BodyBold>
                          </div>
                        </div>
                      </Link>

                      <Divider
                        pb={'0px'}
                        color="rgba(145, 152, 176, 0.50)"
                        w={'100%'}
                      />
                    </>
                  ))}
                </>
              )}
            </div>
          </Stack>
          <Divider pb={'15px'} color="rgba(145, 152, 176, 0.50)" w={'100%'} />
        </div>
      </div>
    </>
  );
};

export default Announcement;
