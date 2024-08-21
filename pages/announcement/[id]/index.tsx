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

const DummyData = {
  headline: '服务器更新',
  date: '28/12/2024',
  author: 'WolfPlanet',
  description1: `羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。
    
    羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。
    
    羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。羽高您蝴目早村交村，停雞枝合對節完扒紅甲六黃聽第門久身裏？月月家歌親拉自少進海而汗快清比平雨坐對、牠交五做貫大。夕忍乞節弓，飽足米裏合力科貓害苗。幸尾昌助收這己封正休植跟常雲都沒定。都裏北斗車地戶刃吃人！去喜它玉事你正皮美雄什尺筆好波道父祖，毛在蝴還立問條京幾物的人化。
    `,
};

const DummyDataEn = {
  headline: 'Product Iteration',
  date: '28/12/2024',
  author: 'WolfPlanet',
  description1: `Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia dolor netus duis mi tincidunt cubilia. Faucibus mi sit placerat amet mollis luctus. Ligula dictum commodo viverra feugiat sociosqu. Vivamus netus congue nisi feugiat nunc accumsan tincidunt consequat. Ornare nullam mus morbi adipiscing est primis ridiculus nunc neque. Maximus nam per sollicitudin dolor nascetur. Odio luctus malesuada vel tellus class urna ante orci. Non posuere duis sagittis sit ultrices.

Dis dictum aenean neque ridiculus elit pharetra. Neque nostra blandit semper per accumsan magna lorem proin maecenas. Etiam adipiscing duis eu maximus tellus nunc massa. Ac tempor nostra dapibus ultricies phasellus gravida nec. Montes vel arcu platea elementum lacinia. Consectetur vehicula dapibus tortor a vitae sit. Feugiat eleifend aliquet fusce erat sodales. Iaculis lacus nunc pretium est odio venenatis urna. Iaculis lobortis vestibulum fames nisi nam accumsan vitae natoque orci.

Primis duis lectus torquent mus viverra auctor. Fringilla lacinia dui inceptos sodales elit ultricies nunc. Aenean lacus parturient hac blandit eros posuere nibh. Massa quis consectetur diam; arcu mattis consequat. Interdum id parturient nunc primis netus class conubia. Nisi vehicula potenti dictumst cursus varius ridiculus vestibulum. Porttitor tempor eu; nibh blandit ornare a enim.
    `,
};

const AnnouncementDetail = () => {
  const router = useRouter();
  console.log('Activity page router.query.id', router.query.id);
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
                {DummyDataEn.headline}
              </Heading>
            ) : (
              <BodyBold variant={7} color="#F2F3F7" style={{ lineHeight: 1.5 }}>
                {DummyData.headline}
              </BodyBold>
            )}

            <div style={{ display: 'flex', gap: '16px', marginTop: 28 }}>
              <FacebookLogo className={styles.icons} />
              <InstagramLogo className={styles.icons} />
              <LinkedinLogo className={styles.icons} />
              <Link className={styles.icons} />
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: 28 }}>
              {router.locale === 'en' ? (
                <Heading
                  variant={isMobile ? 4 : 5}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {DummyDataEn.date}
                </Heading>
              ) : (
                <BodyBold
                  variant={1}
                  color="#F2F3F7"
                  style={{ lineHeight: 1.5 }}>
                  {DummyData.date}
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
              {DummyDataEn.description1}
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
              {DummyData.description1}
            </Body>
          )}
        </Stack>
      </div>

      {!isMobile ? <DownloadSection /> : <DownloadMobileSection />}
    </>
  );
};

export default AnnouncementDetail;
